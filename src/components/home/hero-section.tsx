import Image from "next/image";

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string[];
  ctaText: string;
}

function HeroContent({ title, subtitle, description, ctaText }: HeroContentProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 ">
      <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 font-bold">
        {title}
        <span className="block text-2xl md:text-3xl mt-2">{subtitle}</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 font-bold">
        {description.map((line, index) => (
          <span key={index}>
            {line}
            {index < description.length - 1 && <br />}
          </span>
        ))}
      </p>
      <button className="bg-pink-100 hover:bg-pink-200 text-gray-800 px-8 py-3 rounded-full transition-colors duration-300 shadow-md font-bold cursor-pointer">
        {ctaText}
      </button>
    </div>
  );
}

export function HeroSection() {
  const heroContent = {
    title: "Your Beauty Journey",
    subtitle: "Starts Here",
    description: [
      "美しさは、自分らしく健康的な生活から生まれます。",
      "あなたの「なりたい」を、私たちが実現へと導きます。"
    ],
    ctaText: "無料カウンセリングを予約する"
  };

  return (
    <section className="relative h-[80vh] w-full mt-20">
      <Image
        src="/images/salonahero.jpeg"
        alt="美しいダイエットサロンの内装"
        fill
        className="object-cover brightness-95"
        priority
      />
      <div className="absolute inset-0 bg-pink-50/30" />
      <HeroContent {...heroContent} />
    </section>
  );
} 