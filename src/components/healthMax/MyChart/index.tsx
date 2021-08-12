import { useEffect, useState } from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { WeightData } from "mock";
import { getChartFormatData } from "utils";

type PropsType = {
  data: WeightData[][];
  title: string;
};

Chart.register(ChartDataLabels);

const MyChart = ({ data, title }: PropsType) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const handleClickLeftButton = () => {
    if (currentPageIndex === 0) return console.log("과거 데이터가 없습니다.");
    setCurrentPageIndex((prev) => prev - 1);
  };

  const handleClickRightButton = () => {
    if (data.length === 1 || currentPageIndex === data.length - 1)
      return console.log("이후 데이터가 없습니다.");
    setCurrentPageIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (data.length === 0) return;
    setCurrentPageIndex(data.length - 1); // 12개의 차트 데이터로 이루어진 2차원 배열에서 제일 마지막 인덱스의 배열을 데이터를 현재 데이터로 함
  }, [data]);

  const currentData = data[currentPageIndex]; // 데이터 자체가 2차원 배열이기 때문에 currentPageIndex를 넣어 현재 페이지에 보여줄 데이터를 얻음
  const chartData = getChartFormatData(currentData); // 현재페이지의 데이터를 차트 라이브러리에 넣기 위해 가공해주는 함수인 getChartDataFormat 실행

  return (
    <div>
      <div>{title}</div>
      <div>
        <button onClick={handleClickLeftButton}>left</button>
        <button onClick={handleClickRightButton}>right</button>
      </div>
      <Line {...chartData} />
      <div>{currentData[0]?.date.split("-")[0]}</div>
    </div>
  );
};

export default MyChart;
