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




import { Link } from 'react-router-dom';
import React from 'react';
import thrivelogo from '../assets/logos/ThriveLogo.png';

export default function Header() {
  return (
    <header className="w-full bg-[#073349] text-white shadow-md py-2">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div id="iconcontainer" >
          <img
            src={thrivelogo}
            alt="Thrive Logo"
            className="h-16 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150x50?text=Logo';
            }}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-[#8e7343] transition"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* External Button Link */}
          <li>
            <a
              href="https://kineticaapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A28750] hover:bg-[#8e7343] text-white px-4 py-2 rounded-md transition"
            >
              vector.ai
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

