import Image from "next/image";
import { partners } from "@/data";

const REPEATS = 2;

export function PartnerLogos() {
  const track = Array.from(
    { length: partners.length * REPEATS * 2 },
    (_, index) => ({
      partner: partners[index % partners.length],
      index,
    })
  );

  return (
    <section className="relative w-full overflow-hidden border-y border-border-subtle bg-surface-gray">
      <div className="flex items-center py-14 sm:py-16">
        <div className="marquee-track flex w-max items-center gap-x-12 pr-12">
          {track.map(({ partner, index }) => (
            <div
              key={index}
              className="flex items-center gap-2.5 opacity-55 transition-all duration-300 hover:scale-105 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="text-sm font-semibold whitespace-nowrap text-muted-body transition-colors duration-300 hover:text-dark-heading">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-surface-gray to-transparent sm:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-surface-gray to-transparent sm:w-36" />
    </section>
  );
}
