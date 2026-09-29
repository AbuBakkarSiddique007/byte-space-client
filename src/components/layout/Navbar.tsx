import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { navLinks } from "@/data";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <nav className="flex items-center justify-between h-24 sm:h-28" aria-label="Main navigation">

          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/assets/byteSpaceLogo.svg"
              alt="ByteSpace logo mark"
              width={30}
              height={34}
              priority
            />
            <span className="text-2xl font-bold tracking-tight text-white">
              ByteSpace
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    i === 0
                      ? "text-base font-medium text-white transition-colors"
                      : "text-base font-normal text-white/80 hover:text-white transition-colors duration-200"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-7">
            <Link
              href="#"
              className="hidden sm:inline-flex items-center text-white text-base font-medium hover:text-white/80 transition-colors duration-200"
            >
              Sign In
            </Link>

            <Link
              href="#"
              className="hidden sm:inline-flex items-center text-white text-base font-medium hover:text-white/80 transition-colors duration-200"
            >
              Join Us
            </Link>

            <button
              aria-label="Shopping cart"
              className="p-1.5 text-white hover:text-white/80 transition-colors duration-200 cursor-pointer"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>

        </nav>
      </div>
    </header>
  );
}
