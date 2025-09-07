
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


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MeetingScheduler from "../components/MeetingScheduler";
import ThriveFooter from '../layouts/ThriveFooter';

const Contact = () => {
  const form = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneInputKey, setPhoneInputKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] = useState("schedule"); // Only "schedule" - contact form removed

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    // Add phone number to form before sending
    const hiddenPhoneInput = document.createElement("input");
    hiddenPhoneInput.type = "hidden";
    hiddenPhoneInput.name = "phone";
    hiddenPhoneInput.value = phoneNumber;
    form.current.appendChild(hiddenPhoneInput);

    emailjs
      .sendForm(
        "service_xay2tie",
        "template_9jiozjd",
        form.current,
        "NxCzsOWCqHsR8s5ky"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setIsSubmitting(false);
          setShowSuccess(true);
          form.current.reset();
          setPhoneNumber("");
          setPhoneInputKey((prev) => prev + 1);
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          setIsSubmitting(false);
          setErrorMessage("Failed to send message. Please try again.");
          setShowError(true);
          
          // Hide error message after 5 seconds
          setTimeout(() => {
            setShowError(false);
          }, 5000);
        }
      );
  };

  return (
    <div className="bg-[#f5e9d6] text-[#073349] font-sans overflow-x-hidden min-h-screen">
      <style>{`
        /* Fix autofill styling */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus,
        select:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
          -webkit-text-fill-color: #073349 !important;
          background-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        
        /* Ensure form elements maintain proper styling */
        input, textarea, select {
          background-color: white !important;
          color: #073349 !important;
        }
        
        input::placeholder, textarea::placeholder {
          color: #6b7280 !important;
        }
        
        /* Focus states */
        input:focus, textarea:focus, select:focus {
          background-color: white !important;
          color: #073349 !important;
          outline: none !important;
          border-color: #A28750 !important;
        }

        /* Phone input styling */
        .react-tel-input {
          background-color: white !important;
        }
        
        .react-tel-input .form-control {
          background-color: white !important;
          border: 1px solid #d1d5db !important;
          color: #073349 !important;
          border-radius: 8px !important;
          padding: 12px 16px !important;
          width: 100% !important;
        }
        
        .react-tel-input .form-control:focus {
          border-color: #A28750 !important;
          box-shadow: 0 0 0 3px rgba(162, 135, 80, 0.1) !important;
        }
        
        .react-tel-input .flag-dropdown {
          background-color: white !important;
          border: 1px solid #d1d5db !important;
          border-radius: 8px 0 0 8px !important;
        }
        
        .react-tel-input .flag-dropdown.open {
          background-color: white !important;
        }
        
        .react-tel-input .country-list {
          background-color: white !important;
          border: 1px solid #d1d5db !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
        }
        
        .react-tel-input .country-list .country {
          color: #073349 !important;
        }
        
        .react-tel-input .country-list .country:hover {
          background-color: #f3f4f6 !important;
        }

        /* Calendar Styling */
        .react-calendar {
          width: 100% !important;
          max-width: 400px !important;
          background: white !important;
          border: 1px solid #d1d5db !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          font-family: inherit !important;
        }

        .react-calendar__navigation {
          background: #f9fafb !important;
          border-bottom: 1px solid #e5e7eb !important;
          padding: 1rem !important;
        }

        .react-calendar__navigation button {
          color: #073349 !important;
          font-weight: 600 !important;
          font-size: 1.1rem !important;
        }

        .react-calendar__navigation button:hover {
          background: #A28750 !important;
          color: white !important;
        }

        .react-calendar__month-view__weekdays {
          background: #f3f4f6 !important;
          padding: 0.5rem 0 !important;
        }

        .react-calendar__month-view__weekdays__weekday {
          color: #073349 !important;
          font-weight: 600 !important;
          font-size: 0.875rem !important;
        }

        .react-calendar__tile {
          color: #073349 !important;
          padding: 0.75rem !important;
          border: none !important;
          background: white !important;
        }

        .react-calendar__tile:hover {
          background: #A28750 !important;
          color: white !important;
        }

        .react-calendar__tile--active {
          background: #A28750 !important;
          color: white !important;
        }

        .react-calendar__tile--now {
          background: #f3f4f6 !important;
          color: #073349 !important;
        }

        .react-calendar__tile--now:hover {
          background: #A28750 !important;
          color: white !important;
        }

        .react-calendar__tile--disabled {
          color: #9ca3af !important;
          background: #f9fafb !important;
        }
      `}</style>

      <div className="flex flex-col items-center justify-start px-4 py-16 bg-center bg-no-repeat min-h-screen">
        {/* Hero Title */}
        <div className="w-full max-w-6xl mb-12 text-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#073349] leading-tight">
            Thrive with Us. <span className="text-[#A28750]">Connect Now</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#073349]">
            With a creative team and extensive industry experience, our
            e-commerce managing services are here to help you thrive. Get in
            touch with our team and let's explore opportunities together.
          </p>
        </div>

        {/* Only Schedule Discovery Call */}
        <div className="w-full max-w-6xl">
          <MeetingScheduler />
        </div>
      </div>

      <ThriveFooter />
    </div>
  );
};

export default Contact;
