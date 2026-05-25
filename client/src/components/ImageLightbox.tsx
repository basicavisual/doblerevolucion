/*
 * DESIGN: Brutalismo Editorial Geopolítico
 * Lightbox minimalista: fondo negro, imagen centrada, cerrar con clic o ESC
 */

import { useEffect } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button 
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image */}
      <img 
        src={src} 
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain bg-white p-4 sm:p-8 rounded-sm animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Caption */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60 font-mono text-center max-w-lg">
        {alt} — Clic fuera o ESC para cerrar
      </p>
    </div>
  );
}
