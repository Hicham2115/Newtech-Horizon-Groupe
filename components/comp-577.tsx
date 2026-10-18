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
  { href: "#expertises", label: "Expertises" },
  { href: "mailto:mestimox@gmail.com?subject=%C3%80%20propos%20de%20Newtech%20Horizon%20Groupe", label: "À propos" },
  { href: "mailto:mestimox@gmail.com", label: "Contact" },
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
          <span className="block text-[18px] min-[375px]:text-[20px] font-bold leading-tight tracking-[-0.055em] sm:text-[22px] xl:text-[24px]">Newtech Horizon Groupe</span>
          <span className="mt-1 block text-[11px] leading-tight tracking-[-0.025em] text-[#7a8291] sm:text-xs xl:text-[13px]">Le partenaire de vos solutions techniques</span>
        </Link>
        <NavigationMenu aria-label="Navigation principale" className="hidden flex-none lg:flex" viewport={false}>
          <NavigationMenuList className="gap-3 xl:gap-8">
            {navigationLinks.map((link) => <NavigationMenuItem key={link.label}><NavigationMenuLink className="relative rounded-sm px-1 py-3 text-[14px] font-medium transition-colors hover:bg-transparent hover:text-[#0055ff] after:absolute after:inset-x-1 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#0055ff] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none xl:text-[14px]" href={link.href}>{link.label}</NavigationMenuLink></NavigationMenuItem>)}
          </NavigationMenuList>
        </NavigationMenu>
        <Button render={<a href="mailto:mestimox@gmail.com?subject=Parlons%20de%20votre%20projet" />} nativeButton={false} className="hidden h-[46px] gap-5 rounded-[5px] bg-[#0055ff] px-5 text-sm font-semibold text-white hover:bg-[#0046d6] lg:inline-flex xl:px-8 xl:text-sm">Parlons de votre projet <ArrowRight className="size-5" /></Button>
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
                <Dialog.Close asChild><a href="mailto:mestimox@gmail.com?subject=Parlons%20de%20votre%20projet" className="flex min-h-12 items-center justify-between gap-3 rounded-md bg-[#0055ff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0046d6]">Parlons de votre projet<ArrowRight size={18} /></a></Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
