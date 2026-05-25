interface TableOfContentsProps {
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  { id: "introduccion", number: "I", title: "Introducción" },
  { id: "crisis-unipolaridad", number: "II", title: "Crisis de la unipolaridad y la fase hiper-imperialista" },
  { id: "emergencia-sur-global", number: "III", title: "La emergencia del Sur Global y la Mayoría Global Multipolar" },
  { id: "revolucion-geopolitica", number: "IV", title: "La revolución geopolítica. Guerra y el triángulo multipolar" },
  { id: "revolucion-tecnologica", number: "V", title: "La revolución tecnológica. Modelos asimétricos de IA" },
  { id: "brujula-estrategica", number: "VI", title: "La Doble Revolución como brújula estratégica" },
  { id: "glosario", number: "—", title: "Glosario de conceptos" },
];

export default function TableOfContents({ activeSection, isOpen, onClose }: TableOfContentsProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-40 
          transform transition-transform duration-200 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="p-5 border-b border-sidebar-border">
          <a href="#" className="block">
            <h1 className="font-[Oswald] text-base font-bold uppercase tracking-wider text-primary leading-tight">
              Doble<br />Revolución
            </h1>
            <p className="text-[10px] text-muted-foreground mt-1 font-mono">.net</p>
          </a>
        </div>

        {/* Sections */}
        <div className="p-3 overflow-y-auto h-[calc(100%-160px)]">
          <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-[0.18em] mb-3 px-2">
            Índice
          </p>
          <ul className="space-y-0.5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={onClose}
                  className={`block px-3 py-2 text-[12px] leading-snug transition-all duration-150 border-l 
                    ${activeSection === section.id 
                      ? "border-primary text-primary font-medium" 
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                    }`}
                >
                  <span className="font-mono text-[10px] mr-1.5 opacity-60">{section.number}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <p className="text-[11px] text-muted-foreground">
            Por <strong className="text-sidebar-foreground">Javier Toret</strong>
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">
            Barcelona, mayo 2026
          </p>
        </div>
      </nav>
    </>
  );
}
