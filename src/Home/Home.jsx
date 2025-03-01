import React from 'react';
import Banner from '../Components/Banner/Banner';
import Extra from '../Components/IlandImages/Extra';
import IslandList from '../Components/IslandList/IslandList';
import DayList from '../Components/ParikramaDays/DayList';
import Antardvip from '../Components/ParikramaDays/Day-1/Antardvip/Antardvip';
import Books from './../Components/Books/Books';

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
                 {/* books  */}
                 <Books/>
            </div>
      );
};

export default Home;