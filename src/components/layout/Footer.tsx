import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/layout/Container";
import { footerBottom, footerColumns, footerNewsletter } from "@/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-white">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
          <div className="flex flex-col">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <Image
                src="/assets/byteSpaceLogo.svg"
                alt="ByteSpace logo mark"
                width={30}
                height={34}
              />
              <span className="text-2xl font-bold tracking-tight text-dark-heading">
                ByteSpace
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-[1.6] text-muted-body">
              {footerNewsletter.prompt}
            </p>

            <form className="mt-7 flex w-full max-w-md items-center gap-3">
              <Input
                type="email"
                name="email"
                placeholder={footerNewsletter.placeholder}
                aria-label={footerNewsletter.placeholder}
                className="h-12 flex-1 rounded-full border-border-subtle bg-surface-gray px-5 text-sm text-dark-heading placeholder:text-muted-body focus-visible:border-primary-blue focus-visible:ring-primary-blue/30"
              />
              <button
                type="submit"
                className="h-12 shrink-0 cursor-pointer rounded-full bg-accent-lime px-6 text-sm font-semibold text-dark-heading transition-colors duration-200 hover:bg-accent-lime-hover"
              >
                {footerNewsletter.buttonLabel}
              </button>
            </form>

            <p className="mt-4 max-w-md text-xs leading-[1.6] text-muted-body">
              {footerNewsletter.disclaimer}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-base font-bold text-dark-heading">
                  {column.heading}
                </h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-body transition-colors duration-200 hover:text-primary-blue"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle py-7 sm:flex-row">
          <p className="text-xs text-muted-body">{footerBottom.copyright}</p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerBottom.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-muted-body transition-colors duration-200 hover:text-dark-heading"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}