import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [option, setOption] = useState({});
  useEffect(() => {
    setOption({
      chart: {
        type: "bar",
      },
      xAxis: {
        type: "category",
        categories: ["apple", "orange", "banana", "grapes"],
      },
      series: {
        data: [2, 4, 5, 7],
      },
    });
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
  );
};
export default HomePage;
