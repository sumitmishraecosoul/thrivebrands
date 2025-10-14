// import React from "react";
// // import thrivelogo from '../assets/logos/thrive_logo.png';
// import thrivelogo from '../assets/logos/ThriveLogo.png';

// export default function ThriveFooter() {
//   return (
//     <footer className="bg-[#073349] text-white py-10">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//         {/* Logo */}
//         <div className="flex flex-col items-center md:items-start">
//           <img
//             src={thrivelogo} // Replace with your actual logo path
//             alt="Thrive Brands Logo"
//             className="h-40 mb-4"
//           />
//         </div>

//         {/* Company Links */}
//         <div>
//           {/* <h3 className="text-white tracking-widest text-sm mb-2">COMPANY</h3> */}
//           <ul className="space-y-1">
//             <li><a href="#" className="text-white hover:underline">Home</a></li>
//             <li><a href="#" className="text-white hover:underline">About Thrive</a></li>
//             {/* <li><a href="#" className="text-white hover:underline">Services</a></li>
//             <li><a href="#" className="text-white hover:underline">Careers</a></li> */}
//           </ul>
//         </div>

//         {/* Resource Links */}
//         <div>
//           {/* <h3 className="text-white tracking-widest text-sm mb-2">RESOURCES</h3> */}
//           <ul className="space-y-1">
//              <li><a href="#" className="text-white hover:underline">Services</a></li>
//             <li><a href="#" className="text-white hover:underline">Contact</a></li>
//             {/* <li><a href="#" className="text-white hover:underline">Blog</a></li>
//             <li><a href="#" className="text-white hover:underline">Creative Portal</a></li>
//             <li><a href="#" className="text-white hover:underline">Privacy Policy</a></li> */}
//           </ul>
//         </div>
//       </div>

//       {/* Bottom line */}
//       <div className="mt-10 border-t border-[#0e4d66] pt-4 text-center text-sm text-gray-400">
//         Copyright © 2024 Thrivebrands.ai
//       </div>
//     </footer>
//   );
// }



import React from "react";
import { Link } from "react-router-dom"; // Add this import!
import thrivelogo from '../assets/logos/ThriveLogo.png';

export default function ThriveFooter() {
  return (
    <footer className="bg-[#073349] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={thrivelogo}
            alt="Thrive Brands Logo"
            className="h-40 mb-4"
          />
        </div>

        {/* Company Links */}
        <div>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="text-white hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:underline">About Thrive</Link>
            </li>
          </ul>
        </div>

        {/* Resource Links */}
        <div>
          <ul className="space-y-1">
            <li>
              <Link to="/services" className="text-white hover:underline">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:underline">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="text-white hover:underline">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-[#0e4d66] pt-4 text-center text-sm text-gray-400">
        Copyright © 2024 Thrivebrands.ai
      </div>
    </footer>
  );
}
