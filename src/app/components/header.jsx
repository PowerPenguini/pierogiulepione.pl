"use client";
import { useState, useEffect } from "react";
import {
  IconMenu,
  IconX,
  IconBook,
  IconTruck,
  IconUsers,
  IconPhone,
} from "@tabler/icons-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "O nas", icon: IconBook },
    { label: "Nasze produkty", icon: IconTruck },
    { label: "Kontakt", icon: IconPhone },
  ];

  return (
    <header
      className={`sticky top-0 bg-white z-50 w-full transition-all duration-300 ${
        scrolled ? " shadow" : "bg-white/0"
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto px-8 xl:px-0 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "md:py-4 py-4" : "md:py-12 py-4"
        }`}
      >
        <a href="#strona-glowna">
        <div
          className={`transition-all duration-300 ${
            scrolled ? "lg:h-10 h-10" : "lg:h-16 h-10"
          }`}
        >
          <img
            src="./ulepione-logo.svg"
            alt="Ulepione"
            className="w-auto h-full transition-all duration-300"
          />
        </div>
        </a>

        <nav className="hidden md:flex gap-6 lg:gap-12 font-bold text-neutral-900">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className="flex items-center gap-2 hover:text-neutral-600 transition-colors"
              >
                <IconComponent size={20} /> {item.label}
              </a>
            );
          })}
        </nav>

        <button
          className="md:hidden text-neutral-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IconX size={28} /> : <IconMenu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-78 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)} className="text-neutral-900">
            <IconX size={32} />
          </button>
        </div>

        <nav className="flex flex-col space-y-8 mt-10 pr-6 text-right">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="flex justify-end items-center gap-3 font-bold hover:text-neutral-600 text-2xl transition-colors"
              >
                {item.label}
                <IconComponent size={28} />
              </a>
            );
          })}
        </nav>
      </div>

      {menuOpen && (
        <div
          className="md:hidden z-40 fixed inset-0 bg-black opacity-20"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
