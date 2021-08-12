import { WeightData } from "mock";

export const getChartDataFormat = (currentData: WeightData[]) => {
  return {
    label: [
      ...currentData.map((item) => (item ? item.date.substr(0, 10) : null)),
    ],
    datasets: [
      {
        label: "테스트트트",
        data: [...currentData.map((item) => (item ? item.weight : null))],
        fill: false,
        fontColor: "red",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
};
