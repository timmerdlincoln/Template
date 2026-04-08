export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-black text-white px-10 py-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center w-full gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold text-white uppercase brand-font">Template</div>
        <p className="font-body text-[10px] tracking-[0.1em] font-bold uppercase text-stone-500">
          LICENSED & INSURED
        </p>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="text-[10px] text-stone-600 font-bold uppercase tracking-widest mb-1">Navigation</span>
          <a className="font-body text-[10px] tracking-[0.1em] font-bold uppercase text-stone-500 hover:text-white transition-colors hover:underline" href="#">PRIVACY POLICY</a>
          <a className="font-body text-[10px] tracking-[0.1em] font-bold uppercase text-stone-500 hover:text-white transition-colors hover:underline" href="#">SAFETY STANDARDS</a>
        </div>
      </div>
      <div className="text-center md:text-right">
        <p className="font-body text-[10px] tracking-[0.1em] font-bold uppercase text-stone-500">
          © 2026 Template. <br />ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
