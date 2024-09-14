// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import { ApexOptions } from "apexcharts";
// import { Card, CardContent } from "../ui/card";

// // Dynamically import ReactApexChart with no SSR to avoid window is not defined error
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// const CandlestickChart = () => {
//   const series = [
//     {
//       data: [
//         { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
//         { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
//         // ... (rest of the data points)
//         { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
//       ],
//     },
//   ];

//   const options = {
//     chart: {
//       type: "candlestick",
//       height: 350,
//     },
//     title: {
//       text: "CandleStick Chart",
//       align: "left",
//     },
//     xaxis: {
//       type: "datetime",
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true,
//       },
//     },
//   };

//   return (
//     <Card className="">
//       <CardContent className="p-6">
//         <div>
//           <div id="chart">
//             <ReactApexChart
//               options={options}
//               series={series}
//               type="candlestick"
//               height={350}
//             />
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CandlestickChart;
