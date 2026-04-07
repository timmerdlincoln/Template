import { useState } from "react";

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", issue: "RESIDENTIAL", info: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          issue: form.issue,
          message: form.info,
        }),
      });
    } catch {
      // Swap endpoint to make it real
    }
    setSending(false);
    setSubmitted(true);
  };

  const textColor = dark ? "text-white" : "text-black";
  const mutedColor = dark ? "text-stone-400" : "text-stone-600";
  const borderColor = dark ? "border-white/30" : "border-black";
  const inputBg = dark ? "bg-white/5" : "bg-white";
  const btnBg = dark ? "bg-white text-black hover:bg-stone-200" : "bg-black text-white hover:bg-stone-800";

  return (
    <div className="w-full max-w-2xl">
      {submitted ? (
        <div className="py-12 text-center">
          <h3 className={`text-3xl font-black uppercase tracking-tighter mb-4 ${textColor}`}>Thank You</h3>
          <p className={`${mutedColor} mb-8`}>We've received your request and will be in touch shortly.</p>
          <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", issue: "RESIDENTIAL", info: "" }); }} className={`btn-press text-[10px] font-black tracking-widest uppercase border-b-2 border-primary pb-1 hover:border-stone-400 transition-colors ${textColor}`}>
            Submit Another
          </button>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={`text-[10px] font-bold uppercase tracking-widest ${textColor}`}>Full Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`w-full focus:ring-0 focus:border-primary p-4 text-sm uppercase font-bold tracking-widest ${inputBg} border ${borderColor} ${textColor} outline-none transition-colors`} type="text" />
            </div>
            <div className="space-y-2">
              <label className={`text-[10px] font-bold uppercase tracking-widest ${textColor}`}>Phone Number</label>
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`w-full focus:ring-0 focus:border-primary p-4 text-sm uppercase font-bold tracking-widest ${inputBg} border ${borderColor} ${textColor} outline-none transition-colors`} type="tel" />
            </div>
          </div>
          <div className="space-y-2">
            <label className={`text-[10px] font-bold uppercase tracking-widest ${textColor}`}>Primary Issue</label>
            <select value={form.issue} onChange={(e) => setForm({ ...form, issue: e.target.value })} className={`w-full focus:ring-0 focus:border-primary p-4 text-sm uppercase font-bold tracking-widest ${inputBg} border ${borderColor} ${textColor} outline-none transition-colors`}>
              <option>RESIDENTIAL</option>
              <option>COMMERCIAL</option>
              <option>INDUSTRIAL</option>
              <option>EMERGENCY / CRITICAL</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className={`text-[10px] font-bold uppercase tracking-widest ${textColor}`}>Other information</label>
            <textarea value={form.info} onChange={(e) => setForm({ ...form, info: e.target.value })} className={`w-full focus:ring-0 focus:border-primary p-4 text-sm uppercase font-bold tracking-widest resize-none ${inputBg} border ${borderColor} ${textColor} outline-none transition-colors`} rows={4}></textarea>
          </div>
          <button disabled={sending} className={`btn-press w-full py-6 font-black uppercase text-sm tracking-[0.3em] transition-colors ${btnBg} disabled:opacity-50`}>
            {sending ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
