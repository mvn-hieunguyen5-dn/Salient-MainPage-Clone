import { useRef, useState, useEffect } from "react";

export default function useScrollPercentage(): any[] {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(NaN);
  const [position, setPosition] = useState<number>(NaN);
  
  const reportScroll = (e: any) => {
    setScrollPercentage(getScrollPercentage(e.target).percent);
    setPosition(getScrollPercentage(e.target).position);
  };

  useEffect(() => {
    const node = scrollRef.current;
    
   
    if (node !== null) {
      node.addEventListener("scroll", reportScroll, { passive: true });
      if (Number.isNaN(scrollPercentage)) {

        setScrollPercentage(getScrollPercentage(node).percent);
        setPosition(getScrollPercentage(node).position);
      }
    }
    return () => {
      if (node !== null) {
        node.removeEventListener("scroll", reportScroll);
      }
    };
  }, [scrollPercentage]);
  return [
    scrollRef,
    Number.isNaN(scrollPercentage) ? 0 : scrollPercentage,
    position,
  ];
}
type SrcollData = {
  percent: number;
  position: number;
};
function getScrollPercentage(element: any): SrcollData {
  if (element === null) {
    return {
      percent: NaN,
      position: NaN,
    };
  }
  const height = element.scrollHeight - element.clientHeight;
  return {
    percent: (element.scrollTop / height) * 100,
    position: element.scrollTop + window.innerHeight,
  };
}
