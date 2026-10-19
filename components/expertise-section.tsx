import Image from "next/image";
import { ArrowRight } from "lucide-react";

const expertises = [
  {
    number: "01",
    title: "Installation de réseaux informatiques",
    description: "Nous étudions et installons vos réseaux informatiques et Wi-Fi dans les bureaux, salles de réunion et espaces de conférence de votre entreprise. De l’analyse de vos besoins à la mise en service, nous adaptons l’installation à vos locaux et à vos usages.",
    image: "/images/expertise-networks.png",
    alt: "Téléphone professionnel et radio devant une baie réseau aux câbles bleus",
  },
  {
    number: "02",
    title: "Vidéosurveillance & sécurité",
    description: "Nous vous accompagnons dans l’étude, le conseil et la réalisation de vos systèmes de vidéosurveillance et de sécurité. Le choix des caméras et leur implantation se définissent selon la configuration de vos locaux, les zones à surveiller et vos besoins au quotidien.",
    image: "/images/expertise-security.png",
    alt: "Caméras de surveillance dôme et tube dans un espace professionnel",
  },
  {
    number: "03",
    title: "Audiovisuel & conférence",
    description: "Équipez vos salles de réunion et de conférence avec un réseau informatique adapté, ainsi que des solutions de sonorisation, de vidéoprojection et d’audioconférence. Nous étudions vos usages pour faciliter les présentations, la prise de parole et les échanges.",
    image: "/images/expertise-conference.png",
    alt: "Salle de conférence équipée de microphones et d’un écran de projection",
  },
  {
    number: "04",
    title: "Armoires informatiques",
    description: "Regroupez vos équipements dans une armoire informatique adaptée à votre infrastructure réseau. Nous vous conseillons selon le matériel à accueillir, l’espace disponible et vos besoins d’organisation, pour structurer le câblage et faciliter l’accès aux équipements.",
    image: "/images/expertise-wall-cabinet.png",
    alt: "Armoire réseau murale ouverte avec commutateur, câblage organisé et onduleur",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertises" aria-labelledby="expertises-title" className="scroll-mt-8 bg-white text-[#08143c]">
      <div className="mx-auto max-w-[1440px] px-5 py-9 sm:px-8 sm:py-10 lg:px-[6.5%] lg:py-10">
        <p className="mb-3 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#7b89a2] sm:text-[10px] lg:text-xs">
          <span aria-hidden="true" className="h-0.5 w-7 bg-[#0055ff] sm:w-9" />Nos expertises
        </p>
        <h2 id="expertises-title" className="max-w-[1100px] text-[26px] font-bold leading-[1.08] tracking-[-0.05em] sm:text-[30px] lg:text-[36px]">
          Des solutions techniques<br />
          <span className="text-[#0055ff]">pour vos espaces professionnels.</span>
        </h2>
        <p className="mt-3 max-w-[1050px] text-[15px] leading-relaxed tracking-[-0.02em] text-[#7a8293] sm:text-base lg:text-base">
          Nous concevons et déployons des infrastructures fiables et évolutives<br className="hidden lg:block" /> pour accompagner vos usages au quotidien.
        </p>
        <div className="mt-6 sm:mt-7">
          {expertises.map((expertise) => (
            <article key={expertise.number} className="group/expertise grid items-center gap-4 border-b border-[#dfe6f0] py-5 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[1fr_1fr] sm:gap-7 sm:py-3 lg:grid-cols-[1fr_1fr] lg:gap-10">
              <div className="py-1 sm:py-3 lg:py-3">
                <p className="mb-2 text-xs font-semibold tracking-wide text-[#0055ff] lg:text-sm">{expertise.number}</p>
                <h3 className="text-[21px] font-bold leading-[1.15] tracking-[-0.045em] transition-colors duration-300 group-hover/expertise:text-[#0055ff] group-focus-within/expertise:text-[#0055ff] motion-reduce:transition-none lg:text-[26px]">{expertise.title}</h3>
                <p className="mt-2 max-w-[480px] text-[15px] leading-[1.5] tracking-[-0.02em] text-[#7a8293] lg:text-base">{expertise.description}</p>
                <a href={`mailto:mestimox@gmail.com?subject=${encodeURIComponent(`Projet — ${expertise.title}`)}`} aria-label={`Discuter de votre projet : ${expertise.title}`} className="mt-2 inline-flex size-11 items-center justify-start rounded-sm text-[#0055ff] transition-transform duration-300 group-hover/expertise:translate-x-1 hover:translate-x-2 focus-visible:translate-x-2 motion-reduce:transform-none motion-reduce:transition-none lg:mt-3">
                  <ArrowRight className="size-6 lg:size-9" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
              <div className="relative aspect-[1.87] sm:aspect-[2.35] lg:aspect-[2.4] overflow-hidden rounded-xl sm:rounded-none">
                <Image src={expertise.image} alt={expertise.alt} fill sizes="(min-width: 1440px) 606px, (min-width: 640px) 44vw, calc(100vw - 40px)" className="object-cover transition-transform duration-500 ease-out group-hover/expertise:scale-[1.035] group-focus-within/expertise:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
