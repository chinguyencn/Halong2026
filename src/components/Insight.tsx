import { motion } from "motion/react";

export default function Insight() {
  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-serif italic mb-12 leading-tight">
              Bạn không cần thêm một lời khuyên. <br />
              <span className="not-italic font-sans font-black text-white">Bạn cần một cách nhìn đủ rõ.</span>
            </h2>

            <div className="space-y-8 text-lg md:text-xl font-bold text-white leading-relaxed">
              <p>
                Để khi xuống tiền, bạn không còn phải tự hỏi: 
                <span className="text-gold font-black italic block mt-2">“Liệu mình có đang đi đúng không?”</span>
              </p>
              
              <div className="h-px w-full bg-gold/30"></div>
              
              <p>
                Phần tiếp theo không phải để nói bạn nên làm gì. 
                Mà để bạn có một <span className="text-gold font-black">“điểm tựa”</span> — một cách giúp bạn tự kiểm tra lại vị trí của mình trước khi đưa ra quyết định.
              </p>

              <p className="text-base text-white/80 italic font-medium">
                Không phải ai cũng cần phần này. Nhưng nếu bạn cần sự rõ ràng → bạn có thể đi tiếp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
