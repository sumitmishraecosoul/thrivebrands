import React from 'react';
import AboutImage from '../assets/images/aboutus/banner.png';
import { useNavigate } from 'react-router-dom';

export default function AboutSection() {
  const navigate = useNavigate();
   const handleClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };


  return (
    <section className="bg-[#fdf0db] py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-5/12 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-[#A28750] text-4xl md:text-5xl font-bold mb-3">ABOUT</h2>
          <h1 className="text-[#002433] text-5xl md:text-6xl font-extrabold mb-4">THRIVE BRANDS</h1>
          <div className="w-24 h-1 bg-black mx-auto md:mx-0 mb-5"></div>
          <p className="text-[#002433] text-lg md:text-xl mb-8 leading-relaxed max-w-md">
            Tailor Made Strategies & A Data Driven Approach
          </p>
          <button
            // onClick={() => navigate('/services')}
            className="bg-[#A28750] hover:bg-[#8e7343] text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            onClick={handleClick}
          >
            Explore More →
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src={AboutImage}
            alt="About Thrive Brands"
            className="w-full max-w-[700px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
