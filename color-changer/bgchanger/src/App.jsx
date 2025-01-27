import { useState } from "react";
import "./App.css";
import ColorBtn from "./components/ColorBtn";

function App() {
  const [color, setColor] = useState("olive");
  const clrArr = ["White", "Red", "Yellow", "Orange", "Green", "Violet"];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="colorBtns flex justify-between p-4 absolute bottom-10 w-full bg-white">
        {clrArr.map((clr) => (
          <ColorBtn btnBg={clr} onClick={() => setColor(clr.toLowerCase())} />
        ))}
      </div>
    </>
  );
}

export default App;
