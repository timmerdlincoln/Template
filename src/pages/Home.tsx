import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useReveal } from "../useReveal";
import ContactForm from "../components/ContactForm";

export default function Home() {
  useReveal();

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Monolith Plumbing | Licensed Residential & Commercial Plumbing Services</title>
        <meta name="description" content="Monolith Plumbing provides licensed, insured residential, commercial, and emergency plumbing services. 24/7 emergency dispatch. Get a free quote today." />
        <link rel="canonical" href="https://template-ten-orpin.vercel.app/" />
      </Helmet>
      {/* Section 1: Hero Section */}
      <section id="home" className="relative h-[921px] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            alt="dramatic wide angle shot of industrial steel piping infrastructure with high contrast shadows and moody lighting"
            className="w-full h-full object-cover opacity-50 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1nWRxDQh-SRB_edLYBpKznMoc40qu7m_u1VYJNNw9BH03fcBruG_d5CmUxJ_UYL55ha4gHeh69mNG4Qi3V9qcp0SQXuwTu3-MUrpV3O2NFahbPYTUtvN8NndPI84ibLqC2Z_WCJh6ek_OvcaaiLSpaXKTSQYpv5CsPNZ3R5gM7pReDMYJX4D7ze9uMKg5l_qFE0Mr20RhBRe_ihqYAUmnBUIW_e2QrC6m7WGziUYVIEd_hCHCofpYTQrTaKj3_Oq9irl7lkcIpzxh"
          />
        </div>
        <div className="relative z-10 w-full px-10">
          <div className="max-w-5xl">
            <h1 className="text-white font-black uppercase tracking-tighter leading-[0.85] mb-8 whitespace-nowrap text-5xl md:text-7xl">
              Services you can rely <br />on
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex gap-4">
                <a href="#contact" className="btn-press bg-white text-black px-10 py-5 font-bold uppercase text-sm tracking-widest hover:bg-surface-variant transition-colors inline-block">Get A Quote</a>
                <Link to="/gallery" className="btn-press border border-white/20 text-white px-10 py-5 font-bold uppercase text-sm tracking-widest hover:bg-white/10 transition-colors inline-block">View Gallery</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </section>

      {/* Section 2: Services Section */}
      <section id="services" className="py-24 px-10 bg-surface">
        <div className="mb-16 text-center reveal">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">SERVICES</h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="reveal bg-surface-container-high p-8 flex flex-col group card-lift h-full">
            <div className="w-full aspect-[4/3] overflow-hidden mb-8">
              <img
                alt="close up of heavy duty residential copper piping installation with perfect silver soldering joints"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX_J2z0Kr80xIk9nOpIXOcrI2Ss9d1PlkF3zIxnOYQDU-uqIEDOWuQmD7w3uBtjtxZecPj0dDL565BGqEjtgoeVFHn35VzuYeZxVcF7d7MA4zPUsGqGHq0tDP5kCJvYLO726v1VvF22VuiolwElWLnIb-2nG-nDBxdku_LdHNagYyVdLlYWi1R87lsXOG5Kir0BWJpJVCDuTQzw7dinSQ7ze9soEIgy__b_1vlYy_7Rrhnr0GgQ76uutRIam-nuP1ChuWEdi2S9KL7"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4">Residential</h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-8">Fill</p>
              </div>
              <a className="text-[10px] font-black tracking-widest uppercase border-b-2 border-primary self-start pb-1 hover:border-stone-400 transition-colors" href="#">See More</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="reveal bg-surface-container-high p-8 flex flex-col group card-lift h-full">
            <div className="w-full aspect-[4/3] overflow-hidden mb-8">
              <img
                alt="professional commercial plumbing layout in a high-rise utility room with labeled valves and steel gauges"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh3JzTh9xrVKnv8BKc4qj62s6gVrLxZBdZaaKiQpC0Ug1ZDgww3N1hoiF8hcpbZXfvJjBd9ZZt7BQeMk48TNkoYWO5lMuW8pRdjki8joTUxH7thxnHvgN3_GgX_EpvXsWpoX-6sytUuvG8RAIDofx4NiJNlk9iIdbZAvav-c3phHScXAE_md5Bs6TCQr7OHAO6dDp2KWSXi_huvvU8zYgHcNwGJLijg2kFXIUuRS7J7MDn3DsII_4I9Tv6MwqBKwS7olxWfzEj433U"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4">Commercial</h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-8">Fill</p>
              </div>
              <a className="text-[10px] font-black tracking-widest uppercase border-b-2 border-primary self-start pb-1 hover:border-stone-400 transition-colors" href="#">See More</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="reveal bg-surface-container-high p-8 flex flex-col group card-lift h-full">
            <div className="w-full aspect-[4/3] overflow-hidden mb-8">
              <img
                alt="night time emergency repair scene with focused yellow light on a technician working with heavy wrenches"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfoTLY10SOwPy9myxlUwK8ackR1gMisYxfORSvG9n2jXsyvfNUNqokY0lCQKuEoXPaE6IZrkTMZ1w5OFZJL25DUjY0xuvtdJLff4s-9m7YerElhLQfn2T_2ymP-OR4K6vSuauV3Y6oBCdTNYbxLMbWMKmSKal-qevaHNZKiQ3v0nsV6CWSjBcENL6jQLXrlpq3P6e2nba90hjOeqz8AmXgOkTmVee5VqyRcpZ36ZsxGoK65Rh1B-MJt6xBy9ccY1XJE9f94UI7S5mO"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4">Emergency</h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-8">Fill</p>
              </div>
              <a className="text-[10px] font-black tracking-widest uppercase border-b-2 border-primary self-start pb-1 hover:border-stone-400 transition-colors" href="#">See More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Reviews Section */}
      <section id="reviews" className="py-24 bg-surface-container-low overflow-hidden">
        <div className="mb-16 text-center px-10 reveal">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">REVIEWS</h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>
        <div className="animate-marquee">
          {[...Array(2)].map((_, set) => (
            <div key={set} className="flex gap-8 pr-8">
              {[
                { quote: "Monolith managed our industrial retrofitting with absolute precision. Their team works like a Swiss watch—no delays, no mess, just pure engineering excellence.", name: "Marcus Vane" },
                { quote: "Emergency dispatch arrived in 18 minutes. They contained a severe main line burst that would have cost us millions in equipment damage. Highly recommended.", name: "Elena Rodriguez" },
                { quote: "Rare to find a company that values technical documentation as much as the physical labor. The final reporting we received for our residential complex was flawless.", name: "Arthur Sterling" },
                { quote: "From quote to completion, zero surprises. The crew was professional, the work was clean, and the follow-up was thorough. Will use again without hesitation.", name: "James Holbrook" },
                { quote: "They repiped our entire commercial building in three days with minimal disruption. The quality of the work matched the speed—outstanding across the board.", name: "Sofia Marten" },
              ].map((review, i) => (
                <div key={i} className="bg-surface-container-lowest p-10 flex flex-col w-[420px] shrink-0 card-lift">
                  <div className="flex mb-6 gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <p className="text-lg italic leading-relaxed mb-8 flex-grow">"{review.quote}"</p>
                  <div className="pt-8 border-t border-surface-container">
                    <p className="font-black uppercase tracking-widest text-sm text-on-surface">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Contact Section */}
      <section id="contact" className="py-24 px-10 bg-surface">
        <div className="reveal grid grid-cols-12 gap-0 items-stretch overflow-hidden border-t-8 border-primary">
          {/* Form Side */}
          <div className="col-span-12 lg:col-span-7 p-12 md:p-20 flex flex-col justify-center bg-white">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-black">Get A Quote</h2>
            <p className="text-stone-600 mb-12 max-w-md">Fill in how fast their response will be</p>
            <ContactForm />
          </div>
          {/* Industrial Photo Side */}
          <div className="col-span-12 lg:col-span-5 relative group flex items-center justify-center lg:p-0 bg-white">
            <div className="w-full aspect-square relative overflow-hidden">
              <img
                alt="High-contrast black and white architectural detail of a modern industrial facade with precise metal lines and geometric shadows"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqD3F7IsuCStSIctSZyrjlpwzdLq25ISoL88IGi945Jk39FuODZPBG_KFMGtaFkdmMVDhM27hGqBu6BH9rEJLoTqwQXMRV3xvItC4zp8HlbSokMDTG2NuK3LSbVqENWaQnRYrywTnmQjMj59poxGNnXC_w92eeY1sJcOS_PmRw5w3c3GwXpyBLgCECRWhoTgUf4rO2sM181N_fH6M69sT7tUF8QzIZlKxgOR8qcFZAvmzLwvpQZhI2vK9Lz0aU7YCxF7CsR3UcR4pR"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
