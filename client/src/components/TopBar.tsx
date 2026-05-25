import { useState } from "react";

export default function TopBar() {
  const [audioExpanded, setAudioExpanded] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-11">
          {/* Left: Audio */}
          <button
            onClick={() => setAudioExpanded(!audioExpanded)}
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
            <span className="hidden sm:inline">Audio-ensayo</span>
            <span className="sm:hidden">Audio</span>
          </button>

          {/* Right: Download PDF */}
          <a
            href="/manus-storage/doble-revolucion-texto_48fe21d7.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">Descargar PDF</span>
            <span className="sm:hidden">PDF</span>
          </a>
        </div>
      </div>

      {/* Audio panel expandible */}
      {audioExpanded && (
        <div className="sticky top-11 z-20 bg-card border-b border-border animate-in slide-in-from-top-1 duration-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-sm text-muted-foreground mb-3">
              El audio-ensayo estará disponible próximamente. Se generará con IA de alta calidad y supervisión humana.
            </p>
            <div className="w-full h-10 bg-muted rounded-sm flex items-center justify-center">
              <span className="text-xs font-mono text-muted-foreground">Audio en preparación</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
