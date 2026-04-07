export default function Gallery() {
  return (
    <main className="min-h-screen flex-grow bg-surface">
      {/* Hero Header */}
      <header className="px-10 py-16 bg-surface">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">Work Done</h1>
        </div>
      </header>

      {/* Main Grid */}
      <section className="px-10 pb-10 bg-surface">
        <div className="grid grid-cols-12 gap-6">
          {/* Large left */}
          <div className="col-span-12 md:col-span-7 overflow-hidden aspect-[4/3] group">
            <img
              alt="Industrial Infrastructure"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgX-IQppPdERw3-a0bQF4YFT3Azk0fFCgtgSYtqxQ6i61yhKblZtol5RSs_zWCebOmucl6RZg7KjTwmTDOZ2FuIXZgA5yCq3kIza8Au_TR6NqnWMOE13EkP02NDL-CIh93lp0AKkZs82h6nx5qUvsdcbsMbN4ZHLL9FdWlyfgC1Sf9-6E6tkt9_CVd4sgSyqGXDpsG4DvtCfeKuexFYp5TYGeg86tph7FPPe3GqPD3YYIN-PO6btee2Rcl6VLqrc4vn5U9_ZzG34e5"
            />
          </div>

          {/* Two stacked right */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            <div className="overflow-hidden aspect-[3/2] group">
              <img
                alt="Macro Gauge"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHj2tiODkp7Z2grrOb5YdDAVqkoanG8zk4AJbXqZfxRA7kRNCnKEoMnmTT92PGKoYkDg5f9zPnaSaNPXW_37WfIjAUDMvaXtshUxSW7FXmcJgX5D_K17GD1Zmh_7dol3hCAc2znoARnJPlj1t49h0VGuqaKbFxwbayiarXd7esLAtO1PAb3x7-2-p9SyJf-ksSjILITmqvuM08frmV6XKNfuJC4sp-nJlvyK84C1bRvjjcz3z7CORFBkDwCjD3MbhpP3tPCBNS44b"
              />
            </div>
            <div className="overflow-hidden aspect-[3/2] group">
              <img
                alt="Weld Detail"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhg9di48KvT7DD-AzFzXMWIOY1SaF67V50G0_5DAHOAVAAJ_gKUrZIle41vTLAAeW91yY0VC6ggFmK8yp18Pa5Q2bzTN3m-N-CUwkdQz1nHDL_vp2aPn6bjhi2F2aF4xGoXoQBRix1_RYitP3U6yEg6PZ5O_klyY6lca_bVKTmw62lIUpBcBmyGYUQtUV8ugud5piEIQFwSDTdgRrSB9_8LTTIRk9exEfb--YGEv455BMxiM3Nwl4T7-kL4B1FHirdcHXsqfPEvcIu"
              />
            </div>
          </div>

          {/* Bottom three equal */}
          <div className="col-span-12 md:col-span-4 overflow-hidden aspect-[4/3] group">
            <img
              alt="Valve Macro"
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpVBt9Q7I2kZY6g5eqwO98V06dq5XG9j45ldQWNFfCeVCTWkKYuBd2-YFcRkRTGhIAl2QruiAQl3JDmpVzSvODv4bez4evGEZ9qeUkqjpGNqa8NvbGLuODEGiMcaEZ42WoWwCm0gzzKyJdTXEaCJucH8doRanYIdSi3RSkNDYFmJlDqyQUEVnLqcrZdoWf2hkIJ_Yl95puGLoNbYE46hJI8VEXov4Qi9BsiyrDjW6cDHMaggf_a58Hf6SzfQwKtTI_kpcQItLLPPXn"
            />
          </div>
          <div className="col-span-12 md:col-span-4 overflow-hidden aspect-[4/3] group">
            <img
              alt="Steel Beam"
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE2WDSSnFXjKzjsJSm1AAeE8X2MtpQtxspiYFtewA4fh8QWFKWEfAx1eC_ZEpuBs097E5mYx77WQylsTDjkPT2Yi2e2OBc4U8G7mkhgc8h9KZIGJNajFor22kndtgq9PkNbPlor-AX5OXMkZtEe0FkR1iXdgcCTPOA6IYhqf0qMApyBlTeEPRXSCpdSvM6XnITu53Z89qmi3_IuW62ODvVd0qz8ywej2IPSsqylj3gW2gDCtTgUBKkkBOxxUvJemKQhus157dpYQtp"
            />
          </div>
          <div className="col-span-12 md:col-span-4 overflow-hidden aspect-[4/3] group">
            <img
              alt="Piping Geometry"
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxLvs3CSBo6Z7VfwXv2Zp7wvQAPXuT0Bg4BYdEJELkUT4I4gteZD37yCC_dgeCevHVcQRQNTgSCbArGi55YcI8k3F176-TYQmXMfTKUZeYMwoJbiX-pqWmO1taMksg606eOX2YeRFNmezf9DuHYuzUwa5bo8VKujbVOxvBpOK3sm-A8GciA5H6oj5NFNlNUviL3xgE5sq9oy8lmzJM-93mX0VeUbxX8Jre41DR9pxBnVRGr-9nHCroFtXnbeAyfNKbZf6NeA1Si4Va"
            />
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
      <section className="py-24 px-10 bg-black text-white text-center">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">Ready to Start?</p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
          Let's get to <br />work.
        </h2>
        <a href="/#contact" className="inline-block bg-white text-black px-12 py-5 font-black uppercase text-sm tracking-widest hover:bg-stone-200 transition-colors">
          Get A Quote
        </a>
      </section>
    </main>
  );
}
