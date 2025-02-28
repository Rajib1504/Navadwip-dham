import React from 'react';
import Banner from '../Components/Banner/Banner';
import Extra from '../Components/IlandImages/Extra';
import IslandList from '../Components/IslandList/IslandList';
import DayList from '../Components/ParikramaDays/DayList';
import Antardvip from '../Components/ParikramaDays/Day-1/Antardvip/Antardvip';

const Home = () => {
      return (
            <div>
                 <Banner/> 
                 <Extra/>
                 {/* ilandlist  */}
                 <IslandList/>
                 {/* Daylist  */}
                 <DayList/>
                 <Antardvip/>
            </div>
      );
};

export default Home;