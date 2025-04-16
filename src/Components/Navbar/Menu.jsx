// import React from 'react';

// const Menu = ({setIsOpen,toggleAccordion,setIsParikarmaOpen,isParikarmaOpen}) => {
//       return (
//             <section className="menu min-h-screen overflow-y-scroll pb-0  z-40 bg-primaryBlack w-[100%] box-border fixed flex justify-between ">
//             <div className="font-primaryLight    grid md:w-[100%] grid-cols-12">
//               <div className="md:col-start-5 mt-space60  col-start-1 col-span-12 grid grid-cols-6">
//                 <a
//                   href="#topContainer"
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="title md:my-space15 my-spacelg col-start-1 col-span-5 text-heading3 cursor-pointer md:text-heading2 text-success"
//                 >
//                   Intro
//                 </a>
//                 <div className="col-start-1 col-span-6  ">
//                   <button
//                     type="button"
//                     onClick={toggleAccordion}
//                     className="title cursor-pointer md:my-space15 text-heading3 md:text-heading2 text-success my-spacelg w-full text-left"
//                   >
//                     Parikarma
//                   </button>
//                   <div
//                     className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                       isParikarmaOpen
//                         ? "max-h-[80vh] opacity-100 z-40"
//                         : "max-h-0 opacity-0"
//                     }`}
//                     style={{ maxHeight: isParikarmaOpen ? '80vh' : '0', opacity: isParikarmaOpen ? 1 : 0 }}
//                   >
//                     {isParikarmaOpen && (
//                       <ParikramaList
//                         onClose={() => {
//                           setIsParikarmaOpen(false);
//                           setIsOpen(false); // Keep the main menu open if only closing the accordion
//                         }}
//                       />
//                     )}
//                   </div>
//                 </div>
  
//                 <a
//                   href="#Books"
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="title col-start-1 col-span-5 cursor-pointer md:text-heading2 text-heading3 text-success md:my-space15 my-spacelg"
//                 >
//                   Books
//                 </a>
  
//                 <a
//                   href="mailto:hello@dhama.info?subject=Navadvip"
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="title col-start-1 cursor-pointer col-span-5 md:text-heading2 text-heading3 md:my-space15 my-spacelg text-success"
//                 >
//                   Ask a Question
//                 </a>
//               </div>
//               <footer className="col-span-12    md:w-full grid gird-cols-6  md:text-textSmall text-textRegular text-primaryWhite font-primaryLight">
//                 <p className="paragraph place-self-end col-span-2">@2025</p>
//                 <a
//                   onClick={() => setIsOpen(!isOpen)}
//                   href="https://www.instagram.com/bsvtrust"
//                   target="_blank"
//                   className="paragraph place-self-end col-start-5 col-span-9"
//                 >
//                   Instagram
//                 </a>
//               </footer>
//             </div>
//           </section>
//       );
// };

// export default Menu;