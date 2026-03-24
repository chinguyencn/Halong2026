import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden bg-transparent">
      {/* Background Image with Overlay - REMOVED to use global background */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif italic mb-4 text-gold text-shadow">
            Hạ Long 2026
          </h1>
          
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white uppercase tracking-[0.4em] text-shadow">
              CHIẾN LƯỢC & TẦM NHÌN
            </h2>
          </div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a 
              href="#form" 
              className="inline-block bg-gold hover:bg-gold/90 text-dark font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-gold/20"
            >
              Xem mình có đang đi đúng nhịp không
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
