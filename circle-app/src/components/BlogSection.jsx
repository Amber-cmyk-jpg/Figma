import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const BlogSection = () => {
    const posts = [
        {
            id: 1,
            imageColor: "bg-blue-100",
            title: "How to Build a High-Performing Team in 2023",
            excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            delay: 0.1
        },
        {
            id: 2,
            imageColor: "bg-green-100",
            title: "The Future of Remote Work and Collaboration",
            excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            delay: 0.2
        },
        {
            id: 3,
            imageColor: "bg-purple-100",
            title: "5 Strategies for Improving Employee Retention",
            excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            delay: 0.3
        }
    ];

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-dark leading-tight mb-4">
                            Latest Insights
                        </h2>
                        <p className="text-xl text-gray-500">
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>

                    <button className="flex items-center text-primary font-bold hover:text-primary-dark transition-colors group">
                        View all articles
                        <ChevronRight className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: post.delay, duration: 0.5 }}
                            className="group cursor-pointer"
                        >
                            {/* Card Image Placeholder */}
                            <div className={`w-full aspect-[4/3] rounded-2xl mb-6 ${post.imageColor} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                <img
                                    src={`https://picsum.photos/seed/${post.id + 10}/800/600`}
                                    alt={post.title}
                                    className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Card Content */}
                            <h3 className="text-2xl font-bold text-dark mb-4 leading-snug group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-500 mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <button className="text-primary font-medium flex items-center group-hover:underline">
                                Read more <ChevronRight className="ml-1 w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogSection;
