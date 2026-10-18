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
    <section id="faq" aria-labelledby="faq-title" className="bg-[#f5f8fc] text-[#08143c]">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-[6.5%] lg:py-14">
        <div>
          <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7b89a2]"><span aria-hidden="true" className="h-0.5 w-8 bg-[#0055ff]" />Questions fréquentes</p>
          <h2 id="faq-title" className="text-[28px] font-bold leading-[1.12] tracking-[-0.05em] sm:text-[32px]">Vos questions.<br /><span className="text-[#0055ff]">Nos réponses.</span></h2>
          <p className="mt-4 max-w-[300px] text-[15px] leading-relaxed text-[#7a8293]">Quelques repères pour préparer votre projet et avancer simplement.</p>
          <a href="mailto:mestimox@gmail.com" className="group mt-6 inline-flex items-center gap-3 rounded-sm py-2 text-sm font-semibold text-[#0055ff]">Une autre question ? Écrivez-nous<ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></a>
        </div>
        <Accordion.Root type="single" collapsible defaultValue="question-0" className="border-t border-[#dce4ef]">
          {questions.map(({ question, answer }, index) => (
            <Accordion.Item key={question} value={`question-${index}`} className="group/faq border-b border-[#dce4ef]">
              <Accordion.Header>
                <Accordion.Trigger className="group/trigger flex w-full items-center gap-3 py-5 text-left text-[15px] font-semibold leading-relaxed tracking-[-0.015em] transition-colors hover:text-[#0055ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0055ff] data-[state=open]:text-[#0055ff] sm:gap-5 sm:text-base">
                  <span aria-hidden="true" className="self-start pt-1 text-[10px] font-medium tracking-wide text-[#7b89a2]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{question}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#dce4ef] bg-white transition-colors group-hover/trigger:border-blue-200 group-data-[state=open]/trigger:border-[#0055ff] group-data-[state=open]/trigger:bg-[#0055ff] group-data-[state=open]/trigger:text-white"><Plus aria-hidden="true" className="size-4 transition-transform duration-200 group-data-[state=open]/trigger:rotate-45 motion-reduce:transition-none" /></span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <p className="pb-5 pl-6 pr-10 text-[14px] leading-[1.8] text-[#7a8293] sm:pl-8 sm:pr-12 sm:text-[15px]">{answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
