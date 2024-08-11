import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StockChart } from "@/components/ui/stock-chart";
import { ChartCard } from "@/components/chart-card/chart-card";

export default function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <ChartCard />
      </div>
    </div>
  );
}
