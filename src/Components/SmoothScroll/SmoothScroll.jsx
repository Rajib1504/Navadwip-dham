import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1).replace(/\s+/g, "-");
      const element = document.getElementById(targetId);

      if (element) {
        setTimeout(() => {
          const isMobile = window.innerWidth < 768;
          const yOffset = isMobile ? 10 : -80;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          // Safari Fix: scrollTo fallback
          try {
            window.scrollTo({ top: y, behavior: "instant" }); // "instant" better for Safari
          } catch (e) {
            element.scrollIntoView({ behavior: "auto", block: "center" });
          }
        }, 100);
      }
    }
  }, [location]);

  return null;
};

export default SmoothScroll;
