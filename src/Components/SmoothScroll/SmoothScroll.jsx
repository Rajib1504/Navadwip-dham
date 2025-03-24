import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScroll = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const targetid = location.hash.substring(1).replace(/\s+/g, "-")
      const element = document.getElementById(targetid);
      if(element){
            setTimeout(() => {
                  element.scrollIntoView({behavior:"smooth",block:'start'})
            }, 100);
      }
    }
  }, [location]);
  return null;
};

export default SmoothScroll;
