import React, { createContext, useEffect, useRef } from "react";

// create context...
export const CursorContext = createContext();

// contextProvider...
const CursorContextProvider = ({ children }) => {
  const cursorRef = useRef(null);
  const currentCursorMode = useRef("default");

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      let mousePositionX = clientX - cursorRef.current.clientWidth / 2;
      let mousePositionY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mousePositionX}px,${mousePositionY}px,0)`;
      cursorRef.current.style.display = `inline-block`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cursorEnter = (event) => {
    currentCursorMode.current = "text";
    if (currentCursorMode.current === "text") {
      cursorRef.current.style.height = "140px";
      cursorRef.current.style.width = "140px";
      cursorRef.current.style.backgroundColor = "#fff";
      cursorRef.current.style.mixBlendMode = "difference";
      let mousePositionX = event.clientX - cursorRef.current.clientWidth / 2;
      let mousePositionY = event.clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mousePositionX}px,${mousePositionY}px,0)`;
    }
  };

  const cursorLeave = (event) => {
    currentCursorMode.current = "default";
    if (currentCursorMode.current === "default") {
      cursorRef.current.style.height = "32px";
      cursorRef.current.style.width = "32px";
      cursorRef.current.style.mixBlendMode = "normal";
      cursorRef.current.style.backgroundColor = "#0e1112";
      let mousePositionX = event.clientX - cursorRef.current.clientWidth / 2;
      let mousePositionY = event.clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mousePositionX}px,${mousePositionY}px,0)`;
    }
  };
  return (
    <CursorContext.Provider
      value={{ cursorLeave, cursorEnter, currentCursorMode, cursorRef }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
