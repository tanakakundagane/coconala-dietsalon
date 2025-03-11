import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-serif text-gray-400 mb-2">Contact</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            お問い合わせ
          </h2>
          <div className="w-20 h-0.5 bg-pink-300 mx-auto"></div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
} 