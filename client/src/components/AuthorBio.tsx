export default function AuthorBio() {
  return (
    <div className="my-12 py-8 border-t border-b border-border">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-2xl">
        <img 
          src="/manus-storage/javier_toret_foto_nueva_ed2f8337.jpg" 
          alt="Javier Toret"
          className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-2xl flex-shrink-0"
        />
        <div className="text-center sm:text-left">
          <h3 className="font-[Oswald] text-xl font-bold text-foreground mb-2">
            Javier Toret
          </h3>
          <p className="text-foreground/80 text-base leading-relaxed mb-3">
            Investigador en tecnopolítica, inteligencia artificial y geopolítica.
          </p>
          <a 
            href="https://www.tecnopolitica.net/es/autor/javier-toret" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
          >
            Perfil en Tecnopolítica
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
