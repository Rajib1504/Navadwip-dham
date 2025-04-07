import { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import Router from './Router/Router';
import MapPreloader from './Maploader/Maploader';


const AppWrapper = () => {
  const [isMapReady, setIsMapReady] = useState(false);

  return (
    <>
      {!isMapReady && <MapPreloader onComplete={() => setIsMapReady(true)} />}
      <RouterProvider router={Router} />
    </>
  );
};

export default AppWrapper;