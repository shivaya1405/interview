import "./App.css";

import Menu from "./component/menu";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="h-16 m-2 shadow-lg bg-orange-200 text-center">Header</div>
      <div className="flex h-screen bg-zinc-200 rounded-lg">
        <Menu />
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
