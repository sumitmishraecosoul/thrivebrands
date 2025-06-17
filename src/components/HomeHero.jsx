import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/home_vector.png'; // cropped version of image's right side

export default function HomeHero() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-[#f9ebd0] w-full px-6 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Text and Button */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#a28750] leading-tight">
            MAKE YOUR ONLINE<br />
            <span className="text-[#0e2a38]">STORES THRIVE</span>
          </h1>
          <p className="mt-4 text-[#0e2a38] text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Competitive Ecommerce Marketing Strategies That Actually Drive Sales
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-[#A28750] hover:bg-[#8e7445] text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
            onClick={handleClick}
          >
            Thrive with Us →
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Ecommerce Growth Illustration"
            className="w-full max-w-[700px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
