// import React from 'react';
// import HomePageServiceBanner1 from '../assets/images/HomePageServiceBanner1.png';
// import HomePageServiceBanner2 from '../assets/images/HomePageServiceBanner2.png';

// export default function HomeServiceBanners() {
//   return (
//     // <div className="flex flex-col lg:flex-row w-full">
    
//     //   <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px] bg-cover bg-center"
//     //     style={{
//     //       backgroundImage: `url(${HomePageServiceBanner1})`,
//     //       backgroundRepeat: 'no-repeat'
//     //     }}
//     //   >
     
//     //   </div>

     
//     //   <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px] bg-cover bg-center"
//     //     style={{
//     //       backgroundImage: `url(${HomePageServiceBanner2})`,
//     //       backgroundRepeat: 'no-repeat'
//     //     }}
//     //   >
       
//     //   </div>
//     // </div>

//     <div className="flex flex-col lg:flex-row w-full">
//   {/* Banner 1 */}
//   <div
//     className="w-full lg:w-1/2 aspect-[3/2] sm:aspect-[4/3] md:aspect-[16/9] lg:h-[650px] bg-center bg-no-repeat bg-contain lg:bg-cover"
//     style={{
//       backgroundImage: `url(${HomePageServiceBanner1})`,
//     }}
//   ></div>

//   {/* Banner 2 */}
//   <div
//     className="w-full lg:w-1/2 aspect-[3/2] sm:aspect-[4/3] md:aspect-[16/9] lg:h-[650px] bg-center bg-no-repeat bg-contain lg:bg-cover"
//     style={{
//       backgroundImage: `url(${HomePageServiceBanner2})`,
//     }}
//   ></div>
// </div>

//   );
// }


import React from 'react';
import HomePageServiceBanner1 from '../assets/images/HomePageServiceBanner1.png';
import HomePageServiceBanner2 from '../assets/images/HomePageServiceBanner2.png';

export default function HomeServiceBanners() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col gap-y-4 lg:flex-row lg:gap-y-0">
      {/* Banner 1 */}
      <div className="w-full lg:w-1/2 aspect-[16/9] overflow-hidden leading-none">
        <img
          src={HomePageServiceBanner1}
          alt="Banner 1"
          className="w-full h-full object-contain block align-middle"
        />
      </div>

      {/* Banner 2 */}
      <div className="w-full lg:w-1/2 aspect-[16/9] overflow-hidden leading-none">
        <img
          src={HomePageServiceBanner2}
          alt="Banner 2"
          className="w-full h-full object-contain block align-middle"
        />
      </div>
    </div>
  );
}
