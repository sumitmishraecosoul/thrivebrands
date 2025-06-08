import React from "react";
import Blinkit from "../assets/logos/partnerlogo/Blinkit.png";
import Ebay from "../assets/logos/partnerlogo/Flipkart.png";
import Etsy from "../assets/logos/partnerlogo/Noon.png";
import Noon from "../assets/logos/partnerlogo/Shopify.png";
import Talabat from "../assets/logos/partnerlogo/Talabat.png";
import Walmart from "../assets/logos/partnerlogo/Walmart.png";
import Zepto from "../assets/logos/partnerlogo/Zepto.png";
import Amazon from "../assets/logos/partnerlogo/Amazon.png";



const logos = [
  // { src: "../assets/logos/Ebay.png", alt: "Biosynthesis" },
  // { src: "../assests/logos/ETSY.png", alt: "Clandestine" },
  // { src: "../assets/logos/blinkit.png", alt: "Boltshift" },
  // { src: "../assets/logos/Noon.png", alt: "Biosynthesis 2" },
  { src: Blinkit, alt: "Blinkit" },
  { src: Ebay, alt: "Ebay" },
  { src: Etsy, alt: "Etsy" },
  { src: Noon, alt: "Noon" },
  { src: Talabat, alt: "Talabat" },
  { src: Walmart, alt: "Walmart" },
  { src: Zepto, alt: "Zepto" },
  { src: Amazon, alt: "Amazon" },

];

// export default function ScrollingLogoStrip() {
//   return (
//     <div className="w-full bg-white py-4 overflow-hidden border-t border-gray-800">
//       <div className="relative w-full">
//         <div className="flex animate-scroll whitespace-nowrap">
//           {[...logos, ...logos].map((logo, index) => (
//             <div key={index} className="flex items-center gap-16 px-10">
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="h-8 grayscale hover:grayscale-0 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function ScrollingLogos() {
//   return (
//     <div className="overflow-hidden  py-6">
//       <div className="whitespace-nowrap animate-scroll flex gap-8">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className=" p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[180px] flex items-center justify-center"
//           >
//             <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
//           </div>
//         ))}
//         {/* Clone the logos again to ensure smooth infinite loop */}
//         {logos.map((logo, index) => (
//           <div
//             key={`clone-${index}`}
//             className=" p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[180px] flex items-center justify-center"
//           >
//             <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


export default function ScrollingLogos() {
  return (
    <div className="overflow-hidden py-10 bg-[#f5e9d6]">
      <div className="whitespace-nowrap animate-scroll flex gap-10">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 min-w-[220px] flex items-center justify-center"
          >
            <img src={logo.src} alt={logo.alt} className="h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

