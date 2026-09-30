import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen flex-col overflow-hidden bg-primary-blue">
            <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-0" />
            <Navbar />

            <section className="relative flex min-h-screen flex-1 items-center justify-center px-4 pb-16 pt-28 text-center sm:px-8 sm:pt-32">
                <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-[45%] select-none">
                    <span className="bg-linear-to-b from-accent-lime via-accent-lime to-white/35 bg-clip-text text-[9rem] font-extrabold leading-none text-transparent sm:text-[14rem] md:text-[20rem] lg:text-[22rem]">
                        404
                    </span>
                </div>

                <div className="relative z-10 flex max-w-3xl translate-y-0 flex-col items-center lg:translate-y-[135px]">
                    <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[56px]">
                        The page you are looking
                        <br className="hidden sm:block" /> doesn&apos;t exist
                    </h1>
                    <p className="mt-8 max-w-xl text-sm leading-6 text-white/75">
                        Try to use a correct url or go back to homepage to start again
                    </p>
                    <Link
                        href="/"
                        className="mt-7 inline-flex h-9 items-center justify-center rounded-full bg-accent-lime px-5 text-xs font-semibold text-dark-heading transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-lime-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
