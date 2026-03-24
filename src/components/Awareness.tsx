import { motion } from "motion/react";
import { Eye } from "lucide-react";

export default function Awareness() {
  return (
    <section className="section-padding relative overflow-hidden bg-transparent">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-gold mb-12">
              <Eye size={20} />
              <span className="uppercase tracking-widest text-xs font-bold">Mở nhận thức</span>
            </div>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif italic mb-12 leading-tight text-shadow">
              Hạ Long 2026 không thiếu thông tin. <br />
              <span className="not-italic font-sans font-black text-white">Bạn có thể đọc rất nhiều, nghe rất nhiều</span>
            </h2>
            
            <p className="text-white text-lg md:text-xl mb-12 leading-relaxed font-bold text-shadow">
              và vẫn cảm thấy… chưa đủ chắc để xuống tiền.
            </p>
            
            <div className="bg-transparent p-10 md:p-16 border-y border-gold mb-20">
              <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed text-shadow">
                Vấn đề không nằm ở việc bạn biết bao nhiêu. <br />
                Mà là: <br />
                <span className="text-gold font-black not-italic block mt-8 text-xl md:text-2xl">
                  👉 Bạn có một cách rõ ràng để tự kiểm tra lại góc nhìn của mình hay chưa?
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed text-shadow">
            Vì đến cuối cùng, <br />
            quyết định xuống tiền không đến từ thông tin. 
            <span className="text-gold font-black block mt-6 text-xl md:text-2xl">
              Mà đến từ việc bạn tin rằng mình đang ở đúng nhịp thị trường.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
