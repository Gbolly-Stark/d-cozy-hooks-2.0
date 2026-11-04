import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
} from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#B026FF]/10 bg-white">

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-1">

            <a
              href="#home"
              className="flex items-center gap-3 text-2xl font-black tracking-tight text-gray-900"
            >
              <img
                src="/logo.jpeg"
                alt="Dee's Cozy Hooks"
                className="h-12 w-12 rounded-full object-cover"
              />

              <span>
                Dees
                <span className="text-[#B026FF]"> Cozy Hooks</span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
              Beautiful handmade crochet pieces crafted with creativity,
              patience, and love. Made to bring warmth and personality into
              your everyday life.
            </p>

            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B026FF]/10 text-[#B026FF] transition hover:bg-[#B026FF] hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B026FF]/10 text-[#B026FF] transition hover:bg-[#B026FF] hover:text-white"
              >
                <FaTiktok size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B026FF]/10 text-[#B026FF] transition hover:bg-[#B026FF] hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B026FF]/10 text-[#B026FF] transition hover:bg-[#B026FF] hover:text-white"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900">
              Shop
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-500">

              <li>
                <a
                  href="#shop"
                  className="transition hover:text-[#B026FF]"
                >
                  All Products
                </a>
              </li>

              <li>
                <a
                  href="#categories"
                  className="transition hover:text-[#B026FF]"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#shop"
                  className="transition hover:text-[#B026FF]"
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="#shop"
                  className="transition hover:text-[#B026FF]"
                >
                  Best Sellers
                </a>
              </li>

              <li>
                <a
                  href="#shop"
                  className="flex items-center gap-1 transition hover:text-[#B026FF]"
                >
                  Shop Now
                  <ArrowUpRight size={14} />
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900">
              Help
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-500">

              <li>
                <a
                  href="#about"
                  className="transition hover:text-[#B026FF]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-[#B026FF]"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#B026FF]"
                >
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#B026FF]"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#B026FF]"
                >
                  FAQs
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900">
              Contact
            </h3>

            <div className="mt-5 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#B026FF]"
                />

                <p className="text-sm leading-6 text-gray-500">
                  Lagos, Nigeria
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={19}
                  className="shrink-0 text-[#B026FF]"
                />

                <p className="text-sm text-gray-500">
                  +234 7079944180
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={19}
                  className="shrink-0 text-[#B026FF]"
                />

                <p className="break-all text-sm text-gray-500">
                  derinsolaomojokun13@gmail.com
                </p>
              </div>

            </div>
          </div>

        </div>

        <div className="my-12 h-px bg-gray-200"></div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <p className="text-sm font-bold text-gray-900">
              We Accept
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Secure and convenient payment options
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">

              <div className="flex h-9 min-w-[55px] items-center justify-center rounded-md border border-gray-200 bg-white px-2 shadow-sm">
                <FaCcVisa
                  size={32}
                  className="text-[#1434CB]"
                />
              </div>

              <div className="flex h-9 min-w-[55px] items-center justify-center rounded-md border border-gray-200 bg-white px-2 shadow-sm">
                <FaCcMastercard
                  size={32}
                  className="text-[#EB001B]"
                />
              </div>

              <div className="flex h-9 min-w-[55px] items-center justify-center rounded-md border border-gray-200 bg-white px-2 shadow-sm">
                <FaCcAmex
                  size={32}
                  className="text-[#2E77BC]"
                />
              </div>

              <div className="flex h-9 min-w-[55px] items-center justify-center rounded-md border border-gray-200 bg-white px-2 shadow-sm">
                <FaCcPaypal
                  size={32}
                  className="text-[#003087]"
                />
              </div>

              <div className="flex h-9 min-w-[55px] items-center justify-center rounded-md border border-gray-200 bg-white px-2 shadow-sm">
                <SiCashapp
                  size={28}
                  className="text-[#00A859]"
                />
              </div>

            </div>
          </div>

          <div className="text-left lg:text-right">

            <p className="text-sm font-bold text-gray-900">
              Secure Checkout
            </p>

            <p className="mt-1 max-w-sm text-xs leading-5 text-gray-400 lg:ml-auto">
              Your payment information is protected with secure payment
              processing.
            </p>

          </div>

        </div>

        <div className="my-10 h-px bg-gray-200"></div>

        <div className="flex flex-col gap-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dees Cozy Hooks. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="#"
              className="transition hover:text-[#B026FF]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-[#B026FF]"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;