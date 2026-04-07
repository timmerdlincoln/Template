export default function About() {
  return (
    <main className="flex-grow">
      {/* Section 1: Who We Are */}
      <section className="relative h-[700px] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            alt="industrial facility interior with pipes and dramatic overhead lighting"
            className="w-full h-full object-cover opacity-40 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1nWRxDQh-SRB_edLYBpKznMoc40qu7m_u1VYJNNw9BH03fcBruG_d5CmUxJ_UYL55ha4gHeh69mNG4Qi3V9qcp0SQXuwTu3-MUrpV3O2NFahbPYTUtvN8NndPI84ibLqC2Z_WCJh6ek_OvcaaiLSpaXKTSQYpv5CsPNZ3R5gM7pReDMYJX4D7ze9uMKg5l_qFE0Mr20RhBRe_ihqYAUmnBUIW_e2QrC6m7WGziUYVIEd_hCHCofpYTQrTaKj3_Oq9irl7lkcIpzxh"
          />
        </div>
        <div className="relative z-10 w-full px-10">
          <div className="max-w-4xl">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">Who We Are</p>
            <h1 className="text-white font-black uppercase tracking-tighter leading-[0.85] mb-8 text-5xl md:text-7xl">
              Built on <br />precision.
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed max-w-xl">
              For over two decades, we've delivered industrial-grade plumbing solutions with an uncompromising standard of quality. From emergency response to large-scale commercial builds, our team operates with the discipline of engineers and the accountability of tradespeople.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </section>

      {/* Section 2: Values / Team */}
      <section className="py-24 px-10 bg-surface">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Our Values</h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Value 1 */}
          <div className="bg-surface-container-high p-10 flex flex-col border-t-8 border-primary">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Integrity</h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              We show up on time, give honest assessments, and never upsell what isn't needed. Your trust is the foundation of every job we take.
            </p>
          </div>
          {/* Value 2 */}
          <div className="bg-surface-container-high p-10 flex flex-col">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Expertise</h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              Every technician on our team is licensed, insured, and continuously trained on the latest codes and techniques across residential and commercial systems.
            </p>
          </div>
          {/* Value 3 */}
          <div className="bg-surface-container-high p-10 flex flex-col">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Reliability</h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              We maintain a 24/7 emergency dispatch line because infrastructure doesn't fail on a schedule. When it matters most, we're there.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
