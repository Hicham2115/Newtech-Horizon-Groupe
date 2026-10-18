"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Dialog } from "radix-ui";

// Adapted from the project's Coss Origin navbar (comp-577).
const navigationLinks = [
  { href: "#contenu", label: "Accueil" },
  { href: "#expertises", label: "Expertises" },
  { href: "#avis", label: "Avis clients" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="relative z-20 bg-white text-[#08143c]">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:p-4">Aller au contenu</a>
      <div className="mx-auto flex h-[76px] max-w-[1860px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-[6.5%] xl:h-[80px]">
        <Link href="/" aria-label="Newtech Horizon Groupe — Accueil" className="shrink-0">
          <span className="group/brand inline-flex items-center gap-3">
            <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[13px] bg-[#08143c] shadow-[0_5px_14px_-7px_rgba(0,85,255,0.75)] transition-transform duration-300 group-hover/brand:-rotate-3 sm:size-11">
              <span className="absolute right-[11px] top-[9px] size-2 rounded-full bg-[#ffbf47] sm:right-3 sm:top-[10px]" />
              <span className="absolute bottom-[9px] left-1/2 h-3 w-7 -translate-x-1/2 rounded-[50%] border-t-[2px] border-[#8fb1ff] sm:bottom-[10px] sm:w-8" />
              <span className="absolute bottom-[5px] left-1/2 h-3 w-7 -translate-x-1/2 rounded-[50%] border-t-[2px] border-[#0055ff] sm:bottom-[6px] sm:w-8" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[17px] font-extrabold tracking-[-0.06em] text-[#08143c] min-[375px]:text-[19px] sm:text-[21px] xl:text-[23px]">Newtech <span className="text-[#0055ff]">Horizon</span></span>
              <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#7a8291] sm:text-[10px]">Groupe <span className="mx-1 text-[#0055ff]">·</span> Solutions techniques</span>
            </span>
          </span>
        </Link>
        <NavigationMenu aria-label="Navigation principale" className="hidden flex-none lg:flex" viewport={false}>
          <NavigationMenuList className="gap-3 xl:gap-8">
            {navigationLinks.map((link) => <NavigationMenuItem key={link.label}><NavigationMenuLink className="relative rounded-sm px-1 py-3 text-[14px] font-medium transition-colors hover:bg-transparent hover:text-[#0055ff] after:absolute after:inset-x-1 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#0055ff] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none xl:text-[14px]" href={link.href}>{link.label}</NavigationMenuLink></NavigationMenuItem>)}
          </NavigationMenuList>
        </NavigationMenu>
        <Button render={<a href="#contact" />} nativeButton={false} className="hidden h-[46px] gap-5 rounded-[5px] bg-[#0055ff] px-5 text-sm font-semibold text-white hover:bg-[#0046d6] lg:inline-flex xl:px-8 xl:text-sm">Parlons de votre projet <ArrowRight className="size-5" /></Button>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button type="button" aria-label="Ouvrir le menu" className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-blue-100 text-[#08143c] transition-colors hover:bg-blue-50 lg:hidden"><Menu size={22} /></button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-[#08143c]/45 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex h-dvh w-[min(88vw,360px)] flex-col overflow-y-auto bg-white text-[#08143c] shadow-2xl outline-none duration-300 data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right motion-reduce:animate-none">
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-6 pb-6 pt-[max(24px,env(safe-area-inset-top))]">
                <div><Dialog.Title className="max-w-[210px] text-xl font-bold leading-tight tracking-[-0.045em]">Newtech Horizon Groupe</Dialog.Title><Dialog.Description className="mt-2 text-xs leading-relaxed text-slate-500">Vos solutions techniques, en toute simplicité.</Dialog.Description></div>
                <Dialog.Close asChild><button type="button" aria-label="Fermer le menu" className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-50 transition-colors hover:bg-blue-50"><X size={20} /></button></Dialog.Close>
              </div>
              <nav aria-label="Navigation mobile" className="px-6 py-7">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Explorer</p>
                {navigationLinks.map((link) => <Dialog.Close asChild key={link.label}><a href={link.href} className="group flex items-center justify-between border-b border-slate-100 py-5 text-xl font-semibold tracking-tight transition-colors hover:text-[#0055ff]">{link.label}<ArrowRight size={19} className="text-[#0055ff] transition-transform group-hover:translate-x-1" /></a></Dialog.Close>)}
              </nav>
              <div className="mt-auto px-6 pb-[max(24px,env(safe-area-inset-bottom))] pt-4">
                <div className="mb-6 space-y-4 text-sm text-slate-500"><a href="tel:+212661137405" className="flex items-center gap-3 hover:text-[#0055ff]"><Phone size={16} className="text-[#0055ff]" />+212 661-137405</a><a href="mailto:mestimox@gmail.com" className="flex items-center gap-3 hover:text-[#0055ff]"><Mail size={16} className="text-[#0055ff]" />mestimox@gmail.com</a><p className="flex items-center gap-3"><MapPin size={16} className="text-[#0055ff]" />Hay Riad, Rabat</p></div>
                <Dialog.Close asChild><a href="#contact" className="flex min-h-12 items-center justify-between gap-3 rounded-md bg-[#0055ff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0046d6]">Parlons de votre projet<ArrowRight size={18} /></a></Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
