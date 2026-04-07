import { useReveal } from "../useReveal";
import ContactForm from "../components/ContactForm";

export default function About() {
  useReveal();

  return (
    <main className="flex-grow">
      {/* Section 1: Who We Are */}
      <section className="py-24 px-10 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">Who We Are</p>
            <h1 className="text-white font-black uppercase tracking-tighter leading-[0.85] mb-8 text-5xl md:text-7xl">
              Built on <br />precision.
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed">
              For over two decades, we've delivered industrial-grade plumbing solutions with an uncompromising standard of quality. From emergency response to large-scale commercial builds, our team operates with the discipline of engineers and the accountability of tradespeople.
            </p>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden group">
              <img
                alt="industrial pipe infrastructure with high contrast lighting"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1nWRxDQh-SRB_edLYBpKznMoc40qu7m_u1VYJNNw9BH03fcBruG_d5CmUxJ_UYL55ha4gHeh69mNG4Qi3V9qcp0SQXuwTu3-MUrpV3O2NFahbPYTUtvN8NndPI84ibLqC2Z_WCJh6ek_OvcaaiLSpaXKTSQYpv5CsPNZ3R5gM7pReDMYJX4D7ze9uMKg5l_qFE0Mr20RhBRe_ihqYAUmnBUIW_e2QrC6m7WGziUYVIEd_hCHCofpYTQrTaKj3_Oq9irl7lkcIpzxh"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8 group">
              <img
                alt="technician working on commercial plumbing system"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh3JzTh9xrVKnv8BKc4qj62s6gVrLxZBdZaaKiQpC0Ug1ZDgww3N1hoiF8hcpbZXfvJjBd9ZZt7BQeMk48TNkoYWO5lMuW8pRdjki8joTUxH7thxnHvgN3_GgX_EpvXsWpoX-6sytUuvG8RAIDofx4NiJNlk9iIdbZAvav-c3phHScXAE_md5Bs6TCQr7OHAO6dDp2KWSXi_huvvU8zYgHcNwGJLijg2kFXIUuRS7J7MDn3DsII_4I9Tv6MwqBKwS7olxWfzEj433U"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Values */}
      <section className="py-24 px-10 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal grid grid-cols-2 gap-4 order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden group">
              <img
                alt="close up of copper soldering joints on residential piping"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX_J2z0Kr80xIk9nOpIXOcrI2Ss9d1PlkF3zIxnOYQDU-uqIEDOWuQmD7w3uBtjtxZecPj0dDL565BGqEjtgoeVFHn35VzuYeZxVcF7d7MA4zPUsGqGHq0tDP5kCJvYLO726v1VvF22VuiolwElWLnIb-2nG-nDBxdku_LdHNagYyVdLlYWi1R87lsXOG5Kir0BWJpJVCDuTQzw7dinSQ7ze9soEIgy__b_1vlYy_7Rrhnr0GgQ76uutRIam-nuP1ChuWEdi2S9KL7"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8 group">
              <img
                alt="industrial facility facade with geometric metal lines"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqD3F7IsuCStSIctSZyrjlpwzdLq25ISoL88IGi945Jk39FuODZPBG_KFMGtaFkdmMVDhM27hGqBu6BH9rEJLoTqwQXMRV3xvItC4zp8HlbSokMDTG2NuK3LSbVqENWaQnRYrywTnmQjMj59poxGNnXC_w92eeY1sJcOS_PmRw5w3c3GwXpyBLgCECRWhoTgUf4rO2sM181N_fH6M69sT7tUF8QzIZlKxgOR8qcFZAvmzLwvpQZhI2vK9Lz0aU7YCxF7CsR3UcR4pR"
              />
            </div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">What We Stand For</p>
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.85] mb-8">Our Values</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6 hover:border-stone-500 transition-colors">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Integrity</h3>
                <p className="text-on-surface-variant leading-relaxed">We show up on time, give honest assessments, and never upsell what isn't needed. Your trust is the foundation of every job we take.</p>
              </div>
              <div className="border-l-4 border-stone-300 pl-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Expertise</h3>
                <p className="text-on-surface-variant leading-relaxed">Every technician is licensed, insured, and continuously trained on the latest codes and techniques across residential and commercial systems.</p>
              </div>
              <div className="border-l-4 border-stone-300 pl-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Reliability</h3>
                <p className="text-on-surface-variant leading-relaxed">We maintain a 24/7 emergency dispatch line because infrastructure doesn't fail on a schedule. When it matters most, we're there.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section className="py-24 px-10 bg-surface-container-low">
        <div className="mb-16 text-center reveal">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Our Team</h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="reveal card-lift bg-surface-container-lowest p-10 flex flex-col">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-2">Founder & Lead Engineer</p>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Full Name</h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              With 25 years in industrial and commercial plumbing, he built this company on the belief that great work speaks for itself.
            </p>
          </div>
          <div className="reveal card-lift bg-surface-container-lowest p-10 flex flex-col">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-2">Operations Manager</p>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Full Name</h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              Oversees scheduling, compliance, and quality control across all active job sites, ensuring every project meets our standard.
            </p>
          </div>
          <div className="reveal card-lift bg-surface-container-lowest p-10 flex flex-col">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-2">Emergency Response Lead</p>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Full Name</h3>
            <p className="text-on-surface-variant text-base leading-relaxed">
              Heads our 24/7 emergency team with a reputation for rapid response and clean execution under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-24 px-10 bg-black text-white reveal">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">Work With Us</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Let's build <br />together.
          </h2>
          <div className="flex justify-center">
            <ContactForm dark />
          </div>
        </div>
      </section>
    </main>
  );
}
