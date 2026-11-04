
"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navlinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-50 w-full border-white/30 bg-white/10"
    >
      <div className="flex items-center justify-between border border-purple-300/20 bg-white/10 px-5 py-3 shadow-[0_8px_30px_rgba(176,38,255,0.15)] backdrop-blur-xl">

        
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold tracking-wide text-white"
        >
          <img
            src="/logo.jpeg"
            alt="Dees Cozy Hooks"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="font-serif text-lg">
            Dees{" "}
            <span className="text-[#B026FF]">
              Cozy Hooks
            </span>
          </span>
        </Link>

        
        <div className="hidden items-center gap-10 md:flex">
          {navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white transition font-semibold hover:scale-110 hover:text-[#B026FF] "
            >
              {link.label}
            </Link>
          ))}
        </div>

        
        <div className="flex items-center gap-6">

      
          <Link
            href="/products"
            className="text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Search"
          >
            <Search size={21} strokeWidth={2} />
          </Link>

    
          <Link
            href="/cart"
            className="relative text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={21} strokeWidth={2} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#B026FF] text-[10px] font-bold text-white">
              0
            </span>
          </Link>

          
          <Link
            href="/user"
            className="text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Profile"
          >
            <User size={21} strokeWidth={2} />
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

