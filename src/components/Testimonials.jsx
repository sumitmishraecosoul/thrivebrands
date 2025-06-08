// import React from "react";
// import Testimonial1 from "../assets/images/testimonial1.png";
// import Testimonial2 from "../assets/images/Testimonial2.png";

// const testimonials = [
//   {
//     name: "— Alex M., CEO",
//     image:
//       Testimonial1,
//     quote:
//       "Throughout our collaboration, Darkyn's dedication to exceptional results was evident. Our portfolio now exceeds expectations, thanks to their expertise."
//   },
//   {
//     name: "William Green",
//     image:
//       Testimonial2,
//     quote:
//       "Throughout our collaboration, Darkyn's dedication to exceptional results was evident. Our portfolio now exceeds expectations, thanks to their expertise."
//   },
//   {
//     name: "William Green",
//     image:
//       Testimonial2,
//     quote:
//       "Throughout our collaboration, Darkyn's dedication to exceptional results was evident. Our portfolio now exceeds expectations, thanks to their expertise."
//   },
// ];

// const TestimonialCard = ({ name, image, quote }) => (
//   <div className="bg-gradient-to-br from-[#2e1e1a] to-[#1d1a17] text-white p-6 rounded-lg shadow-2xl w-full max-w-md">
//     <div className="text-orange-500 text-3xl font-bold mb-2">“</div>
//     <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
//     <hr className="border-gray-600 mb-4" />
//     <div className="flex items-start gap-4">
//       <img
//         src={image}
//         alt={name}
//         className="w-20 h-20 rounded-md object-cover"
//       />
//       <p className="text-md text-white leading-relaxed">{quote}</p>
//     </div>
//   </div>
// );

// const Testimonials = () => {
//   return (
//     <div className=" text-black py-12 px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-5xl font-extrabold tracking-tight mb-10 border-b border-orange-500 inline-block pb-2">
//           What Our Customers Are Talking? 
//         </h2>
//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {testimonials.map((t, idx) => (
//             <TestimonialCard key={idx} {...t} />
//           ))}
//         </div> */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//   {testimonials.map((t, idx) => (
//     <TestimonialCard key={idx} {...t} />
//   ))}
// </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;





import React from "react";
// import Testimonial1 from "../assets/images/testimonials/Alex.png";
// import Testimonial2 from "../assets/images/Testimonial2.png";
// import Testimonial3 from "../assets/images/Testimonial3.png"; // Add your 3rd image here

import Testimonial1 from "../assets/images/testimonials/Alex.png";
import Testimonial2 from "../assets/images/testimonials/Michel.png";
import Testimonial3 from "../assets/images/testimonials/Samantha.png";

// const testimonials = [
//   {
//     name: "Alex M., CEO",
//     title: "Exceptional Branding Expertise",
//     image: Testimonial1,
//     quote:
//       "Thrive Brands completely transformed our brand identity. They took the time to understand our business goals, audience, and values, and delivered a brand strategy that captured our essence perfectly. Their design team is world-class — the logo, visuals, and messaging now truly reflect who we are. We’ve received amazing feedback from both clients and stakeholders."
//   },
//   {
//     name: "Samantha R., Marketing Director",
//     title: "Innovative Marketing Strategies",
//     image: Testimonial2,
//     quote:
//       "Partnering with Thrive Brands was one of the best decisions we made. Their team brought fresh, data-driven strategies to our campaigns, combining creativity with measurable results. Within months, we saw a noticeable spike in audience engagement, lead quality, and conversion rates. They don’t just execute; they think ahead and align every action with your brand vision."
//   },
//   {
//     name: "Michael T., Founder",
//     title: "Outstanding Customer Service",
//     image: Testimonial3,
//     quote:
//       "The Thrive Brands team made us feel supported every step of the way. They were extremely responsive, attentive to every detail, and always open to feedback. Even when we had tight deadlines, they delivered without compromising quality. It felt less like working with an agency and more like adding a passionate team of brand experts to our company."
//   },
// ];



// export default function Testimonials  (){
//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 border-b-4 border-orange-500 inline-block pb-2">
//           What Our Customers Are Saying
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {testimonials.map((t, idx) => (
//             <TestimonialCard key={idx} {...t} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


// import React from "react";
// import Testimonial1 from "../assets/images/testimonial1.png";
// import Testimonial2 from "../assets/images/Testimonial2.png";
// import Testimonial3 from "../assets/images/Testimonial3.png"; // Replace with actual image

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex M., CEO",
      title: "Exceptional Branding Expertise",
      image: Testimonial1,
      quote:
        "Thrive Brands completely transformed our brand identity. They took the time to understand our business goals, audience, and values, and delivered a brand strategy that captured our essence perfectly. Their design team is world-class — the logo, visuals, and messaging now truly reflect who we are. We’ve received amazing feedback from both clients and stakeholders.",
    },
    {
      name: "Samantha R., Marketing Director",
      title: "Innovative Marketing Strategies",
      image: Testimonial3,
      quote:
        "Partnering with Thrive Brands was one of the best decisions we made. Their team brought fresh, data-driven strategies to our campaigns, combining creativity with measurable results. Within months, we saw a noticeable spike in audience engagement, lead quality, and conversion rates. They don’t just execute; they think ahead and align every action with your brand vision.",
    },
    {
      name: "Michael T., Founder",
      title: "Outstanding Customer Service",
      image: Testimonial2,
      quote:
        "The Thrive Brands team made us feel supported every step of the way. They were extremely responsive, attentive to every detail, and always open to feedback. Even when we had tight deadlines, they delivered without compromising quality. It felt less like working with an agency and more like adding a passionate team of brand experts to our company.",
    },
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 border-b-4 border-orange-500 inline-block pb-2">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#073349] text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="text-sm italic text-gray-300">{t.name}</p>
                </div>
              </div>
              <div className="text-orange-400 text-4xl font-bold mb-2 leading-none">“</div>
              <p className="text-sm text-gray-100">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
