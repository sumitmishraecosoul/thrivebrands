import React, { useEffect, useState } from "react";

// Import mobile images (split from the main web banner)
import pricing from '../assets/images/service/pricing.png';
import PRICING1 from '../assets/images/service/PRICING1.png';
import PRICING2 from '../assets/images/service/PRICING2.png';
import PRICING3 from '../assets/images/service/PRICING3.png';
import PRICING4 from '../assets/images/service/PRICING4.png';



export default function PartnerWithThriveSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileImages = [ 
    PRICING1,
    PRICING2,
    PRICING3,
    PRICING4
  ];

  return (
    <div className="w-full">
      {/* Heading on mobile only */}
      {isMobile && (
        <div className="text-center px-4 pt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#073349] mb-6">
            Partner with Thrive & Let’s Grow Together.
          </h2>
        </div>
      )}

      {/* Desktop View: Full Banner */}
      {!isMobile && (
        <img
          src={pricing}
          alt="Partner with Thrive"
          className="w-full object-cover"
        />
      )}

      {/* Mobile View: Stacked Images */}
      {isMobile && (
        <div className="flex flex-col items-center gap-6 px-4 pb-10">
          {mobileImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Service ${idx + 1}`}
              className="w-full rounded-xl shadow-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}
