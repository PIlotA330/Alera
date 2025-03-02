import { Card } from "@mui/material";
import { BarCharts } from "../components/charts/charts";
import SympCharts from "../dashboard/SympCharts";
import SympTrack from "../dashboard/SympTrack";
import SideBar from "../SideBar";

const data = [
    {
      date: '1/1',
      insomnia: 3,   // Insomnia (scale 0-10)
      seizures: 1,    // Seizures (scale 0-10)
      fatigue: 5,     // Fatigue (scale 0-10)
      muscleWeakness: 4, // Muscle weakness (scale 0-10)
    },
    {
      date: '1/2',
      insomnia: 2,
      seizures: 0,
      fatigue: 4,
      muscleWeakness: 3,
    },
    {
      date: '1/3',
      insomnia: 4,
      seizures: 1,
      fatigue: 6,
      muscleWeakness: 5,
    },
    {
      date: '1/4',
      insomnia: 5,
      seizures: 1,
      fatigue: 5,
      muscleWeakness: 4,
    },
    {
      date: '1/5',
      insomnia: 2,
      seizures: 0,
      fatigue: 4,
      muscleWeakness: 3,
    },
    {
      date: '1/6',
      insomnia: 4,
      seizures: 2,
      fatigue: 6,
      muscleWeakness: 5,
    },
    {
      date: '1/7',
      insomnia: 3,
      seizures: 1,
      fatigue: 7,
      muscleWeakness: 6,
    },
  ];
  
  
const SymptomPage = () => {
return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full h-16 bg-blue-500"></header>

      <main className="flex flex-grow">

        <SideBar />
        <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl">My Symptoms</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 w-full p-7">
        <Card>
        <BarCharts data={data} symp="seizures" />
      </Card>
      <Card>
        <BarCharts data={data} symp="insomnia" />
      </Card>
      <Card>
        <BarCharts data={data} symp="fatigue" />
      </Card>
      <Card>
        <BarCharts data={data} symp="muscleWeakness" />
      </Card>
        </div></div>
      </main>
      
    </div>
  );
}
  export default SymptomPage