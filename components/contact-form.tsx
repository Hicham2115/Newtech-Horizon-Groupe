"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom (2 caractères minimum).").max(100),
  email: z.email("Indiquez une adresse e-mail valide.").max(254),
  phone: z.string().trim().max(30).refine(value => !value || /^[+\d\s().-]{6,30}$/.test(value), "Indiquez un numéro de téléphone valide."),
  message: z.string().trim().min(10, "Décrivez votre projet en au moins 10 caractères.").max(3000, "Votre message doit contenir au maximum 3 000 caractères."),
});

const fields = [
  { name: "name", label: "Votre nom", placeholder: "Nom et prénom", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Votre e-mail", placeholder: "vous@entreprise.fr", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Téléphone", placeholder: "+212…", type: "tel", autoComplete: "tel", required: false },
] as const;

export function ContactForm() {
  const [notice, setNotice] = useState("");
  const form = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "" },
    onSubmit: ({ value }) => {
      const parsed = schema.safeParse(value);
      if (!parsed.success) return;
      const data = parsed.data;
      const body = `Bonjour,\n\n${data.message}\n\nNom : ${data.name}\nE-mail : ${data.email}\nTéléphone : ${data.phone || "Non renseigné"}`;
      window.location.href = `mailto:mestimox@gmail.com?subject=${encodeURIComponent("Demande de contact — Newtech Horizon Groupe")}&body=${encodeURIComponent(body)}`;
      setNotice("Votre e-mail est prêt à être ouvert. Vérifiez-le puis envoyez-le depuis votre messagerie. Vous pouvez aussi nous écrire directement à mestimox@gmail.com.");
    },
  });

  return (
    <form noValidate onSubmit={event => { event.preventDefault(); setNotice(""); void form.handleSubmit(); }} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map(({ name, label, placeholder, type, autoComplete, required }) => (
          <form.Field key={name} name={name} validators={{ onBlur: ({ value }) => schema.shape[name].safeParse(value).error?.issues[0]?.message, onSubmit: ({ value }) => schema.shape[name].safeParse(value).error?.issues[0]?.message }}>
            {field => {
              const error = field.state.meta.errors[0];
              return <div className={name === "phone" ? "sm:col-span-2" : ""}>
                <Label htmlFor={`contact-${name}`} className="mb-2 block text-xs font-semibold text-[#08143c]">{label}{required ? <span className="ml-1 text-[#0055ff]">*</span> : <span className="ml-1 font-normal text-slate-400">(facultatif)</span>}</Label>
                <Input id={`contact-${name}`} name={name} type={type} autoComplete={autoComplete} required={required} maxLength={name === "name" ? 100 : name === "email" ? 254 : 30} placeholder={placeholder} value={field.state.value} onChange={event => field.handleChange(event.target.value)} onBlur={field.handleBlur} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className="h-12 rounded-none border-0 border-b border-[#ced7e5] bg-transparent px-0 text-sm shadow-none outline-none aria-invalid:ring-0 focus-visible:outline-none focus-visible:border-[#0055ff] focus-visible:ring-0" />
                {error && <p id={`${name}-error`} role="alert" className="mt-2 text-xs text-red-600">{String(error)}</p>}
              </div>;
            }}
          </form.Field>
        ))}
      </div>
      <form.Field name="message" validators={{ onBlur: schema.shape.message, onSubmit: schema.shape.message }}>
        {field => {
          const error = field.state.meta.errors[0];
          return <div><Label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-[#08143c]">Votre projet<span className="ml-1 text-[#0055ff]">*</span></Label><Textarea id="contact-message" name="message" required maxLength={3000} rows={5} placeholder="Parlez-nous de vos besoins, de vos locaux et des équipements souhaités…" value={field.state.value} onChange={event => field.handleChange(event.target.value)} onBlur={field.handleBlur} aria-invalid={!!error} aria-describedby={error ? "message-error" : undefined} className="min-h-36 resize-y rounded-none border-0 border-b border-[#ced7e5] bg-transparent px-0 py-3 text-sm leading-relaxed shadow-none outline-none aria-invalid:ring-0 focus-visible:outline-none focus-visible:border-[#0055ff] focus-visible:ring-0" />{error && <p id="message-error" role="alert" className="mt-2 text-xs text-red-600">{typeof error === "string" ? error : error.message}</p>}</div>;
        }}
      </form.Field>
      <div className="flex flex-col items-start gap-3"><button type="submit" className="group inline-flex min-h-12 items-center gap-5 rounded-md bg-[#0055ff] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0046d6]">Écrire à notre équipe<ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></button><p className="max-w-md text-xs leading-relaxed text-[#7a8293]">Les champs marqués d’un * sont obligatoires. Ce formulaire ouvre votre messagerie avec un e-mail prêt à envoyer.</p></div>
      {notice && <p role="status" className="rounded-md bg-[#eff5ff] p-3 text-sm leading-relaxed text-[#08143c]">{notice}</p>}
    </form>
  );
}
