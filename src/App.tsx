import MyChart from "components/healthMax/MyChart";
import healthMaxData, { WeightData } from "mock";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [weightData, setWeightDate] = useState<WeightData[][] | null>(null);

  useEffect(() => {
    setWeightDate(healthMaxData.weight);
  }, []);

  return <>{weightData && <MyChart data={weightData} title="체중" />}</>;
}

export default App;
