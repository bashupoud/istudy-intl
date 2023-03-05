import { useState } from "react";
import "./App.scss";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <ComingSoon />
    </div>
  );
}

export default App;
