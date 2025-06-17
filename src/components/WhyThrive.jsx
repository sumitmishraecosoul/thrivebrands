import React from 'react';
import Why1 from '../assets/images/about/whythrive1.png';
import Why2 from '../assets/images/about/whythrive2.png';
import Why3 from '../assets/images/about/whythrive3.png';
export default function WhyThrive() {
  return (
    <section className="bg-[#f5e9d6] py-12 px-4 md:px-8 lg:px-24">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
        Why Thrive?
      </h2> */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#073349] mb-6">
            Why Thrive?
          </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">
        <img
          src={Why1}
          alt="Data Driven"
          className="w-[220px] md:w-[240px] lg:w-[260px] object-contain"
        />
        <img
          src={Why2}
          alt="Creative Excellence"
          className="w-[220px] md:w-[240px] lg:w-[260px] object-contain"
        />
        <img
          src={Why3}
          alt="End-to-End Service"
          className="w-[220px] md:w-[240px] lg:w-[260px] object-contain"
        />
      </div>
    </section>
  );
}