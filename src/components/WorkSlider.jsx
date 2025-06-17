// import React from "react";
// import Top1 from "../assets/images/Top1.jpg";
// import Top2 from "../assets/images/Top2.jpg";
// import Top3 from "../assets/images/Top3.png";
// import Top4 from "../assets/images/Top4.jpg";   
// import Top5 from "../assets/images/Top5.jpg";


// // Import image paths (replace with your real images)
// const images = [
//     Top1, Top2, Top3, Top4, Top5,
   
// ];

// export default function WorkSlider ()  {
//   return (
//     <div className=" py-10">
//       <h2 className="text-4xl font-bold text-black text-center mb-6">
//         Explore Our Work
//       </h2>

//       <div className="overflow-hidden">
//         <div className="flex gap-4 animate-scrollSlider whitespace-nowrap">
//           {[...images, ...images].map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Slide ${index}`}
//               className="h-96 w-auto rounded-xl object-cover"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };





import React from "react";
import Top1 from "../assets/images/Top1.jpg";
import Top2 from "../assets/images/Top2.jpg";
import Top3 from "../assets/images/Top3.png";
import Top4 from "../assets/images/Top4.jpg";   
import Top5 from "../assets/images/Top5.jpg";

const images = [Top1, Top2, Top3, Top4, Top5];

export default function WorkSlider ()  {
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-black text-center mb-6">
        Explore Our Work
      </h2>

      <div className="overflow-hidden">
        <div className="flex gap-4 animate-scrollSlider whitespace-nowrap">
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="h-96 w-auto rounded-xl object-cover"
            />
          ))}
        </div>
      </div>

      {/* Custom CSS animation */}
      <style>{`
        @keyframes scrollSlider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollSlider {
          animation: scrollSlider 5s linear infinite;
        }
      `}</style>
    </div>
  );
};
