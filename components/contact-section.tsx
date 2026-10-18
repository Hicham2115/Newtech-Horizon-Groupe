import { ContactForm } from "@/components/contact-form";
import { ArrowUpRight } from "lucide-react";

const mapUrl = "https://www.google.com/maps/search/Prestigia+Hay+Riad+AL+Andalous+,hay+Riad.+Rabat/@33.9559,-6.8877,722m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-8 bg-white text-[#08143c]">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-[6.5%] lg:py-14">
        <div className="mb-8 flex items-center justify-between border-b border-[#dfe6f0] pb-4">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7b89a2]"><span aria-hidden="true" className="h-0.5 w-8 bg-[#0055ff]" />Prenons contact</p>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#7b89a2]">Rabat · Hay Riad</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 id="contact-title" className="text-[30px] font-bold leading-[1.1] tracking-[-0.05em] sm:text-[36px]">Un projet en tête ?<br /><span className="text-[#0055ff]">Parlons-en.</span></h2>
            <p className="mt-4 max-w-[350px] text-[15px] leading-relaxed text-[#7a8293]">Décrivez votre besoin, même en quelques lignes. Réseau, sécurité ou audiovisuel : commençons par en discuter.</p>
            <div className="my-7 space-y-3">
              <a href="tel:+212661137405" className="group flex w-fit items-center gap-4 text-base font-semibold tracking-tight transition-colors hover:text-[#0055ff]">+212 661-137405<ArrowUpRight aria-hidden="true" size={16} className="text-[#0055ff] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></a>
              <a href="mailto:mestimox@gmail.com" className="group flex w-fit items-center gap-4 text-base font-semibold tracking-tight transition-colors hover:text-[#0055ff]">mestimox@gmail.com<ArrowUpRight aria-hidden="true" size={16} className="text-[#0055ff] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></a>
            </div>
            <div className="overflow-hidden border border-[#dfe6f0]">
              <iframe title="Localisation : Prestigia Hay Riad AL Andalous, Rabat" src="https://maps.google.com/maps?q=Prestigia%20Hay%20Riad%20AL%20Andalous%2C%20Hay%20Riad%2C%20Rabat&ll=33.9559,-6.8877&z=16&output=embed&hl=fr" width="600" height="220" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[200px] w-full border-0 sm:h-[220px]" allowFullScreen />
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 bg-[#f5f8fc] px-4 py-4 transition-colors hover:bg-[#edf3ff]">
                <span><span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#7b89a2]">Notre adresse</span><span className="block text-xs leading-relaxed">Prestigia Hay Riad AL Andalous<br />Hay Riad, Rabat, Maroc</span><span className="mt-2 block text-xs font-semibold text-[#0055ff]">Ouvrir dans Google Maps</span></span>
                <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-[#0055ff] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </a>
            </div>
          </div>
          <div className="lg:border-l lg:border-[#dfe6f0] lg:pl-12">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b89a2]">Votre message</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
