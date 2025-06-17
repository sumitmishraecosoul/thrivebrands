import React from 'react';
import HomePageServiceBanner1 from '../assets/images/HomePageServiceBanner1.png';
import HomePageServiceBanner2 from '../assets/images/HomePageServiceBanner2.png';

export default function HomeServiceBanners() {
  return (
    // <div className="flex flex-col lg:flex-row w-full">
    
    //   <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px] bg-cover bg-center"
    //     style={{
    //       backgroundImage: `url(${HomePageServiceBanner1})`,
    //       backgroundRepeat: 'no-repeat'
    //     }}
    //   >
     
    //   </div>

     
    //   <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px] bg-cover bg-center"
    //     style={{
    //       backgroundImage: `url(${HomePageServiceBanner2})`,
    //       backgroundRepeat: 'no-repeat'
    //     }}
    //   >
       
    //   </div>
    // </div>

    <div className="flex flex-col lg:flex-row w-full">
  {/* Banner 1 */}
  <div
    className="w-full lg:w-1/2 aspect-[3/2] sm:aspect-[4/3] md:aspect-[16/9] lg:h-[650px] bg-center bg-no-repeat bg-contain lg:bg-cover"
    style={{
      backgroundImage: `url(${HomePageServiceBanner1})`,
    }}
  ></div>

  {/* Banner 2 */}
  <div
    className="w-full lg:w-1/2 aspect-[3/2] sm:aspect-[4/3] md:aspect-[16/9] lg:h-[650px] bg-center bg-no-repeat bg-contain lg:bg-cover"
    style={{
      backgroundImage: `url(${HomePageServiceBanner2})`,
    }}
  ></div>
</div>

  );
}
