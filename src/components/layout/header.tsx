"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItemProps {
  label: string;
  href: string;
  onClick?: () => void;
}

function NavItem({ label, href, onClick }: NavItemProps) {
  const pathname = usePathname();
  const isContact = href.startsWith("/contact");
  const isHomePage = pathname === "/";

  if (isContact) {
    return (
      <Link href={href}>
        <button className="bg-pink-100 hover:bg-pink-200 text-gray-800 px-6 py-2 rounded-full transition-colors duration-300 shadow-sm font-medium cursor-pointer">
          {label}
        </button>
      </Link>
    );
  }

  if (!isHomePage && href.startsWith("#")) {
    return (
      <Link
        href={`/${href}`}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/${href}`;
        }}
        className="text-gray-600 hover:text-gray-800 transition-colors duration-200 px-4 cursor-pointer"
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="text-gray-600 hover:text-gray-800 transition-colors duration-200 px-4 cursor-pointer"
    >
      {label}
    </button>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  menuItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  menuItems: NavItemProps[];
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* オーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* スライドインメニュー */}
          <motion.div
            initial={{ x: "90%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6"
          >
            <div className="flex justify-end mb-8">
              <button onClick={onClose} className="p-2 text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick && isHomePage) {
                      e.preventDefault();
                      item.onClick();
                    }
                    onClose();
                  }}
                  className="text-gray-600 hover:text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems: NavItemProps[] = [
    {
      label: "Concept",
      href: "#concept",
      onClick: () => isHomePage && scrollToSection("concept"),
    },
    {
      label: "Trial",
      href: "#trial",
      onClick: () => isHomePage && scrollToSection("trial"),
    },
    {
      label: "Menu",
      href: "#menu",
      onClick: () => isHomePage && scrollToSection("menu"),
    },
    {
      label: "Information",
      href: "#information",
      onClick: () => isHomePage && scrollToSection("information"),
    },
    { label: "お問い合わせ", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="text-xl font-serif text-gray-800">
            Salon Name
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-gray-600 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* モバイルメニュー */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={navItems}
      />
    </>
  );
}
