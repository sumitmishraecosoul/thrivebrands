import React from 'react';
import OurMission from '../assets/images/Ourmission.png';
import OurVision from '../assets/images/Ourvision.png';

export default function WhoWeAreSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-12 border-l-4 border-[#A28750] pl-4">
          We Drive. You Thrive 
        </h2>

        {/* Titles Row */}
        <div className="flex justify-between items-center mb-10 text-white text-lg uppercase">
          <div className="flex items-center gap-2 text-left">
            <span className="text-[#A28750] text-4xl font-light">+</span>
            <div>
              <div className=" tracking-widest font-medium">Thrive Multichannel with Us </div>
              {/* <div className="font-medium">Mission</div> */}
            </div>
          </div>

          <div className="flex items-center gap-2 text-right">
            <div>
              {/* <div className="text-sm tracking-widest font-light">Our</div> */}
              <div className="font-medium">Customized Services for Different Goals</div>
            </div>
            <span className="text-[#A28750] text-4xl font-light">+</span>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-[#1a0e00] rounded-xl overflow-hidden border border-[#2d1c0e] flex flex-col md:flex-row">
            <div className="p-6 text-[#ECD5B0] md:w-1/2">
              <p className="text-lg leading-relaxed">
             The e-commerce landscape is competitive. But, with the right handful of talent, your online stores can thrive! From spectacular e-commerce marketing services to building a wide presence, we ace at helping you make sales, drive revenue, and increase customer retention rate.
              </p>
              <div className="mt-6 w-4 h-4 bg-[#A28750] rounded-sm"></div>
            </div>
            <div className="md:w-1/2">
              <img
                src={OurMission}
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#1a0e00] rounded-xl overflow-hidden border border-[#2d1c0e] flex flex-col md:flex-row-reverse">
            <div className="p-6 text-[#ECD5B0] md:w-1/2">
              <p className="text-lg leading-relaxed">
                Go 360° with the best e-commerce marketing services and help your online store reach its full potential. From building successful online stores to taking your Shopify websites on the first pages, we are here to help your brand thrive.
              </p>
              <div className="mt-6 w-4 h-4 border border-[#A28750] rounded-sm"></div>
            </div>
            <div className="md:w-1/2">
              <img
                src={OurVision}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
