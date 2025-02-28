import React from 'react';
import NavadwipMeaning from '../NavadwipMeaning/NavadwipMeaning';
import IlandImages from '../IlandImages/IlandImages';

const Banner = () => {
      return (
            <div className=' md:pt-space120 lg:pt-space120 '>
                  <img src="/public/Vector.svg" className='bg-white sticky -z-20 lg:top-24 top-24  md:top-24  lg:left-[38%] md:left-[30%] w-56 md:w-96 mx-auto lg:w-auto' alt="" />
                  <h1 className='absolute top-44 lg:top-96 md:top-96 uppercase lg:left-[28%] md:left-[13%]   text-heading2 md:text-heading lg:text-heading1 font-primaryLight tracking-widest left-[5%] md:tracking-wider   z-20 mix-blend-difference text-success lgMobile:left-[11%] smMobile:left-[4%] '>Navadvip</h1>
                  <div className='lg:ml-14'>
                  <h4 className='text-center pt-space30  font-primaryLight md:text-textRegular text-textSmall md:ml-8 lg:ml-0 lg:text-textRegular mix-blend-difference text-success'>The Most Sacred Place in the World</h4>
                  <p className='text-center md:py-space15 py-spacelg lg:py-space15 font-primaryLight md:text-textSmall text-sm lg:text-textSmall mix-blend-difference text-success'>(Scroll to Explore)</p>
                  </div>
                  <NavadwipMeaning/>
                  <IlandImages/>
            </div>
  
      );
};

export default Banner;