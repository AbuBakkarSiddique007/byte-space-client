import Image from "next/image";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-[1024px] bg-[#003BE2] overflow-hidden flex flex-col items-center select-none">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      <div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[1440px] h-[804px] pointer-events-none z-10 animate-float-slow">
        <Image
          src="/assets/3d-ornament.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-20 flex flex-col items-center w-full max-w-[1440px] px-6 pt-[184px]">
        <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold text-white text-center leading-[1.08] tracking-tight">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-8 text-white/80 text-sm sm:text-base text-center max-w-3xl font-normal tracking-normal">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mt-14 flex items-center justify-center gap-3.5 w-full max-w-[560px] mx-auto">
          <div className="flex items-center gap-3 bg-white rounded-full px-6 h-[46px] sm:h-[48px] flex-1 shadow-md">
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

      <div className="absolute top-[586px] left-1/2 -translate-x-1/2 w-[1116px] h-[1116px] rounded-full bg-accent-lime pointer-events-none z-0" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[722px] h-[515px] pointer-events-none z-10">
        <Image
          src="/assets/hero-student.png"
          alt="Student with headphones and laptop"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      <div className="absolute left-[calc(50%-316px)] top-[639px] z-20 animate-float-medium">
        <div className="bg-white rounded-2xl px-5 py-4 shadow-xl border border-white/60">
          <p className="text-base font-bold text-dark-heading leading-tight">UI/UX Design</p>
          <p className="text-xs text-muted-body mt-1 font-normal whitespace-nowrap">
            200 Courses &bull; 1000+ Students
          </p>
        </div>
      </div>

      <div className="absolute left-[calc(50%+122px)] top-[651px] z-20 animate-float-slow">
        <div className="bg-white rounded-2xl p-5 shadow-xl min-w-[220px] border border-white/60">
          <p className="text-xs font-semibold text-muted-body">Learning Progress</p>
          <p className="text-4xl font-extrabold text-dark-heading mt-1 leading-none tracking-tight">55%</p>
          <div className="w-full h-2 bg-surface-gray rounded-full mt-3 overflow-hidden">
            <div className="bg-accent-lime h-full w-[55%] rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute left-[calc(50%-440px)] top-[815px] z-20 animate-float-fast">
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-white/60">
          <Image
            src="/assets/badge-happy-students.png"
            alt="Happy Students"
            width={230}
            height={108}
            className="w-[220px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
