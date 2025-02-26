import React from 'react';
import NavadwipMeaning from '../NavadwipMeaning/NavadwipMeaning';

const Banner = () => {
      return (
            <div className=' pt-space60 border-2 border-red-400'>
                  <img src="/public/Vector.svg" className='sticky -z-20 top-24 bg-white left-[38%] ' alt="" />
                  <h1 className='absolute top-96 uppercase left-[28%] text-heading1 font-primaryLight tracking-wider z-50'>Navadvip</h1>
                  <h4 className='text-center pt-space30  font-primaryLight text-textRegular'>The Most Sacred Place in the World</h4>
                  <p className='text-center py-space15 font-primaryLight text-textSmall'>(Scroll to Explore)</p>
                  <NavadwipMeaning/>
            </div>
      );
};

export default Banner;