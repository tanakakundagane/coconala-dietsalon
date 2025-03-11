"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MenuCardProps {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  isReversed?: boolean;
}

function MenuCard({
  title,
  subtitle,
  description,
  imagePath,
  isReversed,
}: MenuCardProps) {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 mb-20`}
    >
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 relative aspect-[4/3]"
      >
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover rounded-2xl shadow-lg"
          priority
        />
        <div
          className={`absolute inset-0 rounded-2xl ${
            isReversed
              ? "bg-gradient-to-l from-transparent via-white/40 to-white/80"
              : "bg-gradient-to-r from-transparent via-white/40 to-white/80"
          }`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 px-4 md:px-8"
      >
        <span className="text-pink-400 font-serif tracking-wider">
          {subtitle}
        </span>
        <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <button className="mt-8 bg-white hover:bg-pink-50 text-gray-800 px-8 py-3 rounded-full transition-colors duration-300 shadow-md font-bold border border-pink-100 cursor-pointer">
          メニューを見る
        </button>
      </motion.div>
    </div>
  );
}

export function MenuSection() {
  const menus = [
    {
      title: "Body Treatment",
      subtitle: "ボディトリートメント",
      description:
        "独自の施術メソッドと最新マシンを組み合わせた、結果重視のボディトリートメント。むくみの解消から、セルライト除去、ボディラインの引き締めまで。あなたの理想のボディラインへ導きます。",
      imagePath: "/images/body.jpg",
    },
    {
      title: "Facial Treatment",
      subtitle: "フェイシャルトリートメント",
      description:
        "お肌の状態に合わせたオーダーメイドのフェイシャルケア。深層部からの潤い補給と、リフトアップ効果で、明るく透明感のある素肌へ。エイジングケアにも効果的なトリートメントをご提供します。",
      imagePath: "/images/face.jpg",
    },
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif text-gray-400 mb-2">Menu</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            トリートメントメニュー
          </h3>
          <div className="w-20 h-0.5 bg-pink-300 mx-auto"></div>
        </div>

        <div className="space-y-20">
          {menus.map((menu, index) => (
            <MenuCard key={index} {...menu} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
