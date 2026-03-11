import React from 'react';
import { motion } from 'framer-motion';
import image13 from '../assets/image13.png';
import image14 from '../assets/image14.png';
import image15 from '../assets/image15.png';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      image: image13,
      title: "Excepteur sint occaecat cupidatat non proident",
      para1: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos",
      para2: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli",
      delay: 0.1
    },
    {
      id: 2,
      image: image14,
      title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
      para1: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      para2: "nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit",
      delay: 0.2
    },
    {
      id: 3,
      image: image15,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      para1: "Coluptatem accusantium doloremque laudantium, totam rem aperiam",
      para2: "Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 border-t border-gray-100 relative">
      {/* Background tint starting halfway */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, #EDFEFF 50%)',
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 700,
              fontSize: '8px',
              letterSpacing: '0.1em',
              background: '#EFFEFF',
              color: '#0CBBC7',
              borderRadius: '60px',
              padding: '6px 10px',
              textTransform: 'uppercase',
            }}
          >
            Resources
          </span>
          <h2
            className="mt-3 text-center"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '40px',
              lineHeight: '1.1',
            }}
          >
            <span style={{ fontWeight: 700 }}>Stay</span>
            <span style={{ fontWeight: 400 }}> in the </span>
            <span style={{ fontWeight: 700 }}>know</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: post.delay, duration: 0.5 }}
              className="group cursor-pointer flex flex-col"
              style={{
                width: '359px',
                height: '533px',
                borderRadius: '4px',
                background: '#FFFFFF',
                boxShadow: '0px 7px 10px 0px #00000008',
                opacity: 1,
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: '290px',
                  height: '150px',
                  position: 'relative',
                  top: '38px',
                  left: '35px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  opacity: 1,
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ borderRadius: '4px' }}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1 px-7 py-6 mt-[60px]">
                <h3 className="mb-4 text-black text-[16px] leading-[26px] font-bold font-['Plus Jakarta Sans']">
                  {post.title}
                </h3>
                <p className="mb-4 text-[#676767] text-[14px] leading-[22px] font-normal font-['Plus Jakarta Sans']">
                  {post.para1}
                </p>
                <p className="mb-6 text-[#676767] text-[14px] leading-[22px] font-normal font-['Plus Jakarta Sans']">
                  {post.para2}
                </p>
                <button
                  className="hover:opacity-90 transition-opacity"
                  style={{
                    width: '114px',
                    height: '38px',
                    background: '#0CBBC7',
                    color: '#FFFFFF',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
