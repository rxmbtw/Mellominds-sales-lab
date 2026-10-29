"use client";
import Image from "next/image";
import { useRef, useState } from "react";

// Click to enlarge; click anywhere, press Esc or use the button to close.
export default function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const [shown, setShown] = useState(false);

  const open = () => {
    dlg.current?.showModal();
    requestAnimationFrame(() => setShown(true)); // next frame so the transition runs
  };
  const close = () => {
    setShown(false);
    setTimeout(() => dlg.current?.close(), 200); // wait for the fade-out
  };

  return (
    <>
      <button
        onClick={open}
        aria-label={`Enlarge: ${alt}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={580}
          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-white">
          Click to enlarge
        </span>
      </button>

      <dialog
        ref={dlg}
        aria-label={alt}
        onClick={close}
        onCancel={(e) => {
          e.preventDefault(); // animate Esc too
          close();
        }}
        onClose={() => setShown(false)}
        className={`m-0 h-dvh max-h-none w-dvw max-w-none cursor-zoom-out items-center justify-center bg-ink/85 p-4 backdrop:bg-transparent open:flex transition-opacity duration-200 motion-reduce:transition-none ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink"
        >
          Close ✕
        </button>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={930}
          sizes="95vw"
          quality={90}
          className={`h-auto max-h-[90dvh] w-auto max-w-[95vw] rounded-lg object-contain shadow-2xl transition-transform duration-200 motion-reduce:transition-none ${
            shown ? "scale-100" : "scale-90"
          }`}
        />
      </dialog>
    </>
  );
}
