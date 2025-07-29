// import React, { useEffect, useState } from "react";

import { p } from 'framer-motion/client';
import WorkingwiththriveWeb from '../assets/images/about/Workingwiththrive.png';
// import WorkingwiththriveMobile from '../assets/images/aboutus/Workingwiththrivemobile.png';
// import WorkingwiththriveMobile2 from '../assets/images/aboutus/Workingwiththrivemobile2.png';

// export default function WorkingWithThriveSection() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize(); // Initial load
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Show heading above image on mobile */}
//       {isMobile && (
//         <div className="text-center px-4 pt-10">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#073349] mb-6">
//             What Working With Thrive Looks Like?
//           </h2>
//         {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
//          What Working With Thrive Looks Like?
//       </h2> */}
//         </div>
//       )}

//       {/* Image section */}
//       <section
//         className={`
//           w-full 
//           bg-no-repeat 
//           bg-center 
//           ${isMobile ? 'bg-contain py-20 h-[230px]' : 'bg-cover h-[800px]'}
//           flex items-center justify-center
//         `}
//         style={{
//           backgroundImage: `url(${isMobile ? WorkingwiththriveMobile2 : WorkingwiththriveWeb})`,
//         }}
//       />
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";

// export default function ResponsiveServiceImageSection({
//   headingText,
//   imageWeb,
//   imageMobile
// }) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize(); // Initial load
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Conditionally show heading on mobile if provided */}
//       {isMobile && headingText && (
//         <div className="text-center px-4 pt-10">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#073349] mb-6">
//             {headingText}
//           </h2>
//         </div>
//       )}

//       {/* Background image section */}
//       <section
//         className={`w-full bg-no-repeat bg-center 
//           ${isMobile ? 'bg-cover py-20 h-[800px] ' : 'bg-cover h-[700px]'} 
//           flex items-center justify-center`}
//         style={{
//           backgroundImage: `url(${isMobile ? imageMobile : imageWeb})`,
//         }}
//       />
//     </div>
   
//   );
// }



import React, { useEffect, useState } from "react";

export default function ResponsiveServiceImageSection({
  headingText,
  imageWeb,
  imageMobile,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {/* Mobile heading */}
      {isMobile && headingText && (
        <div className="text-center px-4 pt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#073349] mb-6">
            {headingText}
          </h2>
        </div>
      )}

      {/* Responsive image section */}
      <div className="w-full">
        <img
          src={isMobile ? imageMobile : imageWeb}
          alt="Service Banner"
          className="w-full h-auto object-contain block"
        />
      </div>
    </div>
  );
}
