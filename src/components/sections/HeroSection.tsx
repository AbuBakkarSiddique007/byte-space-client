import Image from "next/image";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[720px] w-full select-none flex-col items-center overflow-hidden bg-primary-blue sm:min-h-[820px] lg:h-[1024px]">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute top-[230px] left-1/2 z-10 h-[520px] w-[930px] -translate-x-1/2 animate-float-slow sm:top-[220px] sm:h-[680px] sm:w-[1220px] lg:h-[804px] lg:w-[1440px]">
        <Image
          src="/assets/3d-ornament.png"
          alt=""
          fill
          className="object-contain"
          priority
          loading="eager"
          sizes="1440px"
        />
      </div>

      <div className="relative z-20 flex w-full max-w-[1440px] flex-col items-center px-4 pt-32 sm:px-6 sm:pt-[184px]">
        <h1 className="text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[64px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-6 max-w-3xl text-center text-sm font-normal tracking-normal text-white/80 sm:mt-8 sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mx-auto mt-10 flex w-full max-w-[560px] items-center justify-center gap-2 sm:mt-14 sm:gap-3.5">
          <div className="flex h-[46px] min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 shadow-md sm:h-[48px] sm:gap-3 sm:px-6">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="bg-transparent text-gray-800 placeholder:text-gray-400 outline-none w-full text-sm font-normal"
              aria-label="Search courses"
            />
          </div>
          <button className="bg-accent-lime hover:bg-accent-lime-hover text-dark-heading font-semibold text-sm px-7 h-[46px] sm:h-[48px] rounded-full transition-colors shrink-0 shadow-md cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute top-[500px] left-1/2 z-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-accent-lime sm:top-[586px] sm:h-[950px] sm:w-[950px] lg:h-[1116px] lg:w-[1116px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[370px] w-[520px] -translate-x-1/2 sm:h-[465px] sm:w-[650px] lg:h-[515px] lg:w-[722px]">
        <Image
          src="/assets/hero-student.png"
          alt="Student with headphones and laptop"
          fill
          className="object-contain object-bottom"
          sizes="722px"
        />
      </div>

      <div className="absolute left-[calc(50%-316px)] top-[639px] z-20 hidden animate-float-medium sm:block">
        <div className="bg-white rounded-2xl px-5 py-4 shadow-xl border border-white/60">
          <p className="text-base font-bold text-dark-heading leading-tight">UI/UX Design</p>
          <p className="text-xs text-muted-body mt-1 font-normal whitespace-nowrap">
            200 Courses &bull; 1000+ Students
          </p>
        </div>
      </div>

      <div className="absolute left-[calc(50%+122px)] top-[651px] z-20 hidden animate-float-slow sm:block">
        <div className="bg-white rounded-2xl p-5 shadow-xl min-w-[220px] border border-white/60">
          <p className="text-xs font-semibold text-muted-body">Learning Progress</p>
          <p className="text-4xl font-extrabold text-dark-heading mt-1 leading-none tracking-tight">55%</p>
          <div className="w-full h-2 bg-surface-gray rounded-full mt-3 overflow-hidden">
            <div className="bg-accent-lime h-full w-[55%] rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute left-[calc(50%-440px)] top-[815px] z-20 hidden animate-float-fast sm:block">
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-white/60">
          <Image
            src="/assets/badge-happy-students.png"
            alt="Happy Students"
            width={230}
            height={108}
            className="w-[220px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
