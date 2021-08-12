import WeightChart from "components/healthMax/WeightChart";
import healthMaxData, { WeightData } from "mock";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [weightData, setWeightDate] = useState<WeightData[][] | null>(null);

  useEffect(() => {
    setWeightDate(healthMaxData.weight);
  }, []);

  return (
    <>
      {weightData && (
        <div>
          <div>체중</div>
          <WeightChart data={weightData} />
        </div>
      )}
    </>
  );
}

export default App;
