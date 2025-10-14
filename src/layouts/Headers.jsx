// import { Link } from 'react-router-dom';
// import React from 'react';
// import thrivelogo from '../assets/logos/thrive_logo.png';

// export default function Header() {
//   return (
//     <header className="w-full bg-white shadow-md py-4">
//       <nav className="container mx-auto flex justify-between items-center px-4">
//         <div id="iconcontainer">  <img src={thrivelogo} alt="" className="h-12 object-contain" /></div>
//         {/* Navigation Links */}
//         <ul className="flex gap-6">
//           {['Home', 'About', 'Services', 'Events', 'Blog', 'Contact'].map((item) => (
//             <li key={item}>
//               <Link to={`/${item.toLowerCase()}`} className="hover:text-purple-700">
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }




// import { Link } from 'react-router-dom';
// import React from 'react';
// import thrivelogo from '../assets/logos/ThriveLogo.png';

// export default function Header() {
//   return (
//     <header className="w-full bg-[#073349] text-white shadow-md py-2">
//       <nav className="container mx-auto flex justify-between items-center px-4">
//         {/* Logo */}
//         <div id="iconcontainer" >
//           <img
//             src={thrivelogo}
//             alt="Thrive Logo"
//             className="h-16 object-contain"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = 'https://via.placeholder.com/150x50?text=Logo';
//             }}
//           />
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex gap-6 items-center">
//           {['Home', 'About', 'Services', 'Contact'].map((item) => (
//             <li key={item}>
//               <Link
//                 to={`/${item.toLowerCase()}`}
//                 className="hover:text-[#8e7343] transition"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}

//           {/* External Button Link */}
//           <li>
//             <a
//               href="https://kineticaapp.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#A28750] hover:bg-[#8e7343] text-white px-4 py-2 rounded-md transition"
//             >
//               Vector App
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import thrivelogo from '../assets/logos/ThriveLogo.png';
import { Menu, X } from 'lucide-react'; // uses lucide icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <header className="w-full bg-[#073349] text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={thrivelogo}
            alt="Thrive Logo"
            className="h-12 sm:h-14 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150x50?text=Logo';
            }}
          />
        </Link>

        {/* Hamburger Icon - Mobile Only */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links - Web */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-[#A28750] transition"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <a
              // href="https://kineticaapp.vercel.app/"
              href="https://vectorwebapp.thrivebrands.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A28750] hover:bg-[#8e7343] text-white px-4 py-2 rounded-md transition"
            >
              Vector App
            </a>
          </li>
        </ul>

        {/* Nav Links - Mobile */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#073349] lg:hidden flex flex-col items-center py-4 gap-4 z-50 shadow-md">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block text-lg hover:text-[#A28750] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://vectorwebapp.thrivebrands.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#A28750] hover:bg-[#8e7343] text-white px-4 py-2 rounded-md transition"
              >
                Vector App
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
