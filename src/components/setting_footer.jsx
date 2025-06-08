import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function SettingFooter() {
  return (
    <footer className="text-white py-10 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* CTA Card */}
        <div className="bg-[#073349] rounded-xl p-10 shadow-lg border border-gray-700">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Ready to Thrive?
          </h1>

          <form className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 px-4 py-3 rounded-full text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full md:w-48 bg-[#A28750] hover:bg-[#8e7343] text-white px-6 py-3 rounded-full text-lg font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
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
