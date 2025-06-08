// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AboutPreview = () => {
//   const navigate = useNavigate();

//   const handleExplore = () => {
//     navigate('/about');
//   };

//   return (
//     <div className=" py-16 px-6 text-center">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">ABOUT US</h2>
//       <p className="text-gray-700 max-w-2xl mx-auto mb-4">
//        The e-commerce landscape is competitive. But, with the right handful of talent, your online stores can thrive! From spectacular e-commerce marketing services to building a wide presence, we ace at helping you make sales, drive revenue, and increase customer retention rate.
//       </p>
//       <p className="text-gray-700 max-w-2xl mx-auto mb-8">
//         Go 360° with the best e-commerce marketing services and help your online store reach its full potential. From building successful online stores to taking your Shopify websites on the first pages, we are here to help your brand thrive.
//       </p>
//       <button
//         onClick={handleExplore}
//         className="border border-black text-black px-6 py-2 hover:bg-black hover:text-white transition duration-300 rounded-md"
//       >
//         Let’s Thrive
//       </button>
//     </div>
//   );
// };

// export default AboutPreview;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPreview = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/about');
  };

  return (
    <div className="py-16 px-6 text-center bg-[#f5e9d6]">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">ABOUT US</h2>

      <p className="text-gray-800 text-lg max-w-3xl mx-auto mb-4">
        The e-commerce landscape is competitive. But, with the right handful of talent, your online stores can thrive! From spectacular e-commerce marketing services to building a wide presence, we ace at helping you make sales, drive revenue, and increase customer retention rate.
      </p>

      <p className="text-gray-800 text-lg max-w-3xl mx-auto mb-8">
        Go 360° with the best e-commerce marketing services and help your online store reach its full potential. From building successful online stores to taking your Shopify websites on the first pages, we are here to help your brand thrive.
      </p>

      <button
        onClick={handleExplore}
        className="border px-8 py-3 rounded-md text-white bg-[#073349] border-[#073349] hover:bg-white hover:text-[#073349] transition duration-300 font-semibold"
      >
        Let’s Thrive
      </button>
    </div>
  );
};

export default AboutPreview;
