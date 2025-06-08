import React from "react";

const blogPosts = [
    {
        id: 1,
        title: "Understanding Your Zodiac Sign",
        excerpt:
            "Discover the unique traits and characteristics of your zodiac sign and how it influences your personality.",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        date: "2024-06-10",
        author: "Astro Guru",
    },
    {
        id: 2,
        title: "How to Read Your Birth Chart",
        excerpt:
            "A beginner’s guide to interpreting your natal chart and unlocking the secrets of your astrological blueprint.",
        image:
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
        date: "2024-06-08",
        author: "Stellar Sage",
    },
    {
        id: 3,
        title: "Mercury Retrograde: What Does It Mean?",
        excerpt:
            "Learn about Mercury Retrograde, its effects on communication, and tips to navigate this cosmic event.",
        image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        date: "2024-06-05",
        author: "Celestial Writer",
    },
];

export default function Blog() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
                Astrology Blog
            </h1>
            <div className="grid md:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <span>{post.author}</span>
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}