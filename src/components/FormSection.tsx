import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck, X } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Bạn đã theo dõi thị trường Hạ Long trong bao lâu?",
    options: ["Dưới 6 tháng", "6 tháng - 1 năm", "1 - 2 năm", "Trên 2 năm"]
  },
  {
    id: 2,
    question: "Nguồn thông tin chính bạn sử dụng để đánh giá là gì?",
    options: ["Báo chí & Tin tức", "Môi giới & Người quen", "Dữ liệu thực tế & Khảo sát", "Kết hợp nhiều nguồn"]
  },
  {
    id: 3,
    question: "Mục tiêu đầu tư chính của bạn tại Hạ Long 2026?",
    options: ["Lướt sóng ngắn hạn", "Tăng trưởng trung hạn", "Dòng tiền dài hạn", "Tích sản an toàn"]
  },
  {
    id: 4,
    question: "Bạn đánh giá mức độ rủi ro hiện tại của thị trường như thế nào?",
    options: ["Rất thấp", "Trung bình", "Cao", "Chưa xác định được"]
  },
  {
    id: 5,
    question: "Nếu thị trường đi ngang trong 12 tháng tới, bạn sẽ làm gì?",
    options: ["Bán cắt lỗ", "Tiếp tục giữ", "Mua thêm", "Chưa có kế hoạch"]
  },
  {
    id: 6,
    question: "Bạn đã có bộ tiêu chí cụ thể để chọn sản phẩm chưa?",
    options: ["Đã có rất chi tiết", "Có sơ bộ", "Đang xây dựng", "Chưa có"]
  }
];

export default function FormSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showPopup, setShowPopup] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: option });
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors', // Google Apps Script requires no-cors for simple POST
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...contactInfo,
            ...answers
          }),
        });
      }
      
      console.log("Submitting data:", { ...contactInfo, ...answers });
      
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section id="form" className="section-padding min-h-screen flex items-center bg-transparent">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-serif italic mb-4 text-shadow">
            Kiểm tra nhanh: <br />
            <span className="not-italic font-sans font-black text-white uppercase tracking-tighter">Bạn đang ở đúng nhịp thị trường chưa?</span>
          </h2>
          <p className="text-white font-bold italic text-shadow">Không có đúng sai. Chỉ là để bạn nhìn rõ hơn vị trí của mình.</p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Progress Bar */}
            <div className="w-full h-2 bg-white/10 mb-12 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-gold font-black mb-2 block text-shadow">Câu hỏi {currentStep + 1}/{questions.length}</span>
                <h3 className="text-2xl md:text-3xl font-black mb-8 text-white leading-tight text-shadow">
                  {questions[currentStep].question}
                </h3>

                <div className="grid gap-4">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 flex justify-between items-center group ${
                        answers[questions[currentStep].id] === option
                          ? "bg-gold border-gold text-dark"
                          : "bg-transparent border-white/20 text-white hover:border-gold hover:bg-white/10"
                      }`}
                    >
                      <span className="font-bold text-lg">{option}</span>
                      <ChevronRight size={22} className={answers[questions[currentStep].id] === option ? "text-dark" : "text-gold opacity-0 group-hover:opacity-100"} />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="flex items-center gap-2 text-white/60 hover:text-white disabled:opacity-0 transition-all font-bold"
              >
                <ChevronLeft size={20} /> Quay lại
              </button>
              
              {Object.keys(answers).length === questions.length && currentStep === questions.length - 1 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full">
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6 border-t border-white/10 pt-8">
                    <div className="flex items-center gap-3 text-gold mb-4">
                      <ShieldCheck size={24} />
                      <p className="font-black text-xl text-shadow uppercase tracking-tight">Bước cuối: Kết nối chuyên gia</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-white/60 ml-2">Họ và tên</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Nhập họ tên của bạn" 
                          className="glass-input w-full rounded-2xl p-5 text-white font-bold placeholder:text-white/20"
                          value={contactInfo.name}
                          onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-white/60 ml-2">Số điện thoại (Zalo)</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="Nhập số điện thoại Zalo" 
                          className="glass-input w-full rounded-2xl p-5 text-white font-bold placeholder:text-white/20"
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-navy text-gold font-black text-xl py-6 rounded-2xl hover:brightness-125 transition-all shadow-[0_15px_30px_-5px_rgba(0,31,63,0.5)] border-2 border-gold/30 uppercase tracking-wider"
                      >
                        {isSubmitting ? "Đang xử lý..." : "KẾT NỐI CÙNG CHUYÊN VIÊN PHÂN TÍCH"}
                      </button>
                      
                      <p className="text-center text-xs text-white/50 font-medium leading-relaxed max-w-xl mx-auto">
                        🔒 Đặc quyền bảo mật: Thông tin của bạn được bảo mật tuyệt đối. <br />
                        Tôi cam kết chỉ cung cấp giá trị phân tích thị trường thực thụ, không làm phiền.
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/80"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass-card max-w-lg w-full p-10 text-center rounded-[2rem] border-gold/30"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-8">
                <CheckCircle2 size={40} className="text-gold" />
              </div>
              
              <h3 className="text-3xl font-black mb-6 text-white leading-tight">Cảm ơn bạn!</h3>
              
              <p className="text-xl text-white/90 font-bold leading-relaxed mb-8">
                Tôi đã tiếp nhận yêu cầu và sẽ sớm kết nối để tư vấn cơ hội đầu tư Hạ Long 2026 đến bạn qua Zalo trong ít phút nữa.
              </p>

              <button 
                onClick={() => setShowPopup(false)}
                className="bg-gold text-dark font-black px-10 py-4 rounded-full hover:brightness-110 transition-all shadow-xl shadow-gold/20"
              >
                Đóng thông báo
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
