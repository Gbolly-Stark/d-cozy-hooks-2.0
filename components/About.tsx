import {
  Check,
  ArrowRight,
  ShoppingBag,
  CreditCard,
  Package,
} from "lucide-react";
import { GiYarn } from "react-icons/gi";

const About = () => {
  return (
    <section

     className="w-full bg-white px-5 py-20 sm:px-8 lg:px-16">

    
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">

      
        <div className="relative">

      
          <div className="absolute -inset-5 rounded-[2rem] bg-[#B026FF]/20 blur-3xl" />
      
          <img
            src="/Gemini_Generated_Image_stx0pestx0pestx0.png"
            alt="Dee's Cozy Hooks handmade crochet"
            className="relative h-[380px] w-full rounded-[2rem] border-4 border-[#B026FF]/50 object-cover shadow-[0_0_35px_rgba(176,38,255,0.25)] transition duration-500 hover:scale-[1.02] hover:border-[#B026FF]"
          />

          
          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[#B026FF]/30 bg-black/90 px-5 py-4 shadow-[0_0_20px_rgba(176,38,255,0.2)] backdrop-blur-md">
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

      
          <h2 className="py-5 text-center font-heading text-4xl font-bold leading-tight text-black md:text-left md:text-5xl">
            Dees Cozy
            <span className="block text-[#B026FF] drop-shadow-[0_0_20px_#B026FF]">
              Hooks
            </span>
          </h2>

      
          <p className="text-center text-base leading-8 text-gray-600 md:text-left">
            At Dees Cozy Hooks, every piece is carefully handmade with
            creativity, patience, and love. We turn simple yarn into beautiful
            pieces that bring warmth, personality, and a little magic into
            everyday life.
          </p>

        
          <div className="mt-8 space-y-4">

            
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B026FF] shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                <Check className="h-5 w-5 text-white" />
              </div>

              <p className="font-semibold text-black">
                Unique handmade crochet pieces
              </p>
            </div>

        
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B026FF] shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                <Check className="h-5 w-5 text-white" />
              </div>

              <p className="font-semibold text-black">
                Carefully selected quality materials
              </p>
            </div>

            
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B026FF] shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                <Check className="h-5 w-5 text-white" />
              </div>

              <p className="font-semibold text-black">
                Made with creativity and attention to detail
              </p>
            </div>

          
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B026FF] shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                <Check className="h-5 w-5 text-white" />
              </div>

              <p className="font-semibold text-black">
                Perfect for yourself or someone special
              </p>
            </div>
          </div>

          
          <button
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#B026FF] px-6 py-3 font-bold text-white shadow-[0_0_20px_rgba(176,38,255,0.4)] transition duration-300 hover:scale-105 hover:bg-[#A020E8] hover:shadow-[0_0_30px_rgba(176,38,255,0.6)]"
          >
            Discover Our Story

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </ button>
        </div>
      </div>


    

      <div className="mx-auto mt-28 max-w-7xl">

      
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B026FF]">
            Simple & Easy
          </p>

          <h2 className="font-heading text-4xl font-bold text-black md:text-5xl">
            How It Works
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-500">
            From choosing your favorite piece to receiving it at your
            doorstep, we make every step simple and enjoyable.
          </p>
        </div>


        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          
          <div className="group rounded-3xl border border-[#B026FF]/20 bg-black p-8 text-center text-white shadow-[0_0_20px_rgba(176,38,255,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/60 hover:shadow-[0_0_35px_rgba(176,38,255,0.25)]">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] transition duration-300 group-hover:bg-[#B026FF] group-hover:text-white">
              <ShoppingBag size={32} />
            </div>

            <h3 className="font-heading text-2xl font-bold">
              Choose Your Piece
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Browse our collection and find something you love.
            </p>
          </div>


          
          <div className="group rounded-3xl border border-[#B026FF]/20 bg-black p-8 text-center text-white shadow-[0_0_20px_rgba(176,38,255,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/60 hover:shadow-[0_0_35px_rgba(176,38,255,0.25)]">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] transition duration-300 group-hover:bg-[#B026FF] group-hover:text-white">
              <CreditCard size={32} />
            </div>

            <h3 className="font-heading text-2xl font-bold">
              Secure Payment
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Complete your order using your preferred payment method.
            </p>
          </div>


      
          <div className="group rounded-3xl border border-[#B026FF]/20 bg-black p-8 text-center text-white shadow-[0_0_20px_rgba(176,38,255,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/60 hover:shadow-[0_0_35px_rgba(176,38,255,0.25)]">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] transition duration-300 group-hover:bg-[#B026FF] group-hover:text-white">

              <GiYarn
                size={40}
                className="transition-colors duration-300 group-hover:text-white"
              />

            </div>

            <h3 className="font-heading text-2xl font-bold">
              We Craft Your Order
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Once payment is confirmed, your handmade piece is carefully
              prepared with love.
            </p>
          </div>


          
          <div className="group rounded-3xl border border-[#B026FF]/20 bg-black p-8 text-center text-white shadow-[0_0_20px_rgba(176,38,255,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#B026FF]/60 hover:shadow-[0_0_35px_rgba(176,38,255,0.25)]">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B026FF]/10 text-[#B026FF] transition duration-300 group-hover:bg-[#B026FF] group-hover:text-white">
              <Package size={32} />
            </div>

            <h3 className="font-heading text-2xl font-bold">
              Delivery
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Sit back and enjoy as your favorite piece makes its way to you.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;