"use client";

import { useEffect, useRef, useState } from "react";

export function SiteLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem("newtech-intro-seen");
    if (reducedMotion || alreadySeen) {
      document.documentElement.classList.add("site-intro-ready");
      loaderRef.current?.classList.add("hidden");
      return;
    }

    const startedAt = performance.now();
    const duration = 1800;
    const interval = window.setInterval(() => {
      const nextProgress = Math.min(100, Math.round(((performance.now() - startedAt) / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress === 100) {
        window.clearInterval(interval);
        window.sessionStorage.setItem("newtech-intro-seen", "true");
        window.setTimeout(() => {
          document.documentElement.classList.add("site-intro-ready");
          loaderRef.current?.classList.add("site-loader-done");
          window.setTimeout(() => loaderRef.current?.classList.add("hidden"), 450);
        }, 180);
      }
    }, 16);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div ref={loaderRef} className="site-loader fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-[#07112f] [background-image:radial-gradient(ellipse_at_50%_46%,rgb(19_48_113_/_54%)_0%,transparent_42%)]" role="status" aria-label={`Chargement de Newtech Horizon : ${progress}%`}>
      <div className="relative flex w-[min(340px,calc(100vw-48px))] flex-col items-center">
        <div className="site-loader-emblem relative grid size-[74px] place-items-center rounded-full border border-white/[0.18] shadow-[0_0_50px_rgb(30_92_255_/_14%),inset_0_0_24px_rgb(255_255_255_/_3%)]" aria-hidden="true">
          <span className="grid size-14 place-items-center rounded-full border border-[#8fb1ff]/[0.48] font-mono text-[22px] font-normal tracking-[-0.08em] text-white">N</span>
          <span className="absolute right-0.5 bottom-3 size-[7px] rounded-full border-2 border-[#07112f] bg-[#77a0ff] shadow-[0_0_14px_rgb(119_160_255_/_75%)]" />
        </div>
        <p className="site-loader-copy-in mt-8 text-[9px] font-semibold tracking-[0.22em] text-[#8fa7dc] [animation-delay:120ms]">SOLUTIONS TECHNIQUES · RABAT</p>
        <p className="site-loader-copy-in mt-[9px] text-[22px] font-medium tracking-[-0.055em] text-white [animation-delay:180ms]">Newtech Horizon</p>
        <p className="site-loader-copy-in mt-[5px] text-[8px] font-semibold tracking-[0.35em] text-white/[0.48] [animation-delay:240ms]">GROUPE</p>
        <div className="mt-[34px] flex w-[min(260px,calc(100vw-64px))] justify-between font-mono text-[8px] tracking-[0.16em] text-[#91a4d0]">
          <span>CHARGEMENT</span>
          <span className="text-[#dbe5ff]">{progress}%</span>
        </div>
        <div className="mt-[9px] h-0.5 w-[min(260px,calc(100vw-64px))] overflow-hidden bg-white/[0.16]" role="progressbar" aria-label="Chargement" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
          <span className="block h-full bg-[linear-gradient(90deg,#3269ed,#b7cbff,#3269ed)] transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <p className="site-loader-copy-in mt-[14px] text-[10px] tracking-[0.025em] text-[#dae3f7]/[0.62] [animation-delay:300ms]">La technique, en toute simplicité.</p>
      </div>
    </div>
  );
}
