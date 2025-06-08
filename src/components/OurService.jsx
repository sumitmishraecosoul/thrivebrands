// import React from 'react';

// const services = [
//   {
//     title: 'Service and Brand Audit',
//     description:
//       'Evaluate your brand’s positioning, messaging, and visual identity across channels to identify gaps and opportunities.',
//     icon: '🕵️‍♂️',
//   },
//   {
//     title: 'Digital Marketing Strategy',
//     description:
//       'Craft tailored digital marketing strategies to increase visibility, engagement, and conversion across platforms.',
//     icon: '📈',
//   },
//   {
//     title: 'Content Creation',
//     description:
//       'Produce compelling visuals, copy, and campaigns that resonate with your target audience.',
//     icon: '🎨',
//   },
//   {
//     title: 'Performance Analytics',
//     description:
//       'Track and analyze campaign performance with actionable insights to guide decision making.',
//     icon: '📊',
//   },
// ];

// export default function OurServices() {
//   return (
//     <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
//         OUR SERVICES
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center text-center"
//           >
//             <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-gray-400 text-3xl mb-4">
//               {service.icon}
//             </div>
//             <h3 className="text-lg font-semibold mb-2 text-gray-800">
//               {service.title}
//             </h3>
//             <p className="text-sm text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






import React from 'react';
import ClaimsManagementTools from '../assets/images/ClaimsManagementTools.png';
import ContentDevelopmentAgency from '../assets/images/ContentDevelopmentAgency.png';
import CreativeAgency from '../assets/images/CreativeAgency.png';
import Dynamiccontentframework from '../assets/images/Dynamiccontentframework.png';
import EComDataScienceTools from '../assets/images/EComDataScienceTools.png';
import EComPortfolioManagement from '../assets/images/EComPortfolioManagement.png';
import Endtoendmarketplacemanagement from '../assets/images/Endtoendmarketplacemanagement.png';
import MarketIntelligenceToolsSubscriptions from '../assets/images/MarketIntelligenceToolsSubscriptions.png';
import PerformanceMarketingAgency from '../assets/images/PerformanceMarketingAgency.png';
import AIDrivenDataInfrastructureIntelligence from '../assets/images/AIDrivenDataInfrastructureIntelligence_.png';
import AIDrivenMarketingEngine from '../assets/images/AIDrivenMarketingEngine_.png';



// import AIResearch from '../assets/images/AI-DrivenMarketResearch.png';
const serviceImages = [
  ClaimsManagementTools,
  ContentDevelopmentAgency,
  CreativeAgency,
  AIDrivenDataInfrastructureIntelligence,
  EComDataScienceTools,
  EComPortfolioManagement,
  AIDrivenMarketingEngine,
  MarketIntelligenceToolsSubscriptions,
  PerformanceMarketingAgency

];

export default function OurServicesSlider() {
  // Duplicate images for infinite loop effect
  const allImages = [...serviceImages, ...serviceImages];

  return (
    <div className="overflow-hidden w-full py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        OUR SERVICES
      </h2>
      <div className="relative w-full">
        <div className="flex animate-slide gap-4">
          {allImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`service-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

