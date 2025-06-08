import React from 'react';

const events = [
    {
        title: 'Full Moon Meditation',
        date: '2025-07-21',
        description: 'Join our guided meditation session to harness the energy of the full moon for clarity and renewal.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Zodiac Compatibility Workshop',
        date: '2025-08-05',
        description: 'Discover the secrets of zodiac compatibility and how it influences your relationships.',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Personal Horoscope Reading',
        date: '2025-08-15',
        description: 'Get a personalized horoscope reading from our expert astrologers.',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    },
];

export default function Events() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white py-10 px-4">
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">Upcoming Astrology Events</h1>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                {events.map((event, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                        <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
                        <div className="p-6 flex-1 flex flex-col">
                            <h2 className="text-2xl font-semibold text-indigo-800 mb-2">{event.title}</h2>
                            <p className="text-sm text-gray-500 mb-4">{new Date(event.date).toLocaleDateString()}</p>
                            <p className="text-gray-700 flex-1">{event.description}</p>
                            <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                                Register
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}