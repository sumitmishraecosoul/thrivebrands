// import React from "react";
// import { motion } from "framer-motion";
// import "tailwindcss/tailwind.css";
// import Bottom1 from "../assets/images/Bottom1.jpg";
// import Bottom2 from "../assets/images/Bottom2.jpg";
// import Bottom3 from "../assets/images/Bottom3.png";
// import Bottom4 from "../assets/images/Bottom4.jpg";
// import Bottom5 from "../assets/images/Bottom5.jpg";

// const images = [
//     Bottom1,
//     Bottom2,
//     Bottom3,
//     Bottom4,
//     Bottom5,
// ];

// // const ImageCard = ({ src }) => (
// //   <div className="shadow-lg rounded-2xl overflow-hidden w-64 h-40 flex-none mx-2 bg-white">
// //     <img src={src} alt="slide" className="w-full h-full object-cover" />
// //   </div>
// // );



// // const InfiniteSlider = ({ images, direction = "left", speed = 30 }) => {
// //   const scrollVariants = {
// //     animate: {
// //       x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
// //       transition: {
// //         x: {
// //           repeat: Infinity,
// //           repeatType: "loop",
// //           duration: speed,
// //           ease: "linear",
// //         },
// //       },
// //     },
// //   };

// //   return (
// //     <div className="overflow-hidden w-full">
// //       <motion.div
// //         className="flex w-max"
// //         variants={scrollVariants}
// //         animate="animate"
// //       >
// //         {[...images, ...images, ...images].map((src, index) => (
// //           <ImageCard key={index} src={src} />
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // };

// // const DoubleImageSlider = () => {
// //   return (
// //     <div className="bg-black p-6 space-y-6 min-h-screen flex flex-col justify-center">
// //       <h2 className="text-3xl font-bold text-center text-gray-800">Featured Highlights</h2>
// //       <InfiniteSlider images={images} direction="right" speed={30} />
// //       <InfiniteSlider images={images} direction="left" speed={30} />
// //     </div>
// //   );
// // };

// // export default DoubleImageSlider;














// // import React from "react";
// // import { motion } from "framer-motion";

// // import Top1 from "../assets/images/Top1.jpg";
// // import Top2 from "../assets/images/Top2.jpg";
// // import Bottom1 from "../assets/images/Bottom1.jpg";
// // import Bottom2 from "../assets/images/Bottom2.jpg";
// // import Top3 from "../assets/images/Top3.jpg";
// // import Bottom3 from "../assets/images/Bottom3.jpg";

// // const imagesTop = [Top1, Top2, Top3];
// // const imagesBottom = [Bottom1, Bottom2, Bottom3];

// const ImageCard = ({ src }) => (
//   <div className="shadow-2xl rounded-3xl overflow-hidden w-[400px] h-[280px] flex-none mx-3 bg-white">
//     <img src={src} alt="slide" className="w-full h-full object-cover" />
//   </div>
// );

// const InfiniteSlider = ({ images, direction = "left", speed = 30 }) => {
//   const scrollVariants = {
//     animate: {
//       x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: speed,
//           ease: "linear",
//         },
//       },
//     },
//   };

//   return (
//     <div className="overflow-hidden w-full">
//       <motion.div
//         className="flex w-max"
//         variants={scrollVariants}
//         animate="animate"
//         initial={{ x: direction === "left" ? "0%" : "-50%" }}
//       >
//         {[...images, ...images, ...images, ...images].map((src, index) => (
//           <ImageCard key={index} src={src} />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const DoubleImageSlider = () => {
//   return (
//     <div className="bg-black p-8 space-y-12 min-h-screen flex flex-col justify-center">
//       <h2 className="text-4xl font-extrabold text-center text-white drop-shadow-md">
//         ✨ Featured Highlights ✨
//       </h2>
//       <InfiniteSlider images={images} direction="right" speed={40} />
//       <InfiniteSlider images={images} direction="left" speed={40} />
//     </div>
//   );
// };

// export default DoubleImageSlider;

