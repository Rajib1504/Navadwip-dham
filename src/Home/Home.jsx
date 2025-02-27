import React from 'react';
import Banner from '../Components/Banner/Banner';
import Extra from '../Components/IlandImages/Extra';
import IslandList from '../Components/IslandList/IslandList';

const Home = () => {
      return (
            <div>
                 <Banner/> 
                 <Extra/>
                 {/* ilandlist  */}
                 <IslandList/>
            </div>
      );
};

export default Home;