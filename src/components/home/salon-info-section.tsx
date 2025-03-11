"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface InfoItemProps {
  title: string;
  content: string | string[];
}

function InfoItem({ title, content }: InfoItemProps) {
  return (
    <div className="mb-6">
      <h4 className="text-gray-600 font-serif mb-2">{title}</h4>
      {Array.isArray(content) ? (
        <div className="space-y-1">
          {content.map((line, index) => (
            <p key={index} className="text-gray-800">
              {line}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-gray-800">{content}</p>
      )}
    </div>
  );
}

export function SalonInfoSection() {
  const salonInfo = [
    {
      title: "電話番号",
      content: "03-XXXX-XXXX",
    },
    {
      title: "住所",
      content: "〒XXX-XXXX 東京都渋谷区○○町X-X-X ××ビル 3F",
    },
    {
      title: "アクセス",
      content: ["渋谷駅 徒歩5分", "表参道駅 徒歩8分", "明治神宮前駅 徒歩10分"],
    },
    {
      title: "営業時間",
      content: "10:00 - 20:00（最終受付 19:00）",
    },
    {
      title: "定休日",
      content: "毎週水曜日・第2・第4火曜日",
    },
  ];

  return (
    <section
      id="information"
      className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif text-gray-400 mb-2">
            Information
          </h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">サロン情報</h3>
          <div className="w-20 h-0.5 bg-pink-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            {salonInfo.map((info, index) => (
              <InfoItem key={index} {...info} />
            ))}

            <div className="mt-8">
              <Link href="/contact">
                <button className="w-full bg-pink-100 hover:bg-pink-200 text-gray-800 px-8 py-3 rounded-full transition-colors duration-300 shadow-md font-bold cursor-pointer">
                  ご予約・お問い合わせ
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.70074937574483!3d35.65858013126756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca7c2087f63%3A0x6a0dfca6e12939c6!2z5riL6LC36aeF!5e0!3m2!1sja!2sjp!4v1709612436099!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
