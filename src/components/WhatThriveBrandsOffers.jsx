
import React, { useEffect, useState } from "react";

export default function WhatThriveBrandsOffers({
  headingText,
  imageWeb,
  imageMobile
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {/* Conditionally show heading on mobile if provided */}
      {isMobile && headingText && (
        <div className="text-center px-4 pt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#073349] mb-6">
            {headingText}
          </h2>
        </div>
      )}

      {/* Background image section */}
      <section
        className={`w-full bg-no-repeat bg-center 
          ${isMobile ? 'bg-contain py-20 h-[430px] ' : 'bg-cover h-[600px]'} 
          flex items-center justify-center`}
        style={{
          backgroundImage: `url(${isMobile ? imageMobile : imageWeb})`,
        }}
      />
    </div>
   
  );
}
