import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <>
      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-white text-[#08143c] lg:bg-[#f8fafc] lg:min-h-[min(40vw,640px)]">
        <Image src="/images/hero-office-network.png" alt="Baie informatique avec câblage bleu dans un espace de travail moderne" fill priority sizes="(min-width: 1024px) 100vw, 1px" className="-z-10 hidden object-cover object-center lg:block" />
        <div className="mx-auto max-w-[1860px] px-5 pb-5 pt-8 sm:px-8 sm:pb-7 sm:pt-10 lg:pr-[6.5%] lg:pl-[3.5%] lg:pb-[5vw] lg:pt-[5vw]">
          <p className="mb-5 flex items-center gap-3 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-[#7b89a2] sm:gap-[18px] sm:text-[10px] lg:mb-[2vw] lg:font-bold lg:tracking-[0.2em]"><span aria-hidden="true" className="h-0.5 w-7 shrink-0 bg-[#0055ff] sm:w-10" />Solutions techniques pour vos espaces</p>
          <h1 id="hero-title" className="max-w-[600px] text-[clamp(38px,9vw,54px)] font-bold leading-[1.08] tracking-[-0.055em] lg:max-w-[780px] lg:text-[clamp(48px,3.8vw,62px)] lg:leading-[1.08]">Installation réseau,<br /><span className="text-[#0055ff]">en toute simplicité.</span></h1>
          <p className="mt-5 max-w-[460px] text-base leading-[1.65] tracking-[-0.025em] text-[#7a8293] sm:text-lg lg:mt-6 lg:max-w-[500px] lg:text-[19px] lg:leading-[1.5]">Réseaux informatiques pour vos bureaux, salles de réunion et espaces de conférence.</p>
          <div className="mt-6 flex flex-col gap-1 min-[540px]:flex-row min-[540px]:gap-4 lg:mt-[2vw] lg:gap-5">
            <a href="#contact" className="inline-flex min-h-[50px] items-center justify-center gap-5 rounded-lg lg:min-h-12 lg:rounded-[5px] bg-[#0055ff] px-7 py-3 text-sm font-semibold text-white lg:text-base transition-colors hover:bg-[#0046d6] lg:min-h-[52px] lg:min-w-[230px] lg:text-[15px]">Demander un diagnostic <ArrowRight className="size-5" /></a>
            <a href="#expertises" className="inline-flex min-h-11 items-center justify-center rounded-lg border-0 bg-white px-4 py-3 text-sm lg:min-h-12 lg:rounded-[5px] lg:border lg:border-[#0055ff] lg:px-7 lg:text-base font-semibold text-[#0055ff] transition-colors hover:bg-blue-50 lg:min-h-[52px] lg:min-w-[230px] lg:text-[15px]">Découvrir nos expertises</a>
          </div>
          <div className="mt-12 grid max-w-[500px] grid-cols-3 border-t border-[#dce4ef] pt-2 lg:mt-12 lg:border-t-0 lg:pt-0">
            <div className="pr-1.5 lg:py-0.5"><span aria-hidden="true" className="mb-1 block h-0.5 w-5 bg-[#0055ff]" /><p className="text-sm font-bold leading-tight tracking-[-0.025em] text-[#08143c] sm:text-base">Bureaux</p><p className="text-[9px] leading-relaxed text-[#63718a] sm:text-[11px]">Réseaux d’entreprise</p></div>
            <div className="border-l border-[#cbd5e1] px-1.5 lg:py-0.5"><span aria-hidden="true" className="mb-1 block h-0.5 w-5 bg-[#0055ff]" /><p className="text-sm font-bold leading-tight tracking-[-0.025em] text-[#08143c] sm:text-base">Réunion</p><p className="text-[9px] leading-relaxed text-[#63718a] sm:text-[11px]">Connexion fiable</p></div>
            <div className="border-l border-[#cbd5e1] pl-1.5 lg:py-0.5"><span aria-hidden="true" className="mb-1 block h-0.5 w-5 bg-[#0055ff]" /><p className="text-sm font-bold leading-tight tracking-[-0.025em] text-[#08143c] sm:text-base">Conférence</p><p className="text-[9px] leading-relaxed text-[#63718a] sm:text-[11px]">Installation sur mesure</p></div>
          </div>
        </div>
        <div className="relative mx-5 mb-7 h-[220px] overflow-hidden rounded-2xl min-[540px]:h-[280px] sm:mx-8 sm:h-[340px] lg:hidden"><Image src="/images/hero-mobile-network.png" alt="Câblage réseau professionnel" fill sizes="(min-width: 1024px) 1px, 100vw" className="object-cover object-center" /></div>
      </section>
    </>
  );
}
