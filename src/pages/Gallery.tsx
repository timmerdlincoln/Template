export default function Gallery() {
  return (
    <main className="min-h-screen flex-grow bg-surface" style={{ zoom: 0.65 }}>
      {/* Hero Header */}
      <header className="px-10 py-20 bg-surface">
        <div className="max-w-[1920px] mx-auto grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 block"><br /></span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">Work Done</h1>
          </div>
        </div>
      </header>

      {/* Technical Mosaic Grid */}
      <section className="grid grid-cols-12 gap-[2px] bg-black border-y-2 border-primary">
        {/* Item 1: Large Industrial */}
        <div className="col-span-12 md:col-span-8 row-span-2 relative group overflow-hidden bg-surface">
          <img 
            alt="Industrial Infrastructure" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgX-IQppPdERw3-a0bQF4YFT3Azk0fFCgtgSYtqxQ6i61yhKblZtol5RSs_zWCebOmucl6RZg7KjTwmTDOZ2FuIXZgA5yCq3kIza8Au_TR6NqnWMOE13EkP02NDL-CIh93lp0AKkZs82h6nx5qUvsdcbsMbN4ZHLL9FdWlyfgC1Sf9-6E6tkt9_CVd4sgSyqGXDpsG4DvtCfeKuexFYp5TYGeg86tph7FPPe3GqPD3YYIN-PO6btee2Rcl6VLqrc4vn5U9_ZzG34e5" 
          />
        </div>

        {/* Item 2: Macro Detail */}
        <div className="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden bg-surface">
          <img 
            alt="Macro Gauge" 
            className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHj2tiODkp7Z2grrOb5YdDAVqkoanG8zk4AJbXqZfxRA7kRNCnKEoMnmTT92PGKoYkDg5f9zPnaSaNPXW_37WfIjAUDMvaXtshUxSW7FXmcJgX5D_K17GD1Zmh_7dol3hCAc2znoARnJPlj1t49h0VGuqaKbFxwbayiarXd7esLAtO1PAb3x7-2-p9SyJf-ksSjILITmqvuM08frmV6XKNfuJC4sp-nJlvyK84C1bRvjjcz3z7CORFBkDwCjD3MbhpP3tPCBNS44b" 
          />
        </div>

        {/* Item 3: Macro Detail */}
        <div className="col-span-6 md:col-span-2 row-span-1 relative group overflow-hidden bg-surface">
          <img 
            alt="Weld Detail" 
            className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhg9di48KvT7DD-AzFzXMWIOY1SaF67V50G0_5DAHOAVAAJ_gKUrZIle41vTLAAeW91yY0VC6ggFmK8yp18Pa5Q2bzTN3m-N-CUwkdQz1nHDL_vp2aPn6bjhi2F2aF4xGoXoQBRix1_RYitP3U6yEg6PZ5O_klyY6lca_bVKTmw62lIUpBcBmyGYUQtUV8ugud5piEIQFwSDTdgRrSB9_8LTTIRk9exEfb--YGEv455BMxiM3Nwl4T7-kL4B1FHirdcHXsqfPEvcIu" 
          />
        </div>

        {/* Item 4: Geometric Composition */}
        <div className="col-span-6 md:col-span-2 row-span-1 relative group overflow-hidden bg-surface">
          <img 
            alt="Piping Geometry" 
            className="w-full h-full object-cover grayscale group-hover:rotate-1 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxLvs3CSBo6Z7VfwXv2Zp7wvQAPXuT0Bg4BYdEJELkUT4I4gteZD37yCC_dgeCevHVcQRQNTgSCbArGi55YcI8k3F176-TYQmXMfTKUZeYMwoJbiX-pqWmO1taMksg606eOX2YeRFNmezf9DuHYuzUwa5bo8VKujbVOxvBpOK3sm-A8GciA5H6oj5NFNlNUviL3xgE5sq9oy8lmzJM-93mX0VeUbxX8Jre41DR9pxBnVRGr-9nHCroFtXnbeAyfNKbZf6NeA1Si4Va" 
          />
        </div>

        {/* Item 5: Large Vertical */}
        <div className="col-span-12 md:col-span-4 row-span-2 relative group overflow-hidden bg-surface border-l-2 border-primary">
          <div className="h-full flex flex-col">
            <div className="p-10 bg-black text-white grow flex flex-col justify-end">
              <span className="text-xs tracking-[0.3em] font-light mb-6"><br /></span>
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">Fill out</h2>
              <div className="w-12 h-1 bg-white mb-8"></div>
              <p className="text-xs font-medium text-stone-400 leading-relaxed uppercase tracking-wider">
                Fill this out
              </p>
            </div>
            <img 
              alt="Subterranean pipes" 
              className="h-64 object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2-1H5aOXvdfGchElzbjeNP6eLtBHziazysVN5_pHxn--VsPSJnlagNYGDfdOYFRcqqDxdc_n64OEoY40i2L5d5WnbnUp8w67IszuvB8_uVgeFSWWtMhmiOp1XvGj4jzeqA1j6ZGkovTlCF4s84eVE5_3CsTOUDr03WvZgB4fQ7L74qBQWyz9UnEPE61Q2rk0FZgfwaYwtAd8MvEnphvKlokzhHzKWBj851ILHcocOosUcBTpzxMabwoFpmVF1p6cNSAo4aDhBRuV" 
            />
          </div>
        </div>

        {/* Item 6: Grid Cluster */}
        <div className="col-span-12 md:col-span-8 row-span-1 grid grid-cols-3 gap-px bg-black">
          <div className="bg-surface relative group overflow-hidden aspect-square">
            <img 
              alt="Valve macro" 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpVBt9Q7I2kZY6g5eqwO98V06dq5XG9j45ldQWNFfCeVCTWkKYuBd2-YFcRkRTGhIAl2QruiAQl3JDmpVzSvODv4bez4evGEZ9qeUkqjpGNqa8NvbGLuODEGiMcaEZ42WoWwCm0gzzKyJdTXEaCJucH8doRanYIdSi3RSkNDYFmJlDqyQUEVnLqcrZdoWf2hkIJ_Yl95puGLoNbYE46hJI8VEXov4Qi9BsiyrDjW6cDHMaggf_a58Hf6SzfQwKtTI_kpcQItLLPPXn" 
            />
          </div>
          <div className="bg-surface relative group overflow-hidden aspect-square">
            <img 
              alt="Steel beam" 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE2WDSSnFXjKzjsJSm1AAeE8X2MtpQtxspiYFtewA4fh8QWFKWEfAx1eC_ZEpuBs097E5mYx77WQylsTDjkPT2Yi2e2OBc4U8G7mkhgc8h9KZIGJNajFor22kndtgq9PkNbPlor-AX5OXMkZtEe0FkR1iXdgcCTPOA6IYhqf0qMApyBlTeEPRXSCpdSvM6XnITu53Z89qmi3_IuW62ODvVd0qz8ywej2IPSsqylj3gW2gDCtTgUBKkkBOxxUvJemKQhus157dpYQtp" 
            />
          </div>
          <div className="bg-surface relative group overflow-hidden aspect-square">
            <img 
              alt="Blueprints" 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2KRhpwMgZMHhKwzUUZRY8XD0L-_UZVonqPVhRUgejY51z-91Blf8Zh2nbY7bDK0xxHzAYHBqvuR4FL5LgfOezhKURSvwFm4I3D8mBdI1n4X_GX7y6i8vPQMWCqusnTriVf5ACFolOnjGk0gcYEwZyHQCzGyWRJfcX6Ryoj11U6XPViXeBxd8p4pX3EHXpdFxBmBfL02Ghm0hi_Z8PuQt963IpC63TOWH7UnI3IruJj-uQD_2r88LO_1uPhR-pim05BIb5MoKYdBRH" 
            />
          </div>
        </div>
      </section>

      {/* Secondary Gallery Section (Masonry Flow) */}
      <section className="px-10 py-24 bg-surface">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-black gap-8">
          <div className="aspect-video md:aspect-square overflow-hidden">
            <img 
              alt="Large Industrial Infrastructure" 
              className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgX-IQppPdERw3-a0bQF4YFT3Azk0fFCgtgSYtqxQ6i61yhKblZtol5RSs_zWCebOmucl6RZg7KjTwmTDOZ2FuIXZgA5yCq3kIza8Au_TR6NqnWMOE13EkP02NDL-CIh93lp0AKkZs82h6nx5qUvsdcbsMbN4ZHLL9FdWlyfgC1Sf9-6E6tkt9_CVd4sgSyqGXDpsG4DvtCfeKuexFYp5TYGeg86tph7FPPe3GqPD3YYIN-PO6btee2Rcl6VLqrc4vn5U9_ZzG34e5" 
            />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden">
            <img 
              alt="Industrial Conduit Detail" 
              className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2-1H5aOXvdfGchElzbjeNP6eLtBHziazysVN5_pHxn--VsPSJnlagNYGDfdOYFRcqqDxdc_n64OEoY40i2L5d5WnbnUp8w67IszuvB8_uVgeFSWWtMhmiOp1XvGj4jzeqA1j6ZGkovTlCF4s84eVE5_3CsTOUDr03WvZgB4fQ7L74qBQWyz9UnEPE61Q2rk0FZgfwaYwtAd8MvEnphvKlokzhHzKWBj851ILHcocOosUcBTpzxMabwoFpmVF1p6cNSAo4aDhBRuV" 
            />
          </div>
        </div>
      </section>
    </main>
  );
}
