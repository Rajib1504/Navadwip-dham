import React, { lazy, Suspense } from "react";
import Banner from "../Components/Banner/Banner";
const IslandList = lazy(() => import("../Components/IslandList/IslandList"));
const Books = lazy(() => import("./../Components/Books/Books"));
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
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Banner />
      </Suspense>
      {/* ilandlist  */}
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <IslandList />
      </Suspense>{" "}
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <DayOne />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Antardvip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Simantavip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <DayTwo />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Godrumdvip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Madhyadvip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <DayThree />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Koladvip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Ritudvip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Jahnudvip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Modrumadvip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <DayFour />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Modrumadvip2 />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        <Rudradvip />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen loading-spinner"></div>}>
        {/* books  */}
        <Books />
      </Suspense>
    </div>
  );
};

export default Home;
