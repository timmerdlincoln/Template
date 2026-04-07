import { useReveal } from "../useReveal";

export default function Gallery() {
  useReveal();

  return (
    <main className="min-h-screen flex-grow bg-surface">
      {/* Hero Header */}
      <header className="px-10 py-16 bg-surface">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">Work Done</h1>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="px-10 pb-20 bg-surface">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {/* Project 1 */}
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden aspect-[4/3] group">
              <img
                alt="Industrial Infrastructure"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgX-IQppPdERw3-a0bQF4YFT3Azk0fFCgtgSYtqxQ6i61yhKblZtol5RSs_zWCebOmucl6RZg7KjTwmTDOZ2FuIXZgA5yCq3kIza8Au_TR6NqnWMOE13EkP02NDL-CIh93lp0AKkZs82h6nx5qUvsdcbsMbN4ZHLL9FdWlyfgC1Sf9-6E6tkt9_CVd4sgSyqGXDpsG4DvtCfeKuexFYp5TYGeg86tph7FPPe3GqPD3YYIN-PO6btee2Rcl6VLqrc4vn5U9_ZzG34e5"
              />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-3">Commercial</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Industrial Retrofit</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Complete overhaul of a 40,000 sq ft industrial facility's piping infrastructure. Upgraded legacy systems to modern code-compliant installations with zero downtime to active operations.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-3">Residential</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Full Home Repipe</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Replaced aging galvanized steel with copper throughout a 3,200 sq ft residence. Included new shut-off valves, pressure regulation, and a 10-year warranty on all joints.
              </p>
            </div>
            <div className="overflow-hidden aspect-[4/3] group order-1 md:order-2">
              <img
                alt="Copper piping installation"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHj2tiODkp7Z2grrOb5YdDAVqkoanG8zk4AJbXqZfxRA7kRNCnKEoMnmTT92PGKoYkDg5f9zPnaSaNPXW_37WfIjAUDMvaXtshUxSW7FXmcJgX5D_K17GD1Zmh_7dol3hCAc2znoARnJPlj1t49h0VGuqaKbFxwbayiarXd7esLAtO1PAb3x7-2-p9SyJf-ksSjILITmqvuM08frmV6XKNfuJC4sp-nJlvyK84C1bRvjjcz3z7CORFBkDwCjD3MbhpP3tPCBNS44b"
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden aspect-[4/3] group">
              <img
                alt="Emergency repair work"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhg9di48KvT7DD-AzFzXMWIOY1SaF67V50G0_5DAHOAVAAJ_gKUrZIle41vTLAAeW91yY0VC6ggFmK8yp18Pa5Q2bzTN3m-N-CUwkdQz1nHDL_vp2aPn6bjhi2F2aF4xGoXoQBRix1_RYitP3U6yEg6PZ5O_klyY6lca_bVKTmw62lIUpBcBmyGYUQtUV8ugud5piEIQFwSDTdgRrSB9_8LTTIRk9exEfb--YGEv455BMxiM3Nwl4T7-kL4B1FHirdcHXsqfPEvcIu"
              />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-3">Emergency</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Main Line Burst</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Rapid-response containment and repair of a critical main line failure at a commercial complex. On-site within 18 minutes, fully resolved within 4 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-16 bg-surface overflow-hidden">
        <div className="animate-marquee-fast">
          {[...Array(2)].map((_, set) => (
            <div key={set} className="flex gap-6 pr-6">
              {[
                { alt: "Large Industrial Infrastructure", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgX-IQppPdERw3-a0bQF4YFT3Azk0fFCgtgSYtqxQ6i61yhKblZtol5RSs_zWCebOmucl6RZg7KjTwmTDOZ2FuIXZgA5yCq3kIza8Au_TR6NqnWMOE13EkP02NDL-CIh93lp0AKkZs82h6nx5qUvsdcbsMbN4ZHLL9FdWlyfgC1Sf9-6E6tkt9_CVd4sgSyqGXDpsG4DvtCfeKuexFYp5TYGeg86tph7FPPe3GqPD3YYIN-PO6btee2Rcl6VLqrc4vn5U9_ZzG34e5" },
                { alt: "Industrial Conduit", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2-1H5aOXvdfGchElzbjeNP6eLtBHziazysVN5_pHxn--VsPSJnlagNYGDfdOYFRcqqDxdc_n64OEoY40i2L5d5WnbnUp8w67IszuvB8_uVgeFSWWtMhmiOp1XvGj4jzeqA1j6ZGkovTlCF4s84eVE5_3CsTOUDr03WvZgB4fQ7L74qBQWyz9UnEPE61Q2rk0FZgfwaYwtAd8MvEnphvKlokzhHzKWBj851ILHcocOosUcBTpzxMabwoFpmVF1p6cNSAo4aDhBRuV" },
                { alt: "Weld Detail", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhg9di48KvT7DD-AzFzXMWIOY1SaF67V50G0_5DAHOAVAAJ_gKUrZIle41vTLAAeW91yY0VC6ggFmK8yp18Pa5Q2bzTN3m-N-CUwkdQz1nHDL_vp2aPn6bjhi2F2aF4xGoXoQBRix1_RYitP3U6yEg6PZ5O_klyY6lca_bVKTmw62lIUpBcBmyGYUQtUV8ugud5piEIQFwSDTdgRrSB9_8LTTIRk9exEfb--YGEv455BMxiM3Nwl4T7-kL4B1FHirdcHXsqfPEvcIu" },
              ].map((img, i) => (
                <div key={i} className="w-[480px] aspect-video shrink-0 overflow-hidden">
                  <img
                    alt={img.alt}
                    className="w-full h-full object-cover grayscale brightness-90"
                    src={img.src}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-10 bg-black text-white text-center reveal">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">Ready to Start?</p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
          Let's get to <br />work.
        </h2>
        <a href="/#contact" className="btn-press inline-block bg-white text-black px-12 py-5 font-black uppercase text-sm tracking-widest hover:bg-stone-200 transition-colors">
          Get A Quote
        </a>
      </section>
    </main>
  );
}
