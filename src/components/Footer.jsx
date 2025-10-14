import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function HomeFooter() {
     const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/contact');
  };


//gvttvtftft

  return (
    <footer className="text-white py-10 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#073349] rounded-xl p-10 shadow-lg border border-gray-700">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-4">Ready To Get Thriving?</h1>
            <p className="text-lg text-gray-300 mb-6">
              Reach out to us via{" "}
              <span className="text-white font-medium">
                client.service@thrivebrands.ai
              </span>{" "}
              & make your online ventures a success.
            </p>
            <button className="bg-[#A28750] hover:bg-[#8e7343] text-white px-6 py-3 rounded-full text-lg font-semibold transition" onClick={handleExplore}>
              Let's Do It
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 text-sm text-gray-400">
          {/* <p>© 2025 Darkyn. All Rights Reserved.</p> */}
          <button
            className="w-10 h-10 border border-gray-500 rounded-md flex items-center justify-center hover:bg-gray-800 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
