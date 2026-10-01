"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag, X } from "lucide-react";
import { navLinks } from "@/data";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="flex h-20 items-center justify-between sm:h-28"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/assets/byteSpaceLogo.svg"
              alt="ByteSpace logo mark"
              width={29}
              height={32}
              priority
            />
            <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              ByteSpace
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    index === 0
                      ? "text-base font-medium text-white transition-colors"
                      : "text-base font-normal text-white/80 transition-colors duration-200 hover:text-white"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 sm:gap-7">
            <Link
              href="#"
              className="hidden text-base font-medium text-white transition-colors duration-200 hover:text-white/80 sm:inline-flex"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="hidden text-base font-medium text-white transition-colors duration-200 hover:text-white/80 sm:inline-flex"
            >
              Join Us
            </Link>
            <button
              type="button"
              aria-label="Shopping cart"
              className="hidden cursor-pointer p-1.5 text-white transition-colors duration-200 hover:text-white/80 sm:inline-flex"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="relative inline-flex h-8 w-8 cursor-pointer items-center justify-center text-white transition-colors duration-200 hover:text-white/80 md:hidden"
            >
              <Menu
                className={`absolute h-5 w-5 transition-all duration-200 ease-out ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
              />
              <X
                className={`absolute h-5 w-5 transition-all duration-200 ease-out ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
              />
            </button>
          </div>
        </nav>

        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
            className={`fixed inset-0 z-50 cursor-default bg-black/20 transition-opacity duration-300 ease-out md:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
          />
          <div
            id="mobile-navigation"
            aria-hidden={!isMenuOpen}
            className={`absolute inset-x-4 top-20 z-[60] flex flex-col gap-2 rounded-2xl border border-white/15 bg-primary-blue p-4 shadow-2xl transition-all duration-300 ease-out md:hidden ${isMenuOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
              }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-lg px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Join Us
            </Link>
          </div>
        </>
      </div>
    </header>
  );
}
