import { useState } from "react";

interface GlossaryItem {
  term: string;
  id: string;
  definition: string;
}

const glossaryItems: GlossaryItem[] = [
  {
    term: "Doble Revolución",
    id: "doble-revolucion",
    definition: "Convergencia histórica entre una revolución geopolítica (transición sistémica hacia la multipolaridad) y una revolución tecnológico-productiva (inteligencia artificial y robótica). Concepto inspirado en Hobsbawm, quien acuñó el término para describir la convergencia entre la Revolución Francesa y la Revolución Industrial inglesa en el siglo XIX. La Doble Revolución del siglo XXI constituye el vector clave de transformación de las próximas décadas."
  },
  {
    term: "Revolución geopolítica",
    id: "revolucion-geopolitica",
    definition: "Primera dimensión de la Doble Revolución. Proceso de transición sistémica del poder mundial marcado por la crisis de la unipolaridad estadounidense, el ascenso de China y el Sur Global, la formación de los BRICS+ como plataforma de coordinación, y la emergencia de un orden multipolar y policéntrico que desafía siglos de dominio occidental."
  },
  {
    term: "Revolución tecnológica",
    id: "revolucion-tecnologica",
    definition: "Segunda dimensión de la Doble Revolución. Transformación radical de las bases materiales de la producción, el trabajo y la organización social impulsada por la inteligencia artificial, la computación a gran escala y la robótica avanzada. Opera como un nuevo paradigma tecnoeconómico con una velocidad evolutiva sin precedentes, caracterizada por una aceleración recursiva."
  },
  {
    term: "Sur Global",
    id: "sur-global",
    definition: "Conjunto de 145 países, antes designados como 'Tercer Mundo', que comparten una historia de colonización o semicolonización por el campo imperialista y su marginación histórica y contemporánea en el orden económico y político mundial. No es un bloque homogéneo sino un conjunto diverso de naciones subordinadas dentro del sistema-mundo que representan a la mayoría de la población mundial."
  },
  {
    term: "Norte Global",
    id: "norte-global",
    definition: "Bloque militar, político y económico integrado por 49 países, entre ellos Estados Unidos, Reino Unido, Canadá, Australia, Nueva Zelanda, Israel, Japón y otros países de Europa Occidental y Oriental. Según el Instituto Tricontinental, este bloque concentra el 74,3% del gasto militar mundial y constituye la arquitectura institucional del hiper-imperialismo contemporáneo."
  },
  {
    term: "Intelecto Computacional",
    id: "intelecto-computacional",
    definition: "Actualización del concepto marxista de Intelecto General para la era de la IA. Está compuesto por el conocimiento social acumulado materializado en los sistemas de máquinas de inteligencia artificial, datos, redes, algoritmos, infraestructuras digitales, trabajo tecnocientífico y la cooperación social distribuida bajo la figura marxiana del trabajador colectivo. Es objeto de disputa tecnopolítica: bajo una lógica tecnoimperial se alinea con la acumulación privada y el control algorítmico; bajo una lógica de reapropiación social puede convertirse en recurso para comunidades en lucha."
  },
  {
    term: "Hiper-imperialismo",
    id: "hiper-imperialismo",
    definition: "Nueva etapa del imperialismo conceptualizada por el Instituto Tricontinental. Emerge cuando el poder hegemónico ve mermada su capacidad productiva y financiera, respondiendo con el fortalecimiento y concentración del poder militar. Se caracteriza por la sobreexpansión militar, las sanciones arbitrarias, el control de puntos de estrangulamiento geoestratégico, la apropiación ilegal de recursos y el inicio de guerras asimétricas."
  },
  {
    term: "Tecnoimperialismo",
    id: "tecnoimperialismo",
    definition: "Dimensión tecnológica del hiper-imperialismo. Modelo de dominación basado en el monopolio algorítmico militarizado, la integración del aparato militar con las Big Tech (ejemplificado por Palantir Technologies como bisagra estratégica entre Israel y EE.UU.), el control de semiconductores y la imposición de dependencia digital sobre el Sur Global. Incluye la vigilancia masiva, la guerra algorítmica y la concentración del Intelecto Computacional en manos de corporaciones del Norte Global."
  },
  {
    term: "Soberanía digital",
    id: "soberania-digital",
    definition: "Capacidad de un Estado, comunidad o movimiento para controlar sus infraestructuras digitales, datos, algoritmos y sistemas de inteligencia artificial. Se expresa tanto en la estrategia estatal (como la soberanía cibernética china con modelos abiertos y autosuficiencia tecnológica) como en las luchas populares (software libre, Fediverso, plataformas cooperativas como Decidim, proyectos de IA feminista y decolonial, y campañas contra la militarización de la tecnología)."
  },
];

export default function Glossary() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="glosario" className="pt-20 pb-12">
      {/* Section header */}
      <div className="relative mb-10">
        <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] block mb-2">
          Referencia
        </span>
        <h2 className="font-[Oswald] text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-tight">
          Glosario de conceptos
        </h2>
        <div className="w-16 h-1 bg-primary mt-4" />
      </div>

      <p className="text-muted-foreground mb-8 text-base">
        Definiciones de los conceptos principales del ensayo. Haz clic en cada término para ver su definición.
      </p>

      <div className="space-y-2">
        {glossaryItems.map((item) => (
          <div 
            key={item.id} 
            id={`glosario-${item.id}`}
            className="border border-border rounded-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-[Oswald] text-lg font-semibold text-primary">
                {item.term}
              </span>
              <svg 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                className={`text-muted-foreground transition-transform duration-200 ${openItem === item.id ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {openItem === item.id && (
              <div className="px-5 pb-5 pt-1 border-t border-border/50 bg-muted/30 animate-in fade-in slide-in-from-top-1 duration-200">
                <p className="text-foreground/80 text-[0.95rem] leading-relaxed">
                  {item.definition}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
