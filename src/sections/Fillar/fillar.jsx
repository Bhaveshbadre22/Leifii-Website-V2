// import React from "react";
// import SvgLine from "../../components/SvgLine/svgLine";

// const Fillar = () => {
//   return (
//     <div>
//       <div className="h-[120vh] md:h-[120vh] w-full bg-white overflow-hidden">
//         <div className="h-[65%] w-full flex flex-col md:flex-row items-center">
//           <div className="order-2 md:order-1 w-full lg:w-[90%] text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-questrial mt-[2rem] lg:mt-[8rem] ml-[2rem] lg:ml-[5rem] items-center">
//             <div>DESIGNING YOUR</div>
//             <div>LEAVES</div>
//           </div>
//           <div className="order-1 md:order-2 w-full lg:w-[30%] h-full mt-[2rem] lg:mt-[6rem] lg:pt-[0rem] lg:mr-[8rem] flex items-center justify-center">
//             <div className="bg-slate-600 h-[18rem] md:h-[14rem] lg:h-[18rem] w-[18rem] md:w-[14rem] lg:w-[30rem] rounded-full overflow-hidden">
//               <video
//                 className="w-full h-full object-cover"
//                 src="/leaf.mp4"
//                 autoPlay
//                 playsInline
//                 loop
//                 muted
//               ></video>
//             </div>
//           </div>
//         </div>

//         <div className="">
//           <SvgLine />
//         </div>
//         {/* <div
//   className="w-full lg:w-full text-[1.25rem] md:text-[1.75rem] lg:text-[2.03rem] tracking-wide px-0 pt-0 md:pt-0 lg:px-10 text-left uppercase"
//   style={{ paddingLeft: '5rem', paddingRight: '0', lg: { paddingLeft: '20rem' } }}
// >
//   "Together, we will grow businesses and build brands that make a difference"
// </div> */}
// <div
//   className="w-full text-[1.25rem] md:text-[1.75rem] lg:text-[2.03rem] tracking-wide uppercase text-left md:text-center"
//   style={{
//     paddingLeft: '2rem', // Padding for mobile
//     paddingRight: '0',
//   }}
// >
//   "Together, we will grow businesses and build brands that make a difference"
// </div>

// <style jsx>{`
//   @media (min-width: 1024px) {
//     div {
//       padding-left: 0; // No padding on larger screens
//       text-align: center; // Center-align on laptops
//     }
//   }
// `}</style>

//         </div>
//       </div>
//   );
// };

// export default Fillar;

import React from "react";
import SvgLine from "../../components/SvgLine/svgLine"; // Ensure this path is correct

const Fillar = () => {
  return (
    <div>
      <div className="h-[120vh] w-full bg-white overflow-hidden">
        {/* Other sections of the layout */}
        <div className="h-[65%] w-full flex flex-col md:flex-row items-center">
          <div className="order-2 md:order-1 w-full lg:w-[90%] text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-questrial mt-[2rem] lg:mt-[8rem] ml-[2rem] lg:ml-[5rem] items-center">
            <div>DESIGNING </div>
            <div>YOUR LEAVES</div>
          </div>
          <div className="order-1 md:order-2 w-full lg:w-[30%] h-full mt-[2rem] lg:mt-[6rem] lg:pt-[0rem] lg:mr-[8rem] flex items-center justify-center">
            <div className="bg-slate-600 h-[12rem] md:h-[14rem] lg:h-[18rem] w-[18rem] md:w-[14rem] lg:w-[30rem] rounded-full overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/leaf.mp4"
                autoPlay
                playsInline
                loop
                muted
              ></video>
            </div>
          </div>
        </div>

        <div>
          <SvgLine />
        </div>

        {/* The quote section */}
        <div className="w-full flex justify-center items-center mt-8">
          <div className="text-center text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] tracking-wide  uppercase grow-line pr-0 lg:pr-6">
            Together we will grow businesses and build brands that make a
            difference
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fillar;
