import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const GemShape = () => (
  <motion.div
    animate={{ 
      rotateY: 360,
      filter: ["drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))", "drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))", "drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))"]
    }}
    transition={{ 
      rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
      filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }}
    className="w-74 h-90 relative transform -rotate-12 skew-x-12" // Increased size
  >
    <svg viewBox="0 0 100 160" className="w-full h-full">
      {/* Reflection/shadow */}
      <ellipse 
        cx="50" 
        cy="150" 
        rx="20" 
        ry="5" 
        className="fill-purple-100 opacity-20 blur-sm"
      />
      
      {/* Main crystal shape */}
      <defs>
        <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#9333EA' }} />
          <stop offset="60%" style={{ stopColor: '#A855F7' }} />
          <stop offset="100%" style={{ stopColor: '#EC4899' }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Left face */}
      <path
        d="M50 20 L20 50 L30 120 L50 140 Z"
        fill="#9333EA"
        className="opacity-90"
      />
      
      {/* Right face */}
      <path
        d="M50 20 L80 50 L70 120 L50 140 Z"
        fill="#A855F7"
        className="opacity-95"
      />
      
      {/* Main face */}
      <path
        d="M50 20 L80 50 L70 120 L50 140 L30 120 L20 50 Z"
        fill="url(#crystalGradient)"
        filter="url(#glow)"
        className="opacity-90"
      />
    </svg>
  </motion.div>
);

const SocialIcon = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    className="p-2 transition-colors duration-200 hover:text-purple-600"
    aria-label={label}
  >
    <Icon size={34} />
  </motion.a>
);

const Portfolio = () => {
  const textRef = useRef(null); // Define the textRef using useRef

  return (
    <div id="home" className="min-h-screen bg-white flex flex-col items-center justify-center relative">
      {/* Main content container */}
      <div className="relative flex flex-col items-center">
        {/* Gemstone with container for perspective */}
        <div className="perspective-[1000px] relative">
          <GemShape />
          <div 
            ref={textRef} 
            className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-black">
            welcome!
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
        <SocialIcon
          Icon={Github}
          href="https://github.com/rakesh-04"
          label="GitHub Profile"
        />
        <SocialIcon
          Icon={Linkedin}
          href="https://www.linkedin.com/in/rakesh-mahanta-46b17a292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          label="LinkedIn Profile"
        />
        <SocialIcon
          Icon={Instagram}
          href="https://www.instagram.com/mr_rakesh51/?utm_source=qr&r=nametag"
          label="Instagram Profile"
        />
        <SocialIcon
          Icon={Mail}
          href="mailto:rakeshmahanta205@gamil.com"
          label="Email Me"
        />
      </div>
    </div>
  );
};

export default Portfolio;