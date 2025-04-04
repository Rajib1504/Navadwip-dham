import React, { lazy, Suspense } from "react";
import Banner from "../Components/Banner/Banner";

import IslandList from "../Components/IslandList/IslandList";
import Books from "./../Components/Books/Books";
// import Antardvip from '../Components/ParikramaDays/Day-1/Antardvip/Antardvip';
// Lazy Loading for Heavy Components
const DayOne = lazy(() => import("../Components/ParikramaDays/Day-1/DayOne"));
const Antardvip = lazy(() =>
  import("../Components/ParikramaDays/Day-1/Antardvip/Antardvip")
);
const Simantavip = lazy(() =>
  import("../Components/ParikramaDays/Day-1/SimantaDvip/Simantavip")
);

const DayTwo = lazy(() => import("../Components/ParikramaDays/Day-2/DayTwo"));
const Godrumdvip = lazy(() =>
  import("../Components/ParikramaDays/Day-2/Godrumdvip/Godrumdvip")
);
const Madhyadvip = lazy(() =>
  import("../Components/ParikramaDays/Day-2/Madhyadvip/Madhyadvip")
);

const DayThree = lazy(() =>
  import("../Components/ParikramaDays/Day-3/DayThree")
);
const Koladvip = lazy(() =>
  import("../Components/ParikramaDays/Day-3/Koladvip/Koladvip")
);
const Ritudvip = lazy(() =>
  import("../Components/ParikramaDays/Day-3/Ritudvip/Ritudvip")
);
const Jahnudvip = lazy(() =>
  import("../Components/ParikramaDays/Day-3/Jahnudvip/Jahnudvip")
);
const Modrumadvip = lazy(() =>
  import("../Components/ParikramaDays/Day-3/Modrumadvip/Modrumadvip")
);

const DayFour = lazy(() => import("../Components/ParikramaDays/Day-4/DayFour"));
const Rudradvip = lazy(() =>
  import("../Components/ParikramaDays/Day-4/Rudradvip/Rudradvip")
);
const Modrumadvip2 = lazy(() =>
  import("../Components/ParikramaDays/Day-4/Modrumadvip/Modrumadvip2")
);

const Home = () => {
  return (
    <div>
      <Banner />
      {/* ilandlist  */}
      <IslandList />
      <Suspense fallback={<div className="min-h-screen"></div>}>
        <DayOne />
        <Antardvip />
        <Simantavip />
        <DayTwo />
        <Godrumdvip />
        <Madhyadvip />
        <DayThree />
        <Koladvip />
        <Ritudvip />
        <Jahnudvip />
        <Modrumadvip />
        <DayFour />
        <Modrumadvip2 />
        <Rudradvip />
      </Suspense>

      {/* books  */}
      <Books />
    </div>
  );
};

export default Home;
