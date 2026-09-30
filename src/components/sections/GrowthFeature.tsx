import Image from "next/image";
import { StatCounter } from "@/components/ui/StatCounter";
import { growthFeature } from "@/data";

export function GrowthFeature() {
  return (
    <section className="bg-feature-wash w-full pt-20 pb-6 sm:pt-28 sm:pb-8">
      <div className="mx-auto w-full max-w-[1322px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-[63px] lg:grid-cols-[574px_621px] lg:justify-center">
          <div className="flex flex-col gap-10 lg:self-center">
            <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-dark-heading sm:text-4xl lg:text-[42px]">
              {growthFeature.headline}
            </h2>
            <p className="text-sm leading-[1.7] text-muted-body sm:text-base">
              {growthFeature.paragraph}
            </p>

            <div className="grid grid-cols-3 gap-10">
              {growthFeature.stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:h-[552px]">
            <Image
              src={growthFeature.image}
              alt={growthFeature.imageAlt}
              width={703}
              height={697}
              className="h-auto w-full max-w-[621px] object-contain lg:max-h-full"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
