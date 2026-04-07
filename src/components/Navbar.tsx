import { Wrench, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const navLink = (to: string, label: string) => (
    <Link
      className={`font-headline uppercase tracking-widest text-sm font-bold ${path === to ? 'text-black dark:text-white border-b-2 border-black dark:border-white pb-1' : 'text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors'}`}
      to={to}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-stone-50 dark:bg-stone-950 flex justify-between items-center w-full px-12 py-7 max-w-full border-0 sticky top-0 z-50">
      <Link to="/" className="text-3xl font-extrabold tracking-tighter text-black dark:text-white uppercase brand-font">
        <div className="flex items-center gap-3">
          <Wrench className="w-9 h-9" strokeWidth={1.5} />
          <span className="tracking-tight">Business Name</span>
        </div>
      </Link>
      <div className="hidden md:flex gap-10 items-center">
        {navLink("/", "Home")}
        {navLink("/gallery", "Gallery")}

        {/* Services Dropdown */}
        <div className="relative group py-4">
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1" href="/#services">
            Services <ChevronDown className="w-4 h-4" />
          </a>
          <div className="absolute top-full left-0 mt-0 w-52 bg-white dark:bg-stone-950 border border-black dark:border-stone-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col shadow-xl">
            <a href="/#services" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Residential</a>
            <a href="/#services" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Commercial</a>
            <a href="/#services" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors">Emergency</a>
          </div>
        </div>

        {/* Service Areas Dropdown */}
        <div className="relative group py-4">
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1" href="/#service-areas">
            Service Areas <ChevronDown className="w-4 h-4" />
          </a>
          <div className="absolute top-full left-0 mt-0 w-52 bg-white dark:bg-stone-950 border border-black dark:border-stone-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col shadow-xl">
            <a href="/#service-areas" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Downtown</a>
            <a href="/#service-areas" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Northside</a>
            <a href="/#service-areas" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Southside</a>
            <a href="/#service-areas" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors">West End</a>
          </div>
        </div>

        {/* More Dropdown */}
        <div className="relative group py-4">
          <a className="font-headline uppercase tracking-widest text-sm font-bold text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1" href="#">
            More <ChevronDown className="w-4 h-4" />
          </a>
          <div className="absolute top-full left-0 mt-0 w-52 bg-white dark:bg-stone-950 border border-black dark:border-stone-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col shadow-xl">
            <Link to="/about" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">About Us</Link>
            <Link to="/contact" className="px-5 py-3.5 font-headline text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      <a href="tel:000-000-0000" className="btn-press bg-primary text-on-primary px-8 py-4 font-headline font-extrabold text-sm uppercase tracking-[0.15em] hover:bg-primary-fixed transition-all rounded-full border-2 border-white">
        000-000-0000
      </a>
    </nav>
  );
}
