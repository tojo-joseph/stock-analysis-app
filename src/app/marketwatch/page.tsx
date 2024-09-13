import { Card, CardContent } from "@/components/ui/card";
import { GeistSans } from "geist/font/sans";

export default function MarketWatch() {
  return (
    <div>
      <h1 className={`${GeistSans.className} mb-3 text-2xl font-bold`}>
        MarketWatch
      </h1>
      <Card className="max-w-[80ch]">
        <CardContent className="p-6">
          <h3>
            Volkswagen Brand Names New CFO Amid Cost-Cutting Campaign — Update
          </h3>
          <span>By David Sachs</span>
          <p>
            Volkswagen Group named David Powels chief financial officer of its
            namesake brand amid a cost-cutting initiative that has angered
            workers in Germany over potential plant closures. Powels will take
            the financial reins at Volkswagen brand on Oct. 1 from Patrik A.
            Mayer, the company said Monday. He comes from the company's Seat
            brand, where he headed finance and IT. Mayer will take Powels' old
            job, the carmaker said. The CFO swap within German car giant's
            mass-market segment--which houses the VW and Seat brands, as well as
            Skoda--comes as the company grapples with a shift toward electric
            vehicles that turned bumpy as sales slowed and competition
            intensified. Powels will be tasked with making the brand more
            competitive with cost savings, Thomas Schaefer, chief executive of
            the Volkswagen cars brand, said. Powels will take over as CFO under
            more difficult conditions than did Mayer, who became CFO in 2022,
            the executive said. Last week, Volkswagen sparred with
            representatives from its workers' council in Germany over the
            prospect of closing plants as part of a plan aimed at saving 10
            billion euros ($11.09 billion) at the brand by 2026. The company
            reached a deal with workers in December last year in a bid to boost
            the brand's profitability, but executives said last week that the
            plan was falling short and that more aggressive measures were
            needed. Plant closures in Germany couldn't be ruled out, executives
            said, which would be an unprecedented move in Volkswagen's history.
            Powels joined Volkswagen in South Africa in 1989 and has held a
            variety of roles, including South America chief and vice president
            for the SAIC Volkswagen Automotive joint venture in China. Since
            2021, he has been has been finance and IT head at Seat. Volkswagen
            Group has been seeking closer cooperation among its mass-market
            brands, which as a segment were the biggest contributor to the
            group's revenue but lagged behind other segments in terms of
            profitability in the first half. Write to David Sachs at
            david.sachs@wsj.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
