import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-white text-[#08143c] lg:bg-[#f8fafc] lg:min-h-[min(40vw,640px)]">
      <Image src="/images/hero-office-network.png" alt="Baie informatique avec câblage bleu dans un espace de travail moderne" fill priority sizes="(min-width: 1024px) 100vw, 1px" className="-z-10 hidden object-cover object-center lg:block" />
      <div className="mx-auto max-w-[1860px] px-5 pb-5 pt-8 sm:px-8 sm:pb-7 sm:pt-10 lg:pr-[6.5%] lg:pl-[3.5%] lg:pb-[5vw] lg:pt-[5vw]">
        <p className="mb-5 flex items-center gap-3 sm:gap-[18px] text-[9px] font-semibold uppercase leading-relaxed tracking-[0.14em] lg:font-bold lg:tracking-[0.2em] text-[#7b89a2] sm:text-[10px] lg:mb-[2vw]"><span aria-hidden="true" className="h-0.5 w-7 shrink-0 sm:w-10 bg-[#0055ff]" />Solutions techniques pour vos espaces</p>
        <h1 id="hero-title" className="max-w-[600px] text-[clamp(34px,10vw,56px)] lg:max-w-none lg:text-[clamp(48px,4.7vw,76px)] font-bold leading-[1.08] lg:leading-[1.045] tracking-[-0.055em]">La technique,<br /><span className="text-[#0055ff]">en toute simplicité.</span></h1>
        <p className="mt-5 max-w-[440px] text-[15px] sm:text-lg leading-[1.65] lg:max-w-[520px] lg:leading-[1.4] tracking-[-0.025em] text-[#7a8293] lg:mt-[1.7vw] lg:text-[clamp(18px,1.4vw,23px)]">Réseaux, sécurité et audiovisuel :<br className="hidden lg:block" /> des solutions adaptées à vos espaces<br className="hidden xl:block" /> professionnels.</p>
        <div className="mt-6 flex flex-col gap-1 min-[540px]:flex-row min-[540px]:gap-4 lg:mt-[2vw] lg:gap-5">
          <a href="mailto:mestimox@gmail.com?subject=Demande%20de%20devis" className="inline-flex min-h-[50px] items-center justify-center gap-5 rounded-lg lg:min-h-12 lg:rounded-[5px] bg-[#0055ff] px-7 py-3 text-sm font-semibold text-white lg:text-base transition-colors hover:bg-[#0046d6] lg:min-h-[52px] lg:min-w-[230px] lg:text-[15px]">Demander un devis <ArrowRight className="size-5" /></a>
          <a href="#expertises" className="inline-flex min-h-11 items-center justify-center rounded-lg border-0 bg-white px-4 py-3 text-sm lg:min-h-12 lg:rounded-[5px] lg:border lg:border-[#0055ff] lg:px-7 lg:text-base font-semibold text-[#0055ff] transition-colors hover:bg-blue-50 lg:min-h-[52px] lg:min-w-[230px] lg:text-[15px]">Découvrir nos expertises</a>
        </div>
      </div>
      <div className="relative mx-5 mb-7 h-[220px] overflow-hidden rounded-2xl min-[540px]:h-[280px] sm:mx-8 sm:h-[340px] lg:hidden"><Image src="/images/hero-mobile-network.png" alt="Câblage réseau professionnel" fill sizes="(min-width: 1024px) 1px, 100vw" className="object-cover object-center" /></div>
    </section>
  );
}
