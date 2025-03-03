import React from 'react';
import NavadwipMeaning from '../NavadwipMeaning/NavadwipMeaning';
import IlandImages from '../IlandImages/IlandImages';

const Banner = () => {
      return (
            <section className=' md:pt-space120 border-2 border-red-500 flex flex-col justify-center items-center lg:pt-space120 '>
                  <img src="/public/Vector.svg" className=' bg-success/0 sticky -z-20 lg:top-24   w-56 md:w-96 top-[50%] -translate-y-1/2 block' alt="" />
                  <div className=' min-h-screen flex justify-center items-center flex-col'>
                  <h1 className='absolute uppercase text-mobileHero md:text-heading1 font-primaryLight  md:tracking-wider   z-20 mix-blend-difference text-success  top-[50%] -translate-y-1/2 block w-full text-center '>Navadvip</h1>
                  <div className='lg:ml-14'>
                  <h3 className='text-center pt-space30  font-primaryLight md:text-textRegular text-mobileTextRegular  lg:text-textRegular mix-blend-difference text-success'>The Most Sacred Place in the World</h3>
                  <p className='text-center md:py-space15 py-spacelg font-primaryLight md:text-textSmall text-mobiletextSmall lg:text-textSmall mix-blend-difference text-success'>(Scroll to Explore)</p>
                  </div>
                  </div>
                  <NavadwipMeaning/>
                  <IlandImages/>
            </section>
  
      );
};

export default Banner;