import { PieChartCard } from "@/components/chartcard/piechart";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <div className="mb-8 grid grid-cols-3 grid-rows-2 gap-4">
        <div className="col-span-1 row-span-2">
          {/* <CandlestickChart /> */}
          <Card>
            <CardContent className="p-6">
              <h1>Overview (Market Summary)</h1>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 row-span-1">
          <Card>
            <CardContent className="p-6">
              <h1>Key Metrics</h1>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 row-span-1">
          <Card>
            <CardContent className="p-6">
              <h1>News and Events</h1>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
