import { useEffect, useState } from "react";

const getSize = () => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => {
    const newSize = getSize();

    for (let x in windowSize)
      if (windowSize[x] !== newSize[x]) {
        setWindowSize(getSize());
        break;
      }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
}
