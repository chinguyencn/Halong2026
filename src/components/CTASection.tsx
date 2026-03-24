import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-20 bg-transparent text-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="#form" 
            className="inline-block bg-gold hover:bg-gold/90 text-dark font-bold text-lg md:text-xl py-6 px-16 rounded-full transition-all transform hover:scale-105 shadow-2xl shadow-gold/30"
          >
            Xem mình có đang đi đúng nhịp không
          </a>
        </motion.div>
      </div>
    </section>
  );
}
