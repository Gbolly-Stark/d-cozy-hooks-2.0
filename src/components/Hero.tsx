const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
    
      <img
        src="/hero2.png"
        alt="Woman crocheting"
        className="absolute inset-0 h-full w-full object-cover"
      />

      
      <div className="absolute inset-0 bg-purple-500/10" />

    
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-6 sm:px-10 md:w-1/2 md:px-16 lg:px-20">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B026FF]">
            Handmade With Love
          </p>

          <h1 className="text-5xl font-popins leading-tight text-white sm:text-6xl lg:text-7xl">
            Beautiful Crochet,
            <br />
            Made With{" "}
        <span className="text-[#B026FF] font-black drop-shadow-[0_0_20px_#B026FF]">
              Love.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            Discover beautiful handmade crochet pieces crafted with
            passion, creativity, and love.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="rounded-xl bg-[#B026FF] px-7 py-3 font-semibold text-white shadow-[0_0_25px_rgba(176,38,255,0.5)] transition hover:scale-105 hover:shadow-[0_0_35px_rgba(176,38,255,0.7)]"
            >
              Shop Collection
            </a>

            <a
              href="#about"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Explore More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;