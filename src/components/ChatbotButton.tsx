import { motion } from "motion/react";
import { useState } from "react";

export default function ChatbotButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleZaloClick = () => {
    window.open("https://zalo.me/0785867676", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {/* Label that appears on hover */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          x: isHovered ? 0 : 10 
        }}
        transition={{ duration: 0.2 }}
        className="bg-white text-[#0068ff] px-4 py-2 rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] font-bold text-sm whitespace-nowrap pointer-events-none border border-gray-100"
      >
        Tư vấn ngay qua Zalo
      </motion.div>
      
      <div className="relative flex items-center justify-center">
        {/* Pulsing effect circles */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-[#0068ff] z-0"
        />
        <motion.div
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-0 rounded-full bg-[#0068ff] z-0"
        />

        {/* Main Button */}
        <motion.button
          onClick={handleZaloClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 bg-[#0068ff] hover:bg-[#0056d6] text-white w-20 h-20 rounded-full shadow-[0_15px_35px_-5px_rgba(0,104,255,0.5)] transition-all cursor-pointer flex flex-col items-center justify-center border-2 border-white/30"
          aria-label="Liên hệ qua Zalo"
        >
          {/* Custom Zalo-like Icon */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current mb-0.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 5.58 2 10c0 2.5 1.44 4.7 3.68 6.12l-.7 2.58a.5.5 0 0 0 .72.54l3.12-1.68c1.02.28 2.1.44 3.18.44 5.52 0 10-3.58 10-8s-4.48-8-10-8zm0 13c-.9 0-1.78-.12-2.62-.36a.5.5 0 0 0-.44.08l-1.84 1 1.84-1c-.1.06-.2.12-.32.18l-1.52.82.4-1.46a.5.5 0 0 0-.16-.5C5.12 12.6 4 11.1 4 10c0-3.31 3.58-6 8-6s8 2.69 8 6-3.58 6-8 6z"/>
          </svg>
          <span className="text-[10px] font-black uppercase tracking-tighter">Zalo</span>
        </motion.button>
      </div>
    </div>
  );
}
