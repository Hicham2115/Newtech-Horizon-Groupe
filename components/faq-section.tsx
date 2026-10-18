"use client";

import { Accordion } from "radix-ui";
import { ArrowUpRight, Plus } from "lucide-react";

const questions = [
  {
    question: "Quels types de projets accompagnez-vous ?",
    answer: "Nous intervenons sur les réseaux informatiques, la téléphonie filaire et radio, le Wi-Fi, la vidéosurveillance et les systèmes de sécurité. Nous proposons également des solutions de sonorisation, de vidéoprojection, d’audioconférence et des armoires informatiques pour vos espaces professionnels.",
  },
  {
    question: "Comment demander un devis ?",
    answer: "Écrivez-nous à mestimox@gmail.com ou appelez le +212 661-137405. Présentez votre besoin, le lieu du projet et les équipements concernés. Ces premiers éléments nous permettent d’échanger avec vous et de préciser les informations nécessaires à votre devis.",
  },
  {
    question: "Mon besoin n’est pas encore bien défini. Pouvez-vous me conseiller ?",
    answer: "Oui. L’étude et le conseil font partie de notre accompagnement. Nous pouvons partir de vos usages, de la configuration de vos locaux et de vos contraintes pour vous aider à définir les équipements et les solutions adaptés à votre projet.",
  },
  {
    question: "Que prévoir pour équiper une salle de réunion ?",
    answer: "Le nombre de participants, la taille de la salle et vos usages sont les premiers points à préciser : présentations, prise de parole ou échanges à distance. Nous pourrons ensuite étudier vos besoins en sonorisation, vidéoprojection et audioconférence.",
  },
  {
    question: "Où se trouve Newtech Horizon Groupe ?",
    answer: "Nous sommes situés à Prestigia Hay Riad AL Andalous, Hay Riad, à Rabat. Contactez-nous par téléphone ou par e-mail pour échanger sur votre projet et convenir des prochaines étapes.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-[#f5f8fc] text-[#08143c]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-16 size-72 rounded-full border border-[#dfe8f7]" />
      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-[6.5%] lg:py-20">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7b89a2] sm:text-xs"><span aria-hidden="true" className="h-0.5 w-8 bg-[#0055ff]" />Questions fréquentes</p>
          <h2 id="faq-title" className="text-[32px] font-bold leading-[1.08] tracking-[-0.055em] sm:text-[38px]">Vos questions.<br /><span className="relative inline-block text-[#0055ff]">Nos réponses.<span aria-hidden="true" className="absolute -bottom-1 left-0 h-1 w-14 rounded-full bg-[#ffbf47]" /></span></h2>
          <p className="mt-5 max-w-[310px] text-[15px] leading-[1.75] text-[#7a8293]">Quelques repères pour préparer votre projet et avancer simplement.</p>
          <a href="mailto:mestimox@gmail.com" className="group mt-7 inline-flex items-center gap-3 rounded-sm py-2 text-sm font-semibold text-[#0055ff] transition-colors hover:text-[#003fca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0055ff]">Une autre question ? Écrivez-nous<ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></a>
        </div>
        <Accordion.Root type="single" collapsible defaultValue="question-0" className="overflow-hidden rounded-2xl border border-[#e1e8f2] bg-white/80 px-5 shadow-[0_18px_55px_-38px_rgba(8,20,60,0.35)] sm:px-7">
          {questions.map(({ question, answer }, index) => (
            <Accordion.Item key={question} value={`question-${index}`} className="group/faq border-b border-[#e6ebf3] last:border-b-0">
              <Accordion.Header>
                <Accordion.Trigger className="group/trigger flex w-full items-center gap-3 py-5 text-left text-[15px] font-semibold leading-relaxed tracking-[-0.02em] transition-colors hover:text-[#0055ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0055ff] data-[state=open]:text-[#0055ff] sm:gap-5 sm:py-6 sm:text-base">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#f0f5ff] text-[10px] font-semibold tracking-wide text-[#7b89a2] transition-colors group-data-[state=open]/trigger:bg-[#0055ff] group-data-[state=open]/trigger:text-white">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{question}</span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#dce4ef] bg-white text-[#08143c] transition-colors group-hover/trigger:border-blue-200 group-data-[state=open]/trigger:border-[#0055ff] group-data-[state=open]/trigger:bg-[#0055ff] group-data-[state=open]/trigger:text-white"><Plus aria-hidden="true" className="size-4 transition-transform duration-200 group-data-[state=open]/trigger:rotate-45 motion-reduce:transition-none" /></span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 motion-reduce:animate-none">
                <p className="pb-6 pl-11 pr-3 text-[14px] leading-[1.8] text-[#69758d] sm:pl-[52px] sm:pr-12 sm:text-[15px]">{answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
