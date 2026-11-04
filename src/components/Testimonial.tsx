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
    <section className="w-full bg-white px-5 py-20 sm:px-8 lg:px-16">

      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">

          {/* Small heading */}
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B026FF]">
            Customer Love
          </p>

          {/* Main heading */}
          <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-black sm:text-5xl">
            What Our Customers
            <span className="block text-[#B026FF] drop-shadow-[0_0_20px_#B026FF]">
              Say
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Every stitch is made with love, and nothing makes us happier than
            seeing our customers enjoy their handmade pieces.
          </p>

        </div>


        {/* ================= TESTIMONIAL CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-3xl border border-[#B026FF]/20 bg-black p-7 shadow-[0_0_20px_rgba(176,38,255,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B026FF]/60 hover:shadow-[0_0_35px_rgba(176,38,255,0.25)]"
            >

              {/* Purple glow */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#B026FF]/10 blur-2xl transition duration-300 group-hover:bg-[#B026FF]/20" />


              {/* Stars */}
              <div className="relative flex gap-1 text-[#B026FF]">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                ))}
              </div>


              {/* Quote */}
              <div className="relative">

                <p className="mt-6 text-4xl font-serif leading-none text-[#B026FF]/40">
                  "
                </p>

                <p className="mt-2 text-sm leading-7 text-white/70 sm:text-base">
                  {testimonial.review}
                </p>

              </div>


              {/* Customer */}
              <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">

                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B026FF]/15 text-lg font-bold text-[#B026FF] ring-1 ring-[#B026FF]/30">
                  {testimonial.name.charAt(0)}
                </div>


                {/* Name */}
                <div>
                  <h3 className="font-bold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-white/40">
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