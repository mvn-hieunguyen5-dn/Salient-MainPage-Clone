import React from "react";
import useScrollPercentage from "../hooks/useScrollPercentage";
export const Scroll= React.createContext({scrollPercentage:10,scrollPosition:100});

export default function CrollPositionConstext({ children }: { children: any }) {
  const [scrollRef, scrollPercentage, scrollPosition] = useScrollPercentage();
  return (
    <div ref={scrollRef} className="scroll-handle-here" onScroll={(e)=>console.log(e)
    }>
      {/* <p>{scrollPercentage}</p> */}
      <Scroll.Provider value={{ scrollPercentage, scrollPosition}}>
        {children}
      </Scroll.Provider>
    </div>
  );
}
