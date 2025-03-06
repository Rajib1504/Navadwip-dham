import React from 'react';
import NavadwipMeaning from '../NavadwipMeaning/NavadwipMeaning';
import IlandImages from '../IlandImages/IlandImages';

const Banner = () => {
      return (
            <section id='topContainer' className=' md:pt-space120 flex flex-col justify-center items-center '>
                  <img src="/Vector.svg" className=' bg-success/0 sticky -z-20  w-[50%] md:w-[34vw] top-[50%]  -translate-y-1/2 block' alt="" />
                  <div className=' w-11/12 mx-auto min-h-screen  flex justify-center items-center flex-col'>
                  <h1 className='absolute uppercase text-[15vw] font-primaryLight    z-20 mix-blend-difference text-success  top-[50%] -translate-y-1/2 block text-center '>Navadvip</h1>
                  <div className=''>
                  <h3 className='font-primaryLight md:text-textRegular text-mobileTextRegular w-full text-center lg:text-textRegular mix-blend-difference text-success'>The Most Sacred Place in the World</h3>
                  <p className='text-center md:py-space15 py-spacelg font-primaryLight md:text-textSmall text-mobiletextSmall mix-blend-difference text-success'>(Scroll to Explore)</p>
                  </div>
                  </div>
                  <NavadwipMeaning/>
                  <IlandImages/>
            </section>
  
      );
};

export default Banner;