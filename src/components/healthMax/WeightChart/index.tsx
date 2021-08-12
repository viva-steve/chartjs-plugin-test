import React from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { WeightData } from "mock";
import { useState } from "react";
import { useEffect } from "react";
import { getChartDataFormat } from "utils/getChartData";

type PropsType = {
  data: WeightData[][];
};

Chart.register(ChartDataLabels);

// const data = {
//   labels: [
//     "1/30",
//     "2/22",
//     "3/3",
//     "5/4",
//     "5/30",
//     "6/2",
//     "6/13",
//     "7/12",
//     "8/10",
//     "9/11",
//     "9/20",
//     "12/25",
//   ],
//   datasets: [
//     {
//       label: "테스트트트",
//       data: [12, 19, 3, 5, 2, 3, 10, 20, null, null, null, null],
//       fill: false,
//       fontColor: "red",
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgba(255, 99, 132, 0.2)",
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: false,
//       // display: false,
//     },
//   },
//   plugins: {
//     datalabels: {
//       color: ["red", "blue", "green", "black", "yellow", "pink"],
//       font: {
//         size: "30",
//       },
//       align: "end",
//       anchor: "center",
//     },
//   },
// };

const WeightChart = ({ data }: PropsType) => {
  //   const [totalPageCount, setTotalPageCount] = useState<number>(0);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  // const [curPageData, setCurPageData] = useState<WeightData[] | null>(null);

  const handleClickLeft = () => {
    if (currentPageIndex === 0) return;
    setCurrentPageIndex((prev) => prev - 1);
  };

  const handleClickRight = () => {
    if (data.length === 1 || currentPageIndex === data.length - 1) return;
    setCurrentPageIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (data.length === 0) return;
    // setTotalPageCount(data.length);
    setCurrentPageIndex(data.length - 1);
    // setCurPageData(data[currentPageIndex]);
  }, [data]);

  const currentData = data[currentPageIndex];

  console.log("data", data, "currentData", currentData);
  const result = getChartDataFormat(currentData);
  console.log("result", result);
  return (
    <div>
      <div>
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
      </div>
      <Line data={result} /* options={options}  */ />
    </div>
  );
};

export default WeightChart;
