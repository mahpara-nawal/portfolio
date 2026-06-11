"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const ids = links.map((l) => l.href.slice(1)).reverse();
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= window.scrollY + 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: scrolled ? "rgba(18,18,18,0.6)" : "rgba(18,18,18,0)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        transition: "background 0.5s ease, backdrop-filter 0.5s ease",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
          style={{ fontFamily: "'Chakra Petch', sans-serif", letterSpacing: "0.02em" }}
        >
          MN
        </button>
        <div className="flex items-center gap-4 sm:gap-10">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className={`text-xs tracking-[0.15em] uppercase transition-all duration-200 font-medium ${
                active === link.href.slice(1)
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-300"
              }`}
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}