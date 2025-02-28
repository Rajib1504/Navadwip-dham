import React from 'react';
import Banner from '../Components/Banner/Banner';
import Extra from '../Components/IlandImages/Extra';
import IslandList from '../Components/IslandList/IslandList';
import DayList from '../Components/ParikramaDays/DayList';

const Home = () => {
      return (
            <div>
                 <Banner/> 
                 <Extra/>
                 {/* ilandlist  */}
                 <IslandList/>
                 {/* Daylist  */}
                 <DayList/>
            </div>
      );
};

export default Home;