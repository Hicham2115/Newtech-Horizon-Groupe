"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Une équipe à l’écoute, qui a su nous orienter vers une installation claire et adaptée à nos besoins.",
    name: "Client professionnel",
    detail: "Réseaux & téléphonie",
    initials: "CP",
    tone: "sand",
  },
  {
    quote:
      "Des échanges simples et un accompagnement sérieux, du conseil jusqu’à la mise en place.",
    name: "Client professionnel",
    detail: "Sécurité & vidéosurveillance",
    initials: "CP",
    tone: "white",
  },
  {
    quote:
      "Notre salle de réunion est maintenant équipée selon nos usages. Le résultat est soigné et facile à utiliser.",
    name: "Client professionnel",
    detail: "Audiovisuel & conférence",
    initials: "CP",
    tone: "white",
  },
  {
    quote:
      "Nous avons apprécié les conseils et la disponibilité de l’équipe tout au long de notre installation.",
    name: "Client professionnel",
    detail: "Réseaux informatiques",
    initials: "CP",
    tone: "white",
  },
  {
    quote:
      "Une solution bien adaptée à nos locaux, avec une installation propre et des explications claires.",
    name: "Client professionnel",
    detail: "Vidéosurveillance",
    initials: "CP",
    tone: "sand",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-[#ffbf47]" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} aria-hidden="true" className="size-3.5 fill-current" />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];
  const nextReview = () => setActiveIndex((index) => (index + 1) % reviews.length);
  const previousReview = () =>
    setActiveIndex((index) => (index - 1 + reviews.length) % reviews.length);

  return (
    <section
      id="avis"
      aria-labelledby="reviews-title"
      className="overflow-hidden bg-[#08143c] text-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-[6.5%] lg:py-20">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9ba9c4] sm:text-xs">
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#70a0ff]" />
              Ils nous font confiance
            </p>
            <h2
              id="reviews-title"
              className="max-w-[620px] text-[30px] font-bold leading-[1.08] tracking-[-0.05em] sm:text-[38px] lg:text-[44px]"
            >
              Des projets bien pensés.
              <br />
              <span className="text-[#8fb1ff]">Des clients rassurés.</span>
            </h2>
          </div>
          <p className="max-w-[300px] text-sm leading-relaxed text-[#aab5ca] sm:pb-1 sm:text-[15px]">
            La confiance se construit à chaque étape, du premier échange à la mise en service.
          </p>
        </div>

        <div className="grid items-stretch gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
          <article
            key={activeReview.detail}
            aria-live="polite"
            className="relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#0755ed] p-5 sm:min-h-[280px] sm:p-7 lg:rounded-[1.75rem] lg:p-8"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-16 size-64 rounded-full border border-white/15 sm:size-80" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-5 -top-7 size-48 rounded-full border border-white/15 sm:size-64" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/90 sm:text-xs">
                <span className="size-1.5 rounded-full bg-[#ffbf47]" />
                Témoignage client
              </span>
              <Quote aria-hidden="true" className="size-9 text-white/40 sm:size-11" strokeWidth={1.5} />
            </div>
            <div className="relative z-10 mt-7 max-w-[640px] sm:mt-9">
              <Stars />
              <blockquote className="mt-4 text-[20px] font-medium leading-[1.3] tracking-[-0.035em] sm:text-[24px] lg:text-[28px]">
                « {activeReview.quote} »
              </blockquote>
            </div>
            <div className="relative z-10 mt-6 flex items-end justify-between gap-4 border-t border-white/25 pt-4">
              <div>
                <p className="text-sm font-semibold">{activeReview.name}</p>
                <p className="mt-1 text-xs text-white/70">{activeReview.detail}</p>
              </div>
              <span aria-hidden="true" className="font-mono text-xs tracking-[0.2em] text-white/60">
                {String(activeIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
              </span>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {reviews
              .filter((_, index) => index !== activeIndex)
              .slice(0, 2)
              .map((review) => (
                <article
                  key={review.detail}
                  className={`relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-[1.5rem] p-5 sm:min-h-[230px] sm:p-6 lg:min-h-0 lg:rounded-[2rem] lg:p-7 ${
                    review.tone === "sand"
                      ? "bg-[#f0eee8] text-[#08143c]"
                      : "border border-white/15 bg-white/[0.06] text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Stars />
                    <Quote aria-hidden="true" className={`size-5 ${review.tone === "sand" ? "text-[#08143c]/25" : "text-white/30"}`} />
                  </div>
                  <blockquote className="mt-7 text-[17px] font-medium leading-[1.45] tracking-[-0.025em] sm:text-lg">
                    « {review.quote} »
                  </blockquote>
                  <div className={`mt-6 flex items-center gap-3 border-t pt-4 ${review.tone === "sand" ? "border-[#08143c]/10" : "border-white/15"}`}>
                    <span className={`flex size-9 items-center justify-center rounded-full text-[10px] font-bold ${review.tone === "sand" ? "bg-[#08143c] text-white" : "bg-white/10 text-white"}`}>
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-xs font-semibold">{review.name}</p>
                      <p className={`mt-0.5 text-[11px] ${review.tone === "sand" ? "text-[#7a8293]" : "text-white/55"}`}>
                        {review.detail}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2" aria-label={`Avis ${activeIndex + 1} sur ${reviews.length}`}>
              {reviews.map((review, index) => (
                <button
                  key={review.detail}
                  type="button"
                  aria-label={`Afficher l’avis ${index + 1} : ${review.detail}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all motion-reduce:transition-none ${
                    index === activeIndex ? "w-7 bg-[#8fb1ff]" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[11px] tracking-[0.15em] text-[#aab5ca]">
              {String(activeIndex + 1).padStart(2, "0")} — {String(reviews.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <p className="text-xs leading-relaxed text-[#aab5ca] sm:text-sm">
              Vous préparez un projet ? Parlons de vos besoins.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={previousReview}
                aria-label="Avis précédent"
                className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                aria-label="Avis suivant"
                className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="group mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-white px-5 text-xs font-semibold text-[#08143c] transition-colors hover:bg-[#dce7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-0 sm:hidden"
        >
          Échangeons sur votre projet
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
        </a>
      </div>
    </section>
  );
}
