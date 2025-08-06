"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type Trade = {
  p: number;
  t: number;
};

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface TradeDataPoint {
  time: string;
  btcusdt: number;
}

interface ChartData {
  chartData: TradeDataPoint[];
  activeChart: string;
  setActiveChart: (key: string) => void;
  symbol: string;
}

export default function StockChart(props: ChartData) {
  return (
    <Card className="py-4 sm:py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
          <CardTitle>Live Stock Chart</CardTitle>
          <CardDescription>Real-time prices for {props.symbol}</CardDescription>
        </div>
        <div className="flex">
          <button
            data-active={props.activeChart === "btcusdt"}
            className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:px-8 sm:py-6"
            onClick={() => props.setActiveChart("btcusdt")}
          >
            <span className="text-muted-foreground text-xs">
              BINANCE:BTCUSDT
            </span>
            <span className="text-lg leading-none font-bold sm:text-3xl">
              {props.chartData.length > 0
                ? props.chartData.at(-1)?.btcusdt.toFixed(2)
                : "Loading..."}
            </span>
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart data={props.chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={16}
            />
            <YAxis
              domain={["auto", "auto"]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={props.activeChart}
                  labelFormatter={(value) => value}
                />
              }
            />
            <Line
              dataKey={props.activeChart}
              type="monotone"
              stroke={`var(--color-${props.activeChart})`}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
