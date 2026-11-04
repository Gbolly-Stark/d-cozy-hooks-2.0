import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-16 bg-white">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#B026FF]/20 bg-gradient-to-br from-[#B026FF]/10 via-white to-[#B026FF]/5 px-6 py-16 text-center shadow-[0_0_40px_rgba(176,38,255,0.12)] sm:px-10">

        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#B026FF]/20 blur-3xl"></div>

        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#B026FF]/20 blur-3xl"></div>

        <div className="relative">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] shadow-[0_0_20px_rgba(176,38,255,0.2)]">
            <Sparkles size={28} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B026FF]">
            Made Just For You
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Ready to Find Your
            <span className="block text-[#B026FF] drop-shadow-[0_0_15px_rgba(176,38,255,0.35)]">
              Perfect Piece?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover beautiful handmade crochet pieces created with care,
            creativity, and love. Find something cozy, unique, and completely
            you.
          </p>

          <button className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#B026FF] px-7 py-3.5 font-bold text-white shadow-[0_0_25px_rgba(176,38,255,0.4)] transition duration-300 hover:scale-105 hover:bg-[#A020E8] hover:shadow-[0_0_40px_rgba(176,38,255,0.55)]">
            Shop Now
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;