import { useRef, useState } from "react";

export default function TopBar() {
  const [audioExpanded, setAudioExpanded] = useState(false);
  const [pdfMenuOpen, setPdfMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioToggle = () => {
    setAudioExpanded((prev) => {
      const next = !prev;
      if (next) {
        // Opening panel — auto-play after the element mounts
        setTimeout(() => {
          audioRef.current?.play().catch(() => {
            // Autoplay blocked by browser; user can press play manually
          });
        }, 50);
      } else {
        // Closing panel — pause audio
        audioRef.current?.pause();
      }
      return next;
    });
  };

  return (
    <>
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-11">
          {/* Left: Audio */}
          <button
            onClick={handleAudioToggle}
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            aria-label={audioExpanded ? "Pausar audio" : "Reproducir audio-ensayo"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
            <span className="hidden sm:inline">Audio-ensayo</span>
            <span className="sm:hidden">Audio</span>
          </button>

          {/* Right: Instagram + PDF downloads */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/doblerevolucion/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="hidden sm:inline">Instagram</span>
            </a>

            {/* PDF Downloads */}
            <div className="relative">
              <button
                onClick={() => setPdfMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="hidden sm:inline">Descargar PDF</span>
                <span className="sm:hidden">PDF</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {pdfMenuOpen && (
                <>
                  {/* Backdrop to close menu */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setPdfMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-1 z-20 bg-card border border-border rounded shadow-md min-w-[160px]">
                   <a
                      href="/Doble-revolución-es-ES.pdf"
                      download
                      onClick={() => setPdfMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      <span>🇪🇸</span> Español
                    </a>
                    <a
                      href="/Doble-revolucion-en-US.pdf"
                      download
                      onClick={() => setPdfMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      <span>🇺🇸</span> English
                    </a>
                    <a
                      href="/Doble-revolucion-pt-BR.pdf"
                      download
                      onClick={() => setPdfMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      <span>🇧🇷</span> Português
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Audio panel expandible */}
      {audioExpanded && (
        <div className="sticky top-11 z-20 bg-card border-b border-border animate-in slide-in-from-top-1 duration-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
            <audio
              ref={audioRef}
              controls
              className="w-full"
              preload="metadata"
            >
              <source src="/audio.m4a" type="audio/mp4" />
              Tu navegador no soporta el elemento de audio.
            </audio>
            <a
              href="/audio.m4a"
              download
              className="shrink-0 flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              aria-label="Descargar audio"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
