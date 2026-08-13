import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
  <nav className="  fixed top-0 left-0 z-50 w-full  border-white/30 bg-white/10">
      <div className="flex items-center justify-between border border-purple-300/20 bg-white/10 px-5 py-3 shadow-[0_8px_30px_rgba(176,38,255,0.15)] backdrop-blur-xl">

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
            Dee's <span className="text-[#7B2CBF]">Cozy Hooks</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-white hover:text-[#7B2CBF]">Home</a>
          <a href="#shop" className="text-white hover:text-[#7B2CBF]">Shop</a>
          <a href="#about" className="text-white hover:text-[#7B2CBF]">About</a>
          <a href="#contact" className="text-white hover:text-[#7B2CBF]">Contact</a>
        </div>

           <div className="flex items-center gap-4">
          <Link
            to="/products"
            className="text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Search"
          >
            <Search size={21} strokeWidth={2} />
          </Link>

          <Link
            to="/cart"
            className="relative text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Shopping cart"
            
          >
            <ShoppingCart size={21} strokeWidth={2} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#B026FF] text-[10px] font-bold text-white">
              0
            </span>
          </Link>

          <Link
          to="/user"
            className="text-white transition hover:scale-110 hover:text-[#B026FF]"
            aria-label="Profile"
          >
            <User size={21} strokeWidth={2} />
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;