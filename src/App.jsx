import React from "react";
import CustomCursor from "./CustomCursor";

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
        <CustomCursor />
        <div
          data-cursor-text="Hello!"
          className="text-6xl font-extrabold w-full text-center"
        >
          HELLO
        </div>
      </div>
    </>
  );
};

export default App;
