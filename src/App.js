import React, { useContext } from "react";
// import component...
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { cursorRef } = useContext(CursorContext);

  return (
    <div>
      <Header />
      <AnimRoutes />
      {/* cursor */}
      <div className="cursor" ref={cursorRef} />
    </div>
  );
};

export default App;
