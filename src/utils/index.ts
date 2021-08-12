import { WeightData } from "mock";
import dayjs from "dayjs";

export const getChartFormatData = (
  currentData: WeightData[],
  additionalData?: any,
  additionalOptions?: any
) => {
  return {
    data: {
      labels: [
        ...currentData.map((item) =>
          item ? dayjs(item.date).format("MM/DD") : null
        ),
      ],
      datasets: [
        {
          label: "-_-",
          data: [...currentData.map((item) => (item ? item.weight : null))],
          fill: false,
          fontColor: "red",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
      ...additionalData,
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          display: false,
        },
      },
      plugins: {
        datalabels: {
          color: ["red", "blue", "green", "black", "yellow", "pink"],
          font: {
            size: "30",
          },
          align: "end", // 점으로부터 데이터 라벨이 멀어짐
          anchor: "center",
        },
      },
      ...additionalOptions,
    },
  };
};
