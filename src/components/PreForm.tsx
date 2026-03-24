import { motion } from "motion/react";
import { Filter } from "lucide-react";

export default function PreForm() {
  return (
    <section className="section-padding bg-transparent border-t border-white/5">
      <div className="container-custom text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-serif italic font-bold mb-8">
            Trước khi bạn điền, <br />
            <span className="not-italic font-sans font-extrabold text-white">có thể bạn không cần phần này.</span>
          </h2>
          
          <p className="text-lg text-gray-200 font-semibold leading-relaxed">
            Chỉ khi bạn thực sự muốn hiểu rõ mình đang ở đâu trước khi xuống tiền thì phần dưới đây mới có ý nghĩa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
