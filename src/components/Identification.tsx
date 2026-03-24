import { motion } from "motion/react";
import { UserCheck, AlertCircle, TrendingUp, Zap } from "lucide-react";

const InvestorTypes = [
  {
    id: 1,
    icon: <AlertCircle className="text-gold" size={32} />,
    title: "Quyết định dựa trên thông tin bên ngoài",
    desc: "Tin tức, môi giới, “nghe nói” → nhưng chưa thực sự kiểm chứng lại bằng góc nhìn riêng.",
    tag: "Thiếu kiểm chứng"
  },
  {
    id: 2,
    icon: <TrendingUp className="text-gold" size={32} />,
    title: "Nhìn vào giá, nhưng không hiểu nhịp",
    desc: "Thấy tăng thì sợ trễ, thấy chững thì sợ rủi ro → nhưng không đặt trong bức tranh lớn.",
    tag: "Lệch nhịp"
  },
  {
    id: 3,
    icon: <Zap className="text-gold" size={32} />,
    title: "Sợ bỏ lỡ hơn là sợ sai",
    desc: "Ra quyết định vì FOMO → không phải vì đã thực sự sẵn sàng.",
    tag: "Tâm lý FOMO"
  }
];

export default function Identification() {
  return (
    <section className="section-padding relative bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-gold mb-6">
            <UserCheck size={20} />
            <span className="uppercase tracking-widest text-xs font-bold">Tự nhận diện</span>
          </div>
          <h2 className="text-xl md:text-3xl font-serif italic mb-6 text-shadow">
            Vậy thì câu hỏi không còn là: <br />
            <span className="not-italic font-sans font-black text-white">“Có nên đầu tư Hạ Long 2026 hay không?”</span>
          </h2>
          <p className="text-white text-lg md:text-xl font-bold max-w-2xl mx-auto text-shadow">
            Dưới đây là 3 dấu hiệu thường thấy ở những người đang xuống tiền khi chưa có điểm tựa đủ vững:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {InvestorTypes.map((type, index) => (
            <motion.div
              key={type.id}
              className="bg-transparent p-10 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-gold transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="mb-8 p-4 bg-transparent rounded-full group-hover:bg-gold/20 transition-colors">
                {type.icon}
              </div>
              <span className="text-gold text-xs font-black uppercase tracking-widest mb-4">
                {type.tag}
              </span>
              <h3 className="text-xl font-black mb-4 text-white group-hover:text-gold transition-colors text-shadow">
                {type.title}
              </h3>
              <p className="text-white font-bold leading-relaxed text-shadow">
                {type.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 p-10 rounded-2xl bg-transparent border border-gold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl font-bold text-white text-shadow">
            Nếu bạn thấy mình ở 1 trong 3 điểm trên → <span className="text-gold font-black">vấn đề không phải là thiếu cơ hội.</span>
          </p>
          <p className="text-white mt-4 italic font-bold text-shadow">
            Mà là bạn chưa có một điểm tựa đủ rõ để xuống tiền.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
