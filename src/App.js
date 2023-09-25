import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("teal");
  return (
    <>
    <div
      className="w-full h-screen flex justify-center items-end p-5"
      style={{ background: color }}
    >
      <div className="w-50 flex justify-between items-center p-2 px-6 gap-4  bg-gray-400  rounded-xl">
        <button
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          {" "}
          Red
        </button>
        <button
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={() => setColor("yellow")}
        >
            Yellow
        </button>
        <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
        >
            Purple
        </button>

        <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
        >
            Pink
        </button>

        <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
        >
            Orange
        </button>

        <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
        >
            Black   
        </button>

      


        
      </div>
    </div>
    </>

  );
};
export default App;
