import { Wrench, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="bg-stone-50 dark:bg-stone-950 flex justify-between items-center w-full px-10 py-6 max-w-full border-0 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-black tracking-tighter text-black dark:text-white uppercase brand-font">
        <div className="flex items-center gap-3">
          <Wrench className="w-8 h-8 font-light" strokeWidth={1.5} />
          <span className="tracking-tighter">Business Name</span>
        </div>
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link className={`font-headline uppercase tracking-widest text-xs font-bold ${isHome ? 'text-black dark:text-white border-b-2 border-black dark:border-white pb-1' : 'text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors'}`} to="/">Home</Link>
        <Link className={`font-headline uppercase tracking-widest text-xs font-bold ${!isHome ? 'text-black dark:text-white border-b-2 border-black dark:border-white pb-1' : 'text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors'}`} to="/gallery">Gallery</Link>
        
        {/* Services Dropdown */}
        <div className="relative group py-4">
          <a className="font-headline uppercase tracking-widest text-xs font-bold text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1" href="/#services">
            Services <ChevronDown className="w-3 h-3" />
          </a>
          <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-stone-950 border border-black dark:border-stone-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col shadow-xl">
            <a href="/#services" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Residential</a>
            <a href="/#services" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Commercial</a>
            <a href="/#services" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors">Emergency</a>
          </div>
        </div>

        {/* Service Areas Dropdown */}
        <div className="relative group py-4">
          <a className="font-headline uppercase tracking-widest text-xs font-bold text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1" href="/#service-areas">
            Service Areas <ChevronDown className="w-3 h-3" />
          </a>
          <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-stone-950 border border-black dark:border-stone-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col shadow-xl">
            <a href="/#service-areas" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Downtown</a>
            <a href="/#service-areas" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Northside</a>
            <a href="/#service-areas" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">Southside</a>
            <a href="/#service-areas" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors">West End</a>
          </div>
        </div>

        {/* More Dropdown */}
        <div className="relative group py-4">
          <a className="font-headline uppercase tracking-widest text-xs font-bold text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1" href="#">
            More <ChevronDown className="w-3 h-3" />
          </a>
          <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-stone-950 border border-black dark:border-stone-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col shadow-xl">
            <a href="/#about" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 border-b border-stone-100 dark:border-stone-800 transition-colors">About Us</a>
            <a href="/#contact" className="px-4 py-3 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
      <a href="tel:000-000-0000" className="bg-primary text-on-primary px-6 py-3 font-headline font-black text-xs uppercase tracking-[0.2em] hover:bg-primary-fixed active:scale-95 transition-all">
        000-000-0000
      </a>
    </nav>
  );
}
