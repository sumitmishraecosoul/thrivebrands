
// import React from 'react';


// import HomeFooter from '../components/Footer';
// import ThriveFooter from '../layouts/ThriveFooter';
// export default function Contact() {
//     return (
//         <div className="min-h-screen flex flex-col">
//            <section className="relative  text-[#073349] px-6 py-20 md:px-16">
//   {/* Banner Section */}
//   <div
//     className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
//     style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}
//   ></div>

//   <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
//     {/* <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
//       Thrive with Us. Connect Now
//     </h2> */}
//     <p className="text-lg md:text-xl text-[#073349]">
//       With a creative team and extensive industry experience, our e-commerce
//       managing services are here to help you thrive. Get in touch with our
//       team and let's explore opportunities together.
//     </p>
//   </div>

//   {/* Contact Content */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
//     {/* Left - Contact Info */}
//     <div>
//       <h3 className="text-2xl font-semibold mb-6">Contact Us | Thrive</h3>
//       <p className="text-lg mb-4">
//         We're dedicated to empowering individuals and businesses alike. Let’s
//         explore opportunities together.
//       </p>
      
//     </div>

//     {/* Right - Form */}
//     <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <input
//         type="text"
//         placeholder="Name *"
//         className="bg-transparent border border-gray-500 rounded px-4 py-2 text-[#073349] col-span-1"
//       />
//       <input
//         type="text"
//         placeholder="Last Name *"
//         className="bg-transparent border border-gray-500 rounded px-4 py-2 text-[#073349] col-span-1"
//       />
//       <input
//         type="email"
//         placeholder="Email Address *"
//         className="bg-transparent border border-gray-500 rounded px-4 py-2 text-[#073349] col-span-1"
//       />
//       <input
//         type="text"
//         placeholder="Phone Number"
//         className="bg-transparent border border-gray-500 rounded px-4 py-2 text-[#073349] col-span-1"
//       />
//       <textarea
//         placeholder="Message *"
//         rows="5"
//         className="bg-transparent border border-gray-500 rounded px-4 py-2 text-[#073349] col-span-2"
//       ></textarea>
//       <button
//         type="submit"
//         className="col-span-2 bg-[#A28750] text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition"
//       >
//         Let’s Thrive
//       </button>
//     </form>
//   </div>
// </section>
// {/* <HomeFooter /> */}
// <ThriveFooter />
//         </div>
//     );
// }


import React from 'react';
import ThriveFooter from '../layouts/ThriveFooter';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4e8d7]">
      {/* Banner & Contact Section */}
      <section className="relative text-[#073349] px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}
        ></div>

        {/* Heading & Subtext */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-12 md:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Thrive with Us. Connect Now
          </h2>
          <p className="text-md sm:text-lg md:text-xl">
            With a creative team and extensive industry experience, our
            e-commerce managing services are here to help you thrive. Get in
            touch with our team and let's explore opportunities together.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="relative z-10 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Contact Us | Thrive</h3>
            <p className="text-md sm:text-lg">
              We're dedicated to empowering individuals and businesses alike.
              Let’s explore opportunities together.
            </p>
          </div>

          {/* Contact Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="First Name *"
              className="bg-transparent border border-gray-400 rounded px-4 py-3 text-[#073349] w-full"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="bg-transparent border border-gray-400 rounded px-4 py-3 text-[#073349] w-full"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="bg-transparent border border-gray-400 rounded px-4 py-3 text-[#073349] w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border border-gray-400 rounded px-4 py-3 text-[#073349] w-full"
            />
            <textarea
              placeholder="Message *"
              rows="5"
              className="bg-transparent border border-gray-400 rounded px-4 py-3 text-[#073349] sm:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="sm:col-span-2 bg-[#A28750] text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition"
            >
              Let’s Thrive
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <ThriveFooter />
    </div>
  );
}
