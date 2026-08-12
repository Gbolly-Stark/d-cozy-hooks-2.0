import { Check, ArrowRight, ShoppingBag, CreditCard, Package, } from "lucide-react";
import { GiYarn } from "react-icons/gi";
const About = () => {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">

        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-[#B026FF]/20 blur-3xl"></div>

          <img
            src="/Gemini_Generated_Image_stx0pestx0pestx0.png"
            alt="Dee's Cozy Hooks"
            className="relative h-[380px] w-full rounded-[2rem] border-4 border-[#B026FF]/50 object-cover shadow-[0_0_35px_rgba(176,38,255,0.25)] transition duration-500 hover:scale-[1.02] hover:border-[#B026FF]"
          />

          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[#B026FF]/30 bg-black/80 px-5 py-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Handmade
            </p>
            <p className="font-bold text-[#B026FF]">
              With Love 
            </p>
          </div>
        </div>

        <div>
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-[#B026FF] md:text-left">
            About Us
          </p>

          <h2 className="py-5 text-center font-serif text-4xl font-black leading-tight text-black md:text-left">
            Dee's Cozy
            <span className="block text-[#B026FF] drop-shadow-[0_0_20px_#B026FF]">
              Hooks
            </span>
          </h2>

          <p className="text-center text-base leading-8 text-black md:text-left">
            At Dee's Cozy Hooks, every piece is carefully handmade with
            creativity, patience, and love. We turn simple yarn into beautiful
            pieces that bring warmth, personality, and a little magic into
            everyday life.
          </p>

          <div className="mt-8 font-black space-y-4">
            <div className="flex font font-black items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B026FF] shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-black">
                Unique handmade crochet pieces
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B026FF] shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-black">
                Carefully selected quality materials
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B026FF] shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-black">
                Made with creativity and attention to detail
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B026FF] shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-black">
                Perfect for yourself or someone special
              </p>
            </div>
          </div>

          <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#B026FF] px-6 py-3 font-bold text-white shadow-[0_0_20px_rgba(176,38,255,0.4)] transition duration-300 hover:scale-105 hover:bg-[#A020E8] hover:shadow-[0_0_30px_rgba(176,38,255,0.6)]">
            Discover Our Story
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
       

      </div>
       <div className="py-10 text-4xl">
          <h1 className="text-center font-serif  font-bold py-6 text-4xl">How It Works</h1> 
        </div>
      <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">

  <div className="group rounded-3xl border border-[#B026FF]/20 bg-black p-8 text-center text-white shadow-[0_0_20px_rgba(176,38,255,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.25)]">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] transition duration-300 group-hover:bg-[#B026FF] group-hover:text-white">
      <ShoppingBag size={32} />
    </div>

    <h2 className="font-serif text-2xl font-bold">
      Choose Your Piece
    </h2>

    <p className="mt-3 text-sm leading-6 text-white/60">
      Browse our collection and find something you love.
    </p>
  </div>

 
   <div className="group rounded-3xl border border-[#B026FF]/20 bg-black p-8 text-center text-white shadow-[0_0_20px_rgba(176,38,255,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.25)]">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] transition duration-300 group-hover:bg-[#B026FF] group-hover:text-white">
      <CreditCard size={32} />
    </div>

    <h2 className="font-serif text-2xl font-bold">
      Pay For Your Orders
    </h2>

    <p className="mt-3 text-sm leading-6 text-white/60">
      Pay for your items or order you choose 
    </p>
  </div>
   <div className="group rounded-3xl border border-[#B026FF]/20 bg-black p-8 text-center text-white shadow-[0_0_20px_rgba(176,38,255,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.25)]">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] transition duration-300 group-hover:bg-[#B026FF] group-hover:text-white">
      <GiYarn
  size={40}
  className="text-[#B026FF]"
 />
    </div>

    <h2 className="font-serif text-2xl font-bold">
      Craft Your Order 
    </h2>

    <p className="mt-3 text-sm leading-6 text-white/60">
    Once Payment is Confirmed Your handmade pieces are carefully prepared with love.
    </p>
  </div>
   <div className="group rounded-3xl border border-[#B026FF]/20 bg-black p-8 text-center text-white shadow-[0_0_20px_rgba(176,38,255,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.25)]">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] transition duration-300 group-hover:bg-[#B026FF] group-hover:text-white">
      <Package size={32} />
    </div>

    <h2 className="font-serif text-2xl font-bold">
      Delivery in Process
    </h2>

    <p className="mt-3 text-sm leading-6 text-white/60">
      Expect your Favourite piece delivered in good condition
    </p>
  </div>


      </div>
    </section>
  );
};

export default About;