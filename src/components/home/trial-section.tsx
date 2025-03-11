"use client";

import { motion } from "framer-motion";
import Link from "next/link";
interface TrialCardProps {
  title: string;
  subtitle: string;
  duration: string;
  originalPrice: string;
  price: string;
  description: string[];
  isPopular?: boolean;
}

function TrialCard({
  title,
  subtitle,
  duration,
  originalPrice,
  price,
  description,
  isPopular,
}: TrialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-pink-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {isPopular && (
        <div className="mb-4">
          <span className="inline-block bg-amber-50 text-amber-700 rounded-full px-4 py-1 text-sm border border-amber-200">
            <span className="font-serif">No.1</span> 人気
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-lg text-gray-600 mb-4">{subtitle}</p>
      <div className="flex items-baseline mb-6">
        <span className="text-sm text-gray-400 line-through mr-2">
          {originalPrice}
        </span>
        <span className="text-3xl font-bold text-gray-800">{price}</span>
        <span className="text-sm text-gray-600 ml-1">(税込)</span>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-pink-50 text-gray-700 rounded-full px-4 py-1 text-sm border border-pink-100">
          {duration}
        </span>
      </div>
      <div className="space-y-2 text-gray-600">
        {description.map((line, index) => (
          <p key={index} className="text-sm leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export function TrialSection() {
  const trials = [
    {
      title: "全身痩身コース",
      subtitle: "本気で痩せたい方の",
      duration: "90分",
      originalPrice: "¥31,900",
      price: "¥8,800",
      description: [
        "ビープロデュースの基本痩身4ステップを1回で体験！",
        "結果出し重視のマシン×ハンドの最強コラボで自分史上最高BODYへ。",
        "本気で痩せたい方はまずこちらのメニューから！",
      ],
      isPopular: true,
    },
    {
      title: "贅沢トリートメント",
      subtitle: "全身オールハンドの",
      duration: "60分",
      originalPrice: "¥16,500",
      price: "¥7,700",
      description: [
        "力強いオールハンドテクニックが痛気持ちいい！とリピート率の高いメニューです。",
        "メリハリのあるボディラインを目指したい方や、心身ともにリフレッシュしたい方にもおすすめ。",
        "大幅な減量ではなく、健康的なカラダを維持したい方はこちら！",
      ],
    },
  ];

  return (
    <section id="trial" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif text-gray-400 mb-2">Trial</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            初回トライアル
          </h3>
          <div className="w-20 h-0.5 bg-pink-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trials.map((trial, index) => (
            <TrialCard key={index} {...trial} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/contact">
            <button className="bg-pink-100 hover:bg-pink-200 text-gray-800 px-8 py-3 rounded-full transition-colors duration-300 shadow-md font-bold cursor-pointer">
              ご予約・お問い合わせ
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
