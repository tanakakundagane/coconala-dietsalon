"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="text-center bg-gradient-to-b from-pink-50 to-white"
    >
      <h1 className="text-2xl font-bold text-gray-800 md:text-4xl py-10">
        Concept
      </h1>
      <div className="relative pb-20 px-4 overflow-hidden">
        {/* 背景のグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white" />

        {/* 背景画像 - モバイルでは非表示 */}
        <div className="hidden md:block absolute left-20 top-1/3 -translate-y-1/2 w-2/4 h-[70%]">
          <div className="relative w-full h-full">
            <Image
              src="/images/conceptsaron.jpg"
              alt="サロンのコンセプトイメージ"
              fill
              className="object-cover object-center opacity-100"
              priority
            />
            {/* 画像の上にグラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white" />
          </div>
        </div>

        {/* モバイル用の画像 */}
        <div className="md:hidden relative w-full aspect-[4/3] mb-8">
          <Image
            src="/images/conceptsaron.jpg"
            alt="サロンのコンセプトイメージ"
            fill
            className="object-cover object-center rounded-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 rounded-2xl" />
        </div>

        {/* コンテンツ */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto md:ml-150 mt-10"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-8 max-w-3xl mx-auto">
              Beauty Through Wellness
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto md:pr-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-xl text-gray-700 leading-relaxed"
              >
                私たちが目指すのは、心と体の調和の取れた美しさ。
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-xl text-gray-700 leading-relaxed"
              >
                一時的な結果ではなく、永続的な健康美をサポートします。
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base md:text-xl text-gray-700 leading-relaxed"
              >
                無理な食事制限や過度な運動ではなく、
                <br className="hidden md:inline" />
                一人ひとりに合ったプランで理想のボディへ導きます。
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base md:text-xl text-gray-700 leading-relaxed"
              >
                健康的なライフスタイルを習慣化し、
                <br className="hidden md:inline" />
                内側から輝く美しさを引き出しましょう。
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="bg-pink-100 hover:bg-pink-200 text-gray-800 px-8 py-3 rounded-full transition-colors duration-300 shadow-md font-bold cursor-pointer">
              詳しく見る
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
