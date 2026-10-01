import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ctaBanner } from "@/data";

export function CtaBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-blue">
      <div aria-hidden className="absolute inset-0 bg-grid-pattern" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 animate-float-slow"
      >
        <div className="relative -translate-y-1/2">
          <Image
            src="/assets/3d-ornament.png"
            alt=""
            width={1440}
            height={804}
            className="mx-auto h-auto w-[900px] max-w-none sm:w-[1200px] lg:w-[1440px]"
            priority={false}
          />
        </div>
      </div>

      <Container>
        <div className="relative flex flex-col items-center py-20 text-center sm:py-24">
          <h2 className="max-w-3xl text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[42px]">
            {ctaBanner.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-[1.7] text-white/80 sm:text-base">
            {ctaBanner.description}
          </p>

          <Link
            href={ctaBanner.buttonHref}
            className="mt-10 inline-flex h-14 cursor-pointer items-center justify-center rounded-full bg-accent-lime px-9 text-sm font-semibold text-dark-heading transition-colors duration-200 hover:bg-accent-lime-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
          >
            {ctaBanner.buttonLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
