import React from "react";
// import BannerImage from "../assets/images/service_home_banner.png"; // Use correct path
import ServiceBannerVector from '../assets/images/service/ServiceBannerVector.png';
export default function ThriveBannerSection() {
  return (
    <section className="bg-[#fef1dc] w-full py-10 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#a87e3b]">
            READY TO GET <span className="text-[#012b3a]">THRIVING?</span>
          </h2>
          <div className="w-20 border-t-[3px] border-[#012b3a] my-4 mx-auto md:mx-0" />
          <p className="text-lg sm:text-xl text-[#012b3a]">
            Go <span className="text-[#a87e3b] font-semibold">360°</span> with the best e-commerce marketing services and help your online store reach its full potential.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ServiceBannerVector}
            alt="Handshake Illustration"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
