
import homebanner from '../assets/images/homepage1.png';
import Servicebanner from '../assets/images/Servicebanner.png';
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ IMPORTANT

import ScrollingLogoStrip from '../components/ScrollingLogoStrip';
import WorkSlider from '../components/WorkSlider';
import Testimonials from '../components/Testimonials';
import HomeFooter from '../components/Footer';
import OurServices from '../components/OurService';
import AboutPreview from '../components/AboutPreview';
import ThriveFooter from '../layouts/ThriveFooter';

export default function Home() {
  return (
    <div>
   <section
  className="h-[600px] bg-cover bg-center flex items-center justify-start pointer-events-none"
  style={{ backgroundImage: `url(${homebanner})` }}
>
  <div
    className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
  >
    {/* Other commented text and content */}

 <Link
  to="/contact"
  className="absolute left-[180px] bottom-[220px] min-w-[220px] text-center bg-[#A28750] text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-[#8e7445] hover:scale-105 transform transition-all duration-300 pointer-events-auto"
>
  Thrive with Us →
</Link>


  </div>
</section>


      <OurServices />
       <section
        className="h-[650px] bg-cover bg-center flex items-center justify-center pointer-events-none"
        style={{ backgroundImage: `url(${Servicebanner})` }}
      ></section>
      <AboutPreview/>
      <ScrollingLogoStrip />
      <WorkSlider />
      <Testimonials />
      <HomeFooter />
      <ThriveFooter />
    </div>
  );
}
