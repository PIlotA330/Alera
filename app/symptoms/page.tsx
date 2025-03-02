import { Card } from "@mui/material";
import { BarCharts } from "../components/charts/charts";
import SympCharts from "../dashboard/SympCharts";
import SympTrack from "../dashboard/SympTrack";
import SideBar from "../SideBar";

const data = [
    {
      date: '1/1',
      insomnia: 4000,
      seizures: 2400,
      amt: 2400,
    },
    {
      date: '1/2',
      uv: 3000,
      seizures: 1398,
      amt: 2210,
    },
    {
      date: '1/3',
      uv: 2000,
      seizures: 9800,
      amt: 2290,
    },
    {
      date: '1/4',
      uv: 2780,
      seizures: 3908,
      amt: 2000,
    },
    {
      date: '1/5',
      uv: 1890,
      seizures: 4800,
      amt: 2181,
    },
    {
      date: '1/6',
      uv: 2390,
      seizures: 3800,
      amt: 2500,
    },
    {
      date: '1/7',
      uv: 3490,
      seizures: 4300,
      amt: 2100,
    },
  ];
  
const SymptomPage = () => {
return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full h-16 bg-blue-500"></header>

      <main className="flex flex-grow">
        <SideBar />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 w-full p-7">
        <Card>
        <BarCharts data={data} symp="seizures" />
      </Card>
      <Card>
        <BarCharts data={data} symp="insomnia" />
      </Card>
      <Card>
        <BarCharts data={data} symp="amt" />
      </Card>
      <Card>
        <BarCharts data={data} symp="uv" />
      </Card>
        </div>
      </main>
    </div>
  );
}
  export default SymptomPage