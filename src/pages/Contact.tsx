import { useReveal } from "../useReveal";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  useReveal();

  return (
    <main className="flex-grow">
      <section className="py-24 px-10 bg-black text-white min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto w-full text-center reveal">
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Contact Us
          </h1>
          <div className="flex justify-center">
            <ContactForm dark />
          </div>
        </div>
      </section>
    </main>
  );
}
