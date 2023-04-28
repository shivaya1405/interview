import "./App.css";

import Menu from "./component/menu";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="h-16 m-2 shadow-lg bg-orange-200 text-center">Header</div>
      <div className="flex  bg-zinc-200 rounded-lg h-screen bg-auto">
        <Menu />
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
