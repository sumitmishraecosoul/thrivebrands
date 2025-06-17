import React from 'react';
import Service1 from '../assets/images/aboutus/DifferentServices1.png';
import Service2 from '../assets/images/aboutus/DifferentServices2.png';
import Service3 from '../assets/images/aboutus/DifferentServices3.png';
import Service4 from '../assets/images/aboutus/DifferentServices4.png';
import Service5 from '../assets/images/aboutus/DifferentServices5.png';
import Service6 from '../assets/images/aboutus/DifferentServices6.png';
import Service7 from '../assets/images/aboutus/DifferentServices7.png';
import Service8 from '../assets/images/aboutus/DifferentServices8.png';

const serviceImages = [
  Service1, Service2, Service3, Service4,
  Service5, Service6, Service7, Service8,
];

export default function DifferentServices() {
  return (
    <section className="bg-[#f5e9d6] py-12 px-4 md:px-10 lg:px-20">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
        Different Services We Offer
      </h2> */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#073349] mb-6">
             Different Services We Offer
          </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14 justify-items-center">
        {serviceImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Service ${index + 1}`}
            className="w-[90%] max-w-[600px] md:w-[85%] lg:w-[90%] object-contain"
          />
        ))}
      </div>
    </section>
  );
}
