export default function HeroSection() {
  return (
    <header className="relative min-h-[80vh] flex flex-col justify-end pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background pattern - subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Large section number as watermark */}
      <div className="absolute top-8 right-8 font-[Oswald] text-[18vw] font-bold text-primary/[0.06] leading-none select-none pointer-events-none">
        DR
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-6">
          Ensayo &middot; Mayo 2026
        </p>
        
        <h1 className="font-[Oswald] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight mb-6 text-foreground">
          La Doble<br />
          <span className="text-primary">Revolución</span><br />
          del Siglo XXI
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed mt-8">
          Geopolítica e inteligencia artificial en la transición sistémica del poder mundial.
        </p>
        
        <div className="mt-10 flex items-center gap-4">
          <div className="w-12 h-[2px] bg-primary" />
          <p className="text-sm text-foreground">
            Por <strong>Javier Toret</strong>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono text-muted-foreground">scroll</span>
        <div className="w-px h-8 bg-muted-foreground animate-pulse" />
      </div>
    </header>
  );
}
