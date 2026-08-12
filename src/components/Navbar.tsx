import { Search, ShoppingCart, User } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="absolute top-5 position-fixed left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-2xl border border-purple-300/20 bg-white/10 px-5 py-3 shadow-[0_8px_30px_rgba(176,38,255,0.15)] backdrop-blur-xl">

        <a
          href="#"
          className="flex items-center gap-3 text-xl font-bold tracking-wide text-white"
        >
          <img
            src="/Logo.JPG"
            alt="Dee's Cozy Hooks"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="font-serif text-lg ">
            Dee's <span className="text-[#B026FF]">Cozy Hooks</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
            <input type="text" placeholder="Search..." className="bg-transparent text-white placeholder:text-white/50 focus:outline-none border border-black rounded-3xl py-2 px-8" />
        </div>

           <div className="flex items-center gap-4">
          <button
            className="text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Search"
          >
            <Search size={21} strokeWidth={2} />
          </button>

          <button
            className="relative text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={21} strokeWidth={2} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#B026FF] text-[10px] font-bold text-white">
              0
            </span>
          </button>

          <button
            className="text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Profile"
          >
            <User size={21} strokeWidth={2} />
          </button>

          <a
            href="#shop"
            className="hidden rounded-xl bg-[#B026FF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(176,38,255,0.45)] transition duration-300 hover:scale-105 hover:bg-[#A020E8] hover:shadow-[0_0_30px_rgba(176,38,255,0.65)] lg:block"
          >
            Shop Now
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;