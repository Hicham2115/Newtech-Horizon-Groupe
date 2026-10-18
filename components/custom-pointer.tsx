"use client";

import { useEffect, useState } from "react";

export function CustomPointer() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const handlePointerLeave = () => setVisible(false);

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`custom-pointer ${visible ? "custom-pointer-visible" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      <span className="custom-pointer-ring" />
      <span className="custom-pointer-dot" />
    </div>
  );
}
