import React from 'react';
import Banner from '../Components/Banner/Banner';
import Extra from '../Components/IlandImages/Extra';
import IslandList from '../Components/IslandList/IslandList';
import DayList from '../Components/ParikramaDays/DayList';
import Antardvip from '../Components/ParikramaDays/Day-1/Antardvip/Antardvip';
import Books from './../Components/Books/Books';
import Simantavip from '../Components/ParikramaDays/Day-1/SimantaDvip/Simantavip';
import Godrumdvip from '../Components/ParikramaDays/Day-2/Godrumdvip/Godrumdvip';
import Madhyadvip from '../Components/ParikramaDays/Day-2/Madhyadvip/Madhyadvip';

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
                 <Simantavip/>
                 <Godrumdvip/>
                 <Madhyadvip/>
                 

                 {/* books  */}
                 <Books/>
            </div>
      );
};

export default Home;