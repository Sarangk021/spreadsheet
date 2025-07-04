import React from "react";
import TopBar from "./components/TopBar";
import HeaderMenu from "./components/HeaderMenu";
import Spreadsheet from "./components/Spreadsheet";
import TabBar from "./components/TabBar";

const App: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 font-sans text-sm">
      <TopBar />
      <HeaderMenu />
      <div className="flex-1 overflow-auto ">
        <Spreadsheet />
        <TabBar />
      </div>
    </div>
  );
};

export default App;
