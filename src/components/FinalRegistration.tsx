import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X } from "lucide-react";

export default function FinalRegistration() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setShowModal(true);
    // Reset form
    setFormData({ name: "", phone: "" });
  };

  return (
    <section className="section-padding relative z-10 bg-transparent">
      <div className="container-custom max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-transparent rounded-3xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-white uppercase tracking-wider">
                  Họ và tên
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  placeholder="Nhập họ và tên của bạn"
                  className="w-full bg-transparent border-2 border-white/20 rounded-xl p-4 focus:border-gold outline-none transition-all text-white font-bold placeholder:text-gray-400"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-white uppercase tracking-wider">
                  Số điện thoại
                </label>
                <input
                  required
                  type="tel"
                  id="phone"
                  placeholder="Nhập số điện thoại của bạn"
                  className="w-full bg-transparent border-2 border-white/20 rounded-xl p-4 focus:border-gold outline-none transition-all text-white font-bold placeholder:text-gray-400"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#000080] hover:bg-[#000066] text-[#FFD700] font-black text-xl md:text-2xl py-6 px-12 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-900/40 uppercase tracking-tight"
              >
                KẾT NỐI CÙNG CHUYÊN VIÊN PHÂN TÍCH
              </button>
              <p className="text-sm text-white font-medium italic flex items-center gap-1">
                🔒 Tôi cam kết bảo mật thông tin và chỉ tư vấn giá trị thực
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Success Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#141414] border border-gold/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(197,160,89,0.2)] overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
              
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} className="text-gold" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-gold uppercase tracking-tight">
                    Xác nhận thành công
                  </h3>
                  <div className="h-1 w-20 bg-gold mx-auto rounded-full" />
                </div>

                <p className="text-xl text-white font-medium leading-relaxed">
                  Yêu cầu khách hàng chờ sau <span className="text-gold font-bold">24h</span> sẽ liên hệ lại
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gold text-dark font-bold py-3 px-8 rounded-full hover:bg-white transition-all transform hover:scale-105"
                >
                  Đã hiểu
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
