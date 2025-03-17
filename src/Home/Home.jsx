import React from 'react';
import Banner from '../Components/Banner/Banner';

import IslandList from '../Components/IslandList/IslandList';
import Antardvip from '../Components/ParikramaDays/Day-1/Antardvip/Antardvip';
import Books from './../Components/Books/Books';
import Simantavip from '../Components/ParikramaDays/Day-1/SimantaDvip/Simantavip';
import Godrumdvip from '../Components/ParikramaDays/Day-2/Godrumdvip/Godrumdvip';
import Madhyadvip from '../Components/ParikramaDays/Day-2/Madhyadvip/Madhyadvip';
import Koladvip from './../Components/ParikramaDays/Day-3/Koladvip/Koladvip';
import Ritudvip from '../Components/ParikramaDays/Day-3/Ritudvip/Ritudvip';
import Jahnudvip from '../Components/ParikramaDays/Day-3/Jahnudvip/Jahnudvip';
import Modrumadvip from '../Components/ParikramaDays/Day-3/Modrumadvip/Modrumadvip';
import Rudradvip from '../Components/ParikramaDays/Day-4/Rudradvip/Rudradvip';

import DayOne from '../Components/ParikramaDays/Day-1/DayOne';
import DayThree from '../Components/ParikramaDays/Day-3/DayThree';
import DayFour from '../Components/ParikramaDays/Day-4/DayFour';
import DayTwo from './../Components/ParikramaDays/Day-2/DayTwo';
import Modrumadvip2 from '../Components/ParikramaDays/Day-4/Modrumadvip/Modrumadvip2';




const Home = () => {
      return (
            <div >
                 <Banner/> 
                 {/* ilandlist  */}
                 <IslandList/>
                 <DayOne/>
                 <Antardvip/>
                 <Simantavip/>
                  <DayTwo/>
                 <Godrumdvip/>
                 <Madhyadvip/>
                <DayThree/>
                 <Koladvip/>
                 <Ritudvip/>
                 <Jahnudvip/>
                 <Modrumadvip/>
                 <DayFour/>
                 <Modrumadvip2/>
                 <Rudradvip/>

                 {/* books  */}
                 <Books/>
            </div>
      );
};

export default Home;