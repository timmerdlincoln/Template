import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-stone-950 text-white px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-stone-800">
      <p className="text-sm text-stone-300 max-w-2xl">
        We use cookies to improve your experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.{" "}
        <a href="/privacy" className="underline text-white hover:text-stone-400 transition-colors">Privacy Policy</a>
      </p>
      <div className="flex gap-3 shrink-0">
        <button onClick={decline} className="btn-press px-6 py-3 text-xs font-bold uppercase tracking-widest border border-stone-600 text-stone-400 hover:text-white hover:border-white transition-colors">
          Decline
        </button>
        <button onClick={accept} className="btn-press px-6 py-3 text-xs font-bold uppercase tracking-widest bg-white text-black hover:bg-stone-200 transition-colors">
          Accept
        </button>
      </div>
    </div>
  );
}
