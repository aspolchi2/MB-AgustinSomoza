import { useEffect, useState } from "react";
//custom hook for mobile reasons

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
        //check windows 
      if (window.visualViewport.width <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    //everytime the windows changes execute checkMobile
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return { isMobile };
};
