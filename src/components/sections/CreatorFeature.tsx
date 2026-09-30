import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { creatorFeature } from "@/data";

export function CreatorFeature() {
  return (
    <section className="w-full bg-white pt-6 pb-20 sm:pt-8 sm:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <Image
              src={creatorFeature.image}
              alt={creatorFeature.imageAlt}
              width={587}
              height={719}
              className="h-auto w-full max-w-[520px]"
              priority={false}
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-dark-heading sm:text-4xl lg:text-[42px]">
              {creatorFeature.headline}
            </h2>
            <p className="mt-6 text-sm leading-[1.7] text-muted-body sm:text-base">
              <span className="font-bold text-dark-heading">
                {creatorFeature.highlight}
              </span>{" "}
              {creatorFeature.paragraph}
            </p>

            <ul className="mt-10 flex flex-col gap-5">
              {creatorFeature.checklist.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-blue">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-sm font-semibold text-dark-heading sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
