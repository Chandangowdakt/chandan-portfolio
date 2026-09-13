"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      if (window.scrollY < 100) {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (href: string) => {
    const isActive = activeSection === href.slice(1);
    return `flex flex-col items-center text-sm transition-colors ${
      isActive ? "text-[#2dd4bf]" : "text-[#94a3b8] hover:text-[#2dd4bf]"
    }`;
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a0f1c]/90 backdrop-blur-md ${
          scrolled ? "border-b border-[#1e293b]" : ""
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-bold text-[#2dd4bf]"
          >
            CKT
          </a>

          <LayoutGroup>
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`${linkClass(link.href)} rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2dd4bf]`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="navIndicator"
                          className="mx-auto mt-1.5 h-1 w-1 will-change-transform rounded-full bg-[#2dd4bf]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </LayoutGroup>

          <button
            type="button"
            className="relative z-[51] text-[#94a3b8] transition-colors hover:text-[#2dd4bf] md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[45] flex flex-col items-center justify-center gap-8 bg-[#0a0f1c]/95 backdrop-blur-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-lg transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-[#2dd4bf]"
                    : "text-[#94a3b8] hover:text-[#2dd4bf]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
