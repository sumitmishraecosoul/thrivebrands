
// import homebanner from '../assets/images/homepage1.png';
// import Servicebanner from '../assets/images/Servicebanner.png';
// import React from 'react';
// import { Link } from 'react-router-dom'; // ✅ IMPORTANT

// import ScrollingLogoStrip from '../components/ScrollingLogoStrip';
// import WorkSlider from '../components/WorkSlider';
// import Testimonials from '../components/Testimonials';
// import HomeFooter from '../components/Footer';
// import OurServices from '../components/OurService';
// import AboutPreview from '../components/AboutPreview';
// import ThriveFooter from '../layouts/ThriveFooter';

// export default function Home() {
//   return (
//     <div>
//    <section
//   className="h-[600px] bg-cover bg-center flex items-center justify-start pointer-events-none"
//   style={{ backgroundImage: `url(${homebanner})` }}
// >
//   <div
//     className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
//   >
//     {/* Other commented text and content */}

//  <Link
//   to="/contact"
//   className="absolute left-[180px] bottom-[220px] min-w-[220px] text-center bg-[#A28750] text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-[#8e7445] hover:scale-105 transform transition-all duration-300 pointer-events-auto"
// >
//   Thrive with Us →
// </Link>


//   </div>
// </section>


//       <OurServices />
      //  <section
      //   className="h-[650px] bg-cover bg-center flex items-center justify-center pointer-events-none"
      //   style={{ backgroundImage: `url(${Servicebanner})` }}
      // ></section>
//       <AboutPreview/>
//       <ScrollingLogoStrip />
//       <WorkSlider />
//       <Testimonials />
//       <HomeFooter />
//       <ThriveFooter />
//     </div>
//   );
// }






// import homebanner from '../assets/images/homepage1.png';
// import Servicebanner from '../assets/images/Servicebanner.png';
// import React from 'react';
// import { Link } from 'react-router-dom';

// import ScrollingLogoStrip from '../components/ScrollingLogoStrip';
// import WorkSlider from '../components/WorkSlider';
// import Testimonials from '../components/Testimonials';
// import HomeFooter from '../components/Footer';
// import OurServices from '../components/OurService';
// import AboutPreview from '../components/AboutPreview';
// import ThriveFooter from '../layouts/ThriveFooter';

// export default function Home() {
//   return (
//     <div className="w-full overflow-hidden">
//       {/* Home Banner Section */}
//       <section
//         className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center justify-start"
//         style={{ backgroundImage: `url(${homebanner})` }}
//       >
//         <div className="w-full h-full bg-black bg-opacity-30 flex items-center justify-center px-4">
//           {/* CTA Button */}
//           <Link
//             to="/contact"
//             className="absolute text-sm sm:text-base md:text-lg font-semibold text-white bg-[#A28750] hover:bg-[#8e7445] hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg pointer-events-auto
//               bottom-10 sm:bottom-16 md:bottom-20 lg:bottom-24 
//               left-4 sm:left-10 md:left-20 lg:left-[180px] min-w-[180px] sm:min-w-[200px] md:min-w-[220px] text-center"
//           >
//             Thrive with Us →
//           </Link>
//         </div>
//       </section>

//       <OurServices />

//       {/* Services Banner Section */}
//       <section
//         className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${Servicebanner})` }}
//       ></section>

//       <AboutPreview />
//       <ScrollingLogoStrip />
//       <WorkSlider />
//       <Testimonials />
//       <HomeFooter />
//       <ThriveFooter />
//     </div>
//   );
// }




// import React from 'react';
// import { Link } from 'react-router-dom';

// import homebanner from '../assets/images/homepage1.png';
// import Servicebanner from '../assets/images/Servicebanner.png';

// import ScrollingLogoStrip from '../components/ScrollingLogoStrip';
// import WorkSlider from '../components/WorkSlider';
// import Testimonials from '../components/Testimonials';
// import HomeFooter from '../components/Footer';
// import OurServices from '../components/OurService';
// import AboutPreview from '../components/AboutPreview';
// import ThriveFooter from '../layouts/ThriveFooter';

// export default function Home() {
//   return (
//     <div className="w-full overflow-hidden">
//       {/* Home Banner Section */}
//       <section
//         className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${homebanner})` }}
//       >
//         <div className="absolute inset-0 bg-black/40" />

//         {/* CTA Button */}
//         <Link
//           to="/contact"
//           className="absolute z-10 bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-24 
//                      left-4 sm:left-10 md:left-20 lg:left-[180px]
//                      px-5 sm:px-6 py-2 sm:py-3 min-w-[160px] sm:min-w-[200px]
//                      text-sm sm:text-base md:text-lg text-white font-semibold
//                      bg-[#A28750] hover:bg-[#8e7445] rounded-full
//                      shadow-lg transform hover:scale-105 transition-transform duration-300"
//         >
//           Thrive with Us →
//         </Link>
//       </section>

//       {/* Our Services Section */}
//       <OurServices />

//       {/* Service Banner Section */}
      // <section
      //   className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] bg-cover bg-center"
      //   style={{ backgroundImage: `url(${Servicebanner})` }}
      // >
      //   <div className="absolute inset-0 bg-black/30" />
      // </section>

//       {/* Other Sections */}
//       <AboutPreview />
//       <ScrollingLogoStrip />
//       <WorkSlider />
//       <Testimonials />
//       <HomeFooter />
//       <ThriveFooter />
//     </div>
//   );
// }





import React from 'react';
import { Link } from 'react-router-dom';

import homeBannerDesktop from '../assets/images/homepage1.png';
import homeBannerMobile from '../assets/images/homepage1-mobile.png';
import serviceBannerDesktop from '../assets/images/Servicebanner.png';
import serviceBannerMobile from '../assets/images/Servicebanner-mobile.png';

import ScrollingLogoStrip from '../components/ScrollingLogoStrip';
import WorkSlider from '../components/WorkSlider';
import Testimonials from '../components/Testimonials';
import HomeFooter from '../components/Footer';
import OurServices from '../components/OurService';
import AboutPreview from '../components/AboutPreview';
import ThriveFooter from '../layouts/ThriveFooter';
import HomeHero from '../components/HomeHero';
import HomePageServiceBanner1 from '../assets/images/HomePageServiceBanner1.png';
import HomePageServiceBanner2 from '../assets/images/HomePageServiceBanner2.png';
import HomeServiceBanners from '../components/HomeServiceBanner';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Home Banner Section */}
      {/* <section className="relative w-full">
        <img
          src={homeBannerMobile}
          alt="Home Banner Mobile"
          className="w-full h-[300px] object-cover sm:hidden"
        />

        <img
          src={homeBannerDesktop}
          alt="Home Banner Desktop"
          className="w-full h-[600px] object-cover hidden sm:block"
        />

      
        <Link
          to="/contact"
          className="absolute bottom-6 sm:bottom-10 md:bottom-20 lg:bottom-24 
            left-4 sm:left-10 md:left-20 lg:left-[180px] min-w-[160px] sm:min-w-[200px] md:min-w-[220px]
            text-sm sm:text-base md:text-lg font-semibold text-white
            bg-[#A28750] hover:bg-[#8e7445] px-5 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg
            transform hover:scale-105 transition-all duration-300"
        >
          Thrive with Us →
        </Link>
      </section> */}

     <HomeHero />
      <OurServices />

      {/* Service Banner Section */}
      {/* <section className="relative w-full mt-8">
      
        <img
          src={serviceBannerMobile}
          alt="Service Banner Mobile"
          className="w-full h-[300px] object-cover sm:hidden"
        />

       
        <img
          src={serviceBannerDesktop}
          alt="Service Banner Desktop"
          className="w-full h-[650px] object-cover hidden sm:block"
        />
      </section> */}

           <div className="flex flex-col lg:flex-row w-full">
 <div className="flex flex-col lg:flex-row w-full">
  
  {/* <section
    className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] flex-1 bg-cover bg-center"
    style={{ backgroundImage: `url(${HomePageServiceBanner1})` }}
  ></section>


  <section
    className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] flex-1 bg-cover bg-center"
    style={{ backgroundImage: `url(${HomePageServiceBanner2})` }}
  ></section> */}

  <HomeServiceBanners/>
</div>

</div>


      {/* Additional Sections */}
      <AboutPreview />
      <ScrollingLogoStrip />
      <WorkSlider />
      <Testimonials />
      <HomeFooter />
      <ThriveFooter />
    </div>
  );
}
