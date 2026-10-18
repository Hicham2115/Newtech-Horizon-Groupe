import { ContactForm } from "@/components/contact-form";
import { ArrowUpRight } from "lucide-react";

const mapUrl = "https://www.google.com/maps/search/Prestigia+Hay+Riad+AL+Andalous+,hay+Riad.+Rabat/@33.9559,-6.8877,722m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-8 overflow-hidden bg-white text-[#08143c]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-32 size-[30rem] rounded-full border border-[#edf2fa]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-[6.5%] lg:py-20">
        <div className="mb-9 flex items-center justify-between border-b border-[#dfe6f0] pb-4">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7b89a2]"><span aria-hidden="true" className="h-0.5 w-8 bg-[#0055ff]" />Prenons contact</p>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#7b89a2]">Rabat · Hay Riad</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7b89a2] sm:text-xs"><span aria-hidden="true" className="h-0.5 w-8 bg-[#0055ff]" />Votre prochain projet</p>
            <h2 id="contact-title" className="text-[32px] font-bold leading-[1.08] tracking-[-0.055em] sm:text-[40px]">Un projet en tête ?<br /><span className="relative inline-block text-[#0055ff]">Parlons-en.<span aria-hidden="true" className="absolute -bottom-1 left-0 h-1 w-14 rounded-full bg-[#ffbf47]" /></span></h2>
            <p className="mt-5 max-w-[370px] text-[15px] leading-[1.75] text-[#7a8293]">Décrivez votre besoin, même en quelques lignes. Réseau, sécurité ou audiovisuel : commençons par en discuter.</p>
            <div className="my-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href="tel:+212661137405" className="group flex w-fit items-center gap-3 rounded-lg border border-[#e1e8f2] bg-[#f8faff] px-4 py-3 text-sm font-semibold tracking-tight transition-colors hover:border-blue-200 hover:text-[#0055ff]">+212 661-137405<ArrowUpRight aria-hidden="true" size={16} className="text-[#0055ff] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></a>
              <a href="mailto:mestimox@gmail.com" className="group flex w-fit items-center gap-3 rounded-lg border border-[#e1e8f2] bg-[#f8faff] px-4 py-3 text-sm font-semibold tracking-tight transition-colors hover:border-blue-200 hover:text-[#0055ff]">mestimox@gmail.com<ArrowUpRight aria-hidden="true" size={16} className="text-[#0055ff] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#dfe6f0] bg-white shadow-[0_18px_55px_-38px_rgba(8,20,60,0.35)]">
              <iframe title="Localisation : Prestigia Hay Riad AL Andalous, Rabat" src="https://maps.google.com/maps?q=Prestigia%20Hay%20Riad%20AL%20Andalous%2C%20Hay%20Riad%2C%20Rabat&ll=33.9559,-6.8877&z=16&output=embed&hl=fr" width="600" height="220" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[200px] w-full border-0 sm:h-[220px]" allowFullScreen />
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 bg-[#f5f8fc] px-4 py-4 transition-colors hover:bg-[#edf3ff]">
                <span><span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#7b89a2]">Notre adresse</span><span className="block text-xs leading-relaxed">Prestigia Hay Riad AL Andalous<br />Hay Riad, Rabat, Maroc</span><span className="mt-2 block text-xs font-semibold text-[#0055ff]">Ouvrir dans Google Maps</span></span>
                <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-[#0055ff] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-[#e5ebf4] bg-[#f8faff] p-5 sm:p-8 lg:p-9">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b89a2]"><span className="size-2 rounded-full bg-[#0055ff]" />Votre message</p>
            <ContactForm />
          </div>
        </div>
        <aside className="relative mt-8 overflow-hidden rounded-2xl bg-[#08143c] p-6 text-white sm:mt-10 sm:p-8 lg:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-20 size-64 rounded-full border border-white/10 sm:size-80" />
          <div aria-hidden="true" className="pointer-events-none absolute right-10 -top-10 size-48 rounded-full border border-white/10 sm:right-20" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div>
              <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9fbaff]"><span className="size-1.5 rounded-full bg-[#ffbf47]" />Un échange direct</p>
              <h3 className="max-w-md text-2xl font-bold leading-tight tracking-[-0.045em] sm:text-[30px]">Vous préférez en parler de vive voix ?</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/65 lg:justify-self-center">Appelez-nous et faisons le point sur votre besoin, simplement.</p>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a href="tel:+212661137405" className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-lg bg-[#0055ff] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#246bff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Appeler l’équipe<ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></a>
              <span className="flex items-center gap-3 text-xs text-white/55"><span className="size-2 rounded-full bg-emerald-400" />À votre écoute à Rabat · Hay Riad</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
