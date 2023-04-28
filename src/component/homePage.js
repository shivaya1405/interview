import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const option = {
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
};

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </>
  );
};
export default HomePage;
