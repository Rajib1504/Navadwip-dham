import React from 'react';
import NavadwipMeaning from '../NavadwipMeaning/NavadwipMeaning';
import IlandImages from '../IlandImages/IlandImages';

const Banner = () => {
      return (
            <div className=' md:pt-space60 lg:pt-space60 border-2 border-red-400'>
                  <img src="/public/Vector.svg" className='sticky -z-20 lg:top-24 top-24  md:top-24 bg-white lg:left-[38%] md:left-[30%] w-56 md:w-96 mx-auto lg:w-auto' alt="" />
                  <h1 className='absolute top-44 lg:top-96 md:top-96 uppercase lg:left-[28%] md:left-[13%]   text-[72px] md:text-heading lg:text-heading1 font-primaryLight tracking-wide md:tracking-wider lg:tracking-wider left-[6%] z-50'>Navadvip</h1>
                  <div className='lg:ml-14'>
                  <h4 className='text-center pt-space30  font-primaryLight md:text-textRegular text-textSmall lg:text-textRegular'>The Most Sacred Place in the World</h4>
                  <p className='text-center md:py-space15 py-spacelg lg:py-space15 font-primaryLight md:text-textSmall text-sm lg:text-textSmall'>(Scroll to Explore)</p>
                  </div>
                  <NavadwipMeaning/>
                  <IlandImages/>
            </div>
      );
};

export default Banner;