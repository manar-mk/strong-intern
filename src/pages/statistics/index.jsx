import PieChart from "./pie-chart/PieChart";
import BarChart from "./bar-chart/BarChart";

export default function Dashboard() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin:"auto", height: "100vh"}}>
      <BarChart />
      <PieChart />
    </div>
  )
}
