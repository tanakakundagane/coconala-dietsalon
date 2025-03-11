"use client";

import { motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  isTextarea?: boolean;
}

function FormField({ label, type, placeholder, required = true, isTextarea = false }: FormFieldProps) {
  const commonClasses = "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-colors duration-200";

  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-2">
        {label}
        {required && <span className="text-pink-500 ml-1">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          className={`${commonClasses} min-h-[150px] resize-none`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          className={commonClasses}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理は後で実装
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 md:p-12 rounded-2xl shadow-md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="お名前"
          type="text"
          placeholder="山田 花子"
        />
        <FormField
          label="ふりがな"
          type="text"
          placeholder="やまだ はなこ"
        />
        <FormField
          label="電話番号"
          type="tel"
          placeholder="090-1234-5678"
        />
        <FormField
          label="メールアドレス"
          type="email"
          placeholder="example@email.com"
        />
        <FormField
          label="お問い合わせ内容"
          type="text"
          placeholder="お問い合わせ内容をご記入ください"
          isTextarea
        />

        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-pink-100 hover:bg-pink-200 text-gray-800 px-12 py-3 rounded-full transition-colors duration-300 shadow-md font-bold cursor-pointer"
          >
            送信する
          </button>
        </div>
      </form>
    </motion.div>
  );
} 