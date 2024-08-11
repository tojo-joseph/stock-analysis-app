import { LineChartCard } from "@/components/chartcard/linechart";
import { PieChartCard } from "@/components/chartcard/piechart";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <div className="flex justify-between gap-[32px]">
        <LineChartCard />
        <PieChartCard />
        <PieChartCard />
      </div>
    </div>
  );
}
