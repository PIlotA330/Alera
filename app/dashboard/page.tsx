

import SympTrack from './SympTrack';
import SympCharts from './SympCharts';
import SideBar from '../SideBar';


export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full h-16 bg-blue-500"></header>

      <main className="flex flex-grow">
        <SideBar />
        <div className="flex flex-col w-full items-center">
          <SympTrack />
          <SympCharts />
        </div>
      </main>
    </div>
  );
}
