"use client";

import { AppSidebar } from "@/components/app-sidebar";
import StockChart from "@/components/chart-area-interactive";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

interface TradeData {
  p: number; // price
  s: string; // symbol
  t: number; // timestamp
  v: number; // volume
}

export default function DashboardMain() {
  const [price, setPrice] = useState<number | null>(null);
  const [chartData, setChartData] = useState<
    { time: string; btcusdt: number }[]
  >([]);
  const [symbol, setSymbol] = useState("BINANCE:BTCUSDT");
  const [activeChart, setActiveChart] = useState("btcusdt");

  const [priceArray, setPriceArray] = useState([]);
  const token = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

  useEffect(() => {
    if (!token) {
      console.error("Finnhub token missing!");
      return;
    }

    const socket = new WebSocket(`wss://ws.finnhub.io?token=${token}`);

    socket.addEventListener("open", () => {
      socket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
      );
    });

    socket.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "trade") {
        const trade: TradeData = msg.data[0];
        setPrice(trade.p);

        const time = new Date(trade.t).toLocaleTimeString();

        setChartData((prev) => [
          ...prev.slice(-49), // keep last 50 points max
          { time, btcusdt: trade.p },
        ]);
      }
    });

    return () => {
      socket.send(
        JSON.stringify({ type: "unsubscribe", symbol: "BINANCE:BTCUSDT" })
      );
      socket.close();
    };
  }, [symbol, token]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-1">
            <div className="bg-muted/50 aspect-video rounded-xl">
              <StockChart
                chartData={chartData}
                activeChart={activeChart}
                setActiveChart={setActiveChart}
                symbol="BINANCE:BTCUSDT"
              />
            </div>

            <div className="p-4 bg-gray-900 text-white rounded-md shadow-md w-full max-w-sm">
              <h2 className="text-lg font-semibold">{symbol} Live Price</h2>
              <p className="text-3xl mt-2">
                {price ? `$${price.toFixed(2)}` : "Loading..."}
              </p>
            </div>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
