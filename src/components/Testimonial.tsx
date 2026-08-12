
        import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amaka",
      review:
        "I absolutely love my crochet piece! The quality is beautiful and you can really see the care that went into making it.",
    },
    {
      name: "Sarah",
      review:
        "The whole experience was amazing. My order arrived beautifully made and it looked even better than I expected.",
    },
    {
      name: "David",
      review:
        "I bought a handmade piece as a gift and it was perfect. Beautiful work, great quality, and definitely worth it.",
    },
  ];

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B026FF]">
            Customer Love
          </p>

          <h2 className="mt-3 text-4xl font-black text-black sm:text-5xl">
            What Our Customers
            <span className="block text-[#B026FF] drop-shadow-[0_0_20px_#B026FF]">
              Say
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-bkack font-black">
            Every stitch is made with love, and nothing makes us happier than
            seeing our customers enjoy their handmade pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group rounded-3xl border border-[#B026FF]/20 bg-black from p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.2)]"
            >
              <div className="flex gap-1 text-[#B026FF]">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={17} />
                ))}
              </div>

              <p className="mt-6 text-base leading-7 text-white/70">
                "{testimonial.review}"
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B026FF]/15 text-lg font-bold text-[#B026FF]">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-white/40">
                    Verified Customer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
