import React from 'react';

const stats = [
  {
    bg: 'bg-[#A28750]',  // Gold
    dot: 'bg-[#073349]', // Dark Teal
    number: '',
    label: 'Data Driven Approach | Boundless Creativity',
  },
  {
    bg: 'bg-[#ECD5B0]',  // Beige
    dot: 'bg-[#073349]',
    number: '100+',
    label: 'Projects Completed',
  },
  {
    bg: 'bg-[#745E39]',  // Dark Bronze
    dot: 'bg-[#ECD5B0]',
    number: '50+',
    label: ' Happy Clients',
  },
  {
    bg: 'bg-gradient-to-br from-[#ECD5B0] to-[#745E39]',  // Gradient Bronze
    dot: 'bg-[#073349]',
    number: '75+',
    label: 'Successful Online Stores ',
  },
];

export default function StatsGrid() {
  return (
    <div className="bg-black py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-md ${item.bg} text-white p-6 flex flex-col justify-between min-h-[200px]`}
          >
            <span className={`w-4 h-4 rounded-full ${item.dot} mb-4`} />
            {item.number && (
              <h2 className="text-5xl font-bold mb-2">{item.number}</h2>
            )}
            <p className="text-sm sm:text-base font-light tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
