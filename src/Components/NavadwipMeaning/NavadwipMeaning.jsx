import React from "react";
import usetextAnimation from "../../Hooks/UsetextAnimation";

const NavadwipMeaning = () => {
  const containerRef = usetextAnimation();
  return (
    <div
      ref={containerRef}
      className="w-11/12 md:w-full mx-auto md:grid grid-cols-12  md:my-space240 "
    >
      <p className="paragraph text-center tracking-wider  md:col-start-3 md:col-span-8  font-primaryLight text-mobileTextRegular  md:text-textRegular  mx-auto">
        Navadvip means “Nine (nava) Islands (dvip)” surrounded by the sacred
        branches of the Ganges. It unfolds like a lotus. At its heart lies the
        birthplace of Sri Chaitanya, symbolizing self-surrender. From surrender,
        devotion blossoms—each petal of this lotus representing hearing,
        chanting, remembering, serving, worshipping, praying, servitorship, and
        friendship. As we journey through these sacred places, their stories
        reveal to us the essence of true devotion.
      </p>
    </div>
  );
};

export default NavadwipMeaning;
