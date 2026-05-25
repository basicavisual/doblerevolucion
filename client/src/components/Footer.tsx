export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[Oswald] text-lg font-bold uppercase tracking-wider text-primary">
              Doble Revolución
            </h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Geopolítica e inteligencia artificial en la transición sistémica del poder mundial.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-sm">
            <a 
              href="https://www.tecnopolitica.net/es/autor/javier-toret" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Perfil en Tecnopolítica &rarr;
            </a>
            <a 
              href="https://doblerevolucion.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              doblerevolucion.net
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            <a href="https://doblerevolucion.net/">Doble Revolución</a> © 2026 by <a href="https://www.tecnopolitica.net/es/autor/javier-toret">Javier Toret</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
            <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em", display: "inline", verticalAlign: "middle" }} />
            <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em", display: "inline", verticalAlign: "middle" }} />
            <img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em", display: "inline", verticalAlign: "middle" }} />
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Barcelona, mayo 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
