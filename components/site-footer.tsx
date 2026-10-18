import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CurrentYear } from "@/components/current-year";

const footerLinks = [
  { href: "#contenu", label: "Accueil" },
  { href: "#expertises", label: "Expertises" },
  { href: "#avis", label: "Avis clients" },
  { href: "#faq", label: "Questions fréquentes" },
  { href: "#contact", label: "Contact" },
];

const services = ["Réseaux & téléphonie", "Sécurité", "Audiovisuel", "Armoires informatiques"];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#08143c] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-52 size-[34rem] rounded-full border border-white/[0.07] sm:-right-12 sm:-top-64 sm:size-[42rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-40 size-[26rem] rounded-full border border-white/[0.07] sm:right-0 sm:-top-48 sm:size-[34rem]" />
      <div className="relative mx-auto max-w-[1440px] px-5 pb-6 pt-14 sm:px-8 sm:pt-20 lg:px-[6.5%] lg:pt-24">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.15fr_0.8fr_1fr] lg:gap-16 lg:pb-16">
          <div>
            <a href="#contenu" className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <span aria-hidden="true" className="relative flex size-11 items-center justify-center overflow-hidden rounded-full bg-[#0055ff]">
                <span className="absolute bottom-2 h-3 w-7 rounded-[50%] border-t-2 border-white/90" />
                <span className="absolute bottom-3.5 h-3 w-7 rounded-[50%] border-t-2 border-white/50" />
              </span>
              <span className="text-lg font-bold tracking-[-0.05em]">Newtech Horizon</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-[1.8] text-white/60">Le partenaire de vos solutions techniques. Des installations pensées pour les usages de vos espaces professionnels.</p>
            <a href="#contact" className="group mt-7 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-[#8fb1ff] hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Parlons de votre projet<ArrowUpRight aria-hidden="true" size={16} className="text-[#8fb1ff] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></a>
          </div>

          <nav aria-label="Navigation de pied de page">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8fb1ff]">Explorer</p>
            <ul className="space-y-3">
              {footerLinks.map(({ href, label }) => <li key={href}><a href={href} className="group relative inline-flex py-0.5 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{label}<span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#8fb1ff] transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" /></a></li>)}
            </ul>
          </nav>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8fb1ff]">Nos domaines</p>
            <ul className="mb-7 flex flex-wrap gap-2">
              {services.map((service) => <li key={service} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-[11px] text-white/70">{service}</li>)}
            </ul>
            <div className="space-y-3 border-t border-white/15 pt-5 text-sm text-white/70">
              <a href="tel:+212661137405" className="flex items-center gap-3 transition-colors hover:text-white"><Phone aria-hidden="true" size={15} className="text-[#8fb1ff]" />+212 661-137405</a>
              <a href="mailto:mestimox@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white"><Mail aria-hidden="true" size={15} className="text-[#8fb1ff]" />mestimox@gmail.com</a>
              <p className="flex items-center gap-3"><MapPin aria-hidden="true" size={15} className="text-[#8fb1ff]" />Hay Riad, Rabat, Maroc</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© <CurrentYear /> Newtech Horizon Groupe. Tous droits réservés.</p>
          <a href="#contenu" className="group relative inline-flex items-center gap-2 py-0.5 transition-colors hover:text-white"><span>Retour en haut</span><span aria-hidden="true" className="text-[#8fb1ff]">↑</span><span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#8fb1ff] transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" /></a>
        </div>
        <p className="mx-auto max-w-[1440px] px-6 py-4 text-center text-[12px] text-white/70 sm:px-8 lg:px-12">
          Designed &amp; developed by{" "}
          <a
            href="https://www.stallionadvertising.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex py-0.5 text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Stallion Advertising
            <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-teal-400 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" />
          </a>
        </p>
      </div>
    </footer>
  );
}
