# Ideas de Diseño - Doble Revolución

## Contexto
Web editorial de ensayo largo político-académico sobre geopolítica e inteligencia artificial. Autor: Javier Toret. Identidad visual existente: naranja/negro, símbolo del infinito, tipografía condensada bold. Contenido: texto denso con infografías conceptuales intercaladas.

---

<response>
<text>
## Idea 1: Brutalismo Editorial Geopolítico

**Design Movement**: Brutalismo tipográfico + diseño editorial de revista política (inspirado en Jacobin, New Left Review, Tricontinental)

**Core Principles**:
1. La tipografía ES la arquitectura — grandes titulares condensados como muros de texto que impactan
2. Contraste extremo: negro profundo contra naranja incandescente, sin medias tintas
3. El contenido manda: cero decoración gratuita, cada pixel sirve al argumento
4. Densidad informativa con respiración controlada

**Color Philosophy**: Negro (#0A0A0A) como base de poder y seriedad académica. Naranja (#E85D04) como energía revolucionaria y urgencia. Blanco puro solo para texto body. Sin grises intermedios — el contraste es político.

**Layout Paradigm**: Columna de lectura asimétrica desplazada a la derecha (60% del viewport), con índice fijo a la izquierda como barra lateral estrecha. Las infografías rompen el flujo a full-bleed. Secciones separadas por líneas gruesas horizontales, no por espacios vacíos.

**Signature Elements**:
- Números de sección enormes (200px+) en naranja semitransparente como marca de agua
- Citas destacadas en bloques negros con texto naranja, rotados -1deg
- Líneas de progreso de lectura en el borde izquierdo

**Interaction Philosophy**: Scroll como acto de lectura comprometida. Sin animaciones frívolas. El índice lateral muestra progreso real. Las imágenes se expanden al clic con transición rápida y directa.

**Animation**: Mínima y funcional. Fade-in de secciones al scroll (opacity 0→1, 200ms). Highlight del índice activo con transición de borde izquierdo. Sin parallax, sin rebotes.

**Typography System**: 
- Titulares: Oswald Bold Condensed (impacto, densidad)
- Body: Source Serif 4 (legibilidad académica, serif con personalidad)
- Datos/cifras: JetBrains Mono (precisión, contraste con el serif)
</text>
<probability>0.07</probability>
</response>

---

<response>
<text>
## Idea 2: Cartografía Crítica — Diseño de Atlas Político

**Design Movement**: Diseño cartográfico + infografía periodística de investigación (inspirado en The Intercept, Forensic Architecture, mapas de Le Monde Diplomatique)

**Core Principles**:
1. El mundo como superficie de lectura — el ensayo se navega como un territorio
2. Capas de información que se revelan progresivamente
3. Conexiones visibles entre conceptos mediante líneas y nodos
4. Rigor visual: cada dato tiene coordenadas precisas en la página

**Color Philosophy**: Fondo crema cálido (#FDFAF5) evocando papel de atlas. Negro para texto (#1A1A1A). Naranja (#D95D39) para marcadores, nodos activos y llamadas de atención. Gris azulado (#4A5568) para elementos secundarios y líneas de conexión.

**Layout Paradigm**: Grid de 12 columnas con zonas de "mapa" (full-width para infografías) y zonas de "leyenda" (texto en columna estrecha de 7 cols). Las transiciones entre secciones usan divisores con coordenadas (como meridianos). Navegación superior con "coordenadas" del texto (Sección III / §2).

**Signature Elements**:
- Retícula sutil de puntos en el fondo (como papel milimetrado de atlas)
- Marcadores circulares naranja en los conceptos clave del texto, con tooltip al hover
- Líneas de conexión SVG animadas entre secciones relacionadas

**Interaction Philosophy**: Exploración cartográfica — el lector descubre capas. Los conceptos clave son "pins" clicables que revelan definiciones. Las infografías tienen zoom interactivo. El índice funciona como leyenda de mapa.

**Animation**: Líneas SVG que se dibujan al scroll (stroke-dashoffset). Marcadores que pulsan suavemente. Transiciones de opacidad por capas. Parallax sutil solo en las infografías full-bleed.

**Typography System**:
- Titulares: Playfair Display Bold (autoridad editorial, contraste con lo técnico)
- Body: Lora Regular (serif humanista, lectura prolongada confortable)
- Etiquetas/datos: DM Sans Medium (geométrica, limpia para cifras y categorías)
</text>
<probability>0.05</probability>
</response>

---

<response>
<text>
## Idea 3: Manifiesto Digital — Propaganda Constructivista Contemporánea

**Design Movement**: Constructivismo ruso reimaginado + diseño de propaganda política digital (inspirado en Rodchenko, El Lissitzky, pero con código)

**Core Principles**:
1. Diagonales y tensión compositiva — nada está en reposo, todo está en movimiento
2. Tipografía como arma: las palabras ocupan espacio político en la pantalla
3. Geometría dura: círculos, triángulos y líneas como vocabulario visual
4. Bicolor radical: solo negro y naranja, sin concesiones

**Color Philosophy**: Solo dos colores + blanco. Negro absoluto (#000000) como fondo del poder establecido. Naranja revolucionario (#FF6B00) como la fuerza que irrumpe. Blanco (#FFFFFF) solo para texto legible. La restricción cromática es una declaración política.

**Layout Paradigm**: Composición diagonal dominante. El texto fluye en bloques que se inclinan 2-3 grados. Las secciones se separan por bandas diagonales naranja/negro. Las infografías se presentan en marcos geométricos rotados. Sin simetría: la asimetría es la norma.

**Signature Elements**:
- Grandes formas geométricas (círculos, triángulos) como separadores de sección
- Texto de titulares que se corta por el borde del viewport (overflow deliberado)
- Barras de datos estilo constructivista (no charts genéricos, sino composiciones geométricas)

**Interaction Philosophy**: Impacto inmediato. El scroll revela composiciones que golpean visualmente. Los elementos entran desde ángulos inesperados. La lectura es un acto de confrontación con las ideas.

**Animation**: Entradas desde diagonales (translateX + translateY simultáneos). Rotaciones sutiles al scroll. Formas geométricas que se ensamblan al entrar en viewport. Timing agresivo: 150-250ms, ease-out fuerte.

**Typography System**:
- Titulares: Bebas Neue (condensada, vertical, impacto máximo)
- Body: IBM Plex Serif (industrial pero legible, herencia de diseño funcional)
- Destacados: Bebas Neue a 120px+ con letter-spacing negativo
</text>
<probability>0.04</probability>
</response>

---

## Decisión

**Elijo la Idea 1: Brutalismo Editorial Geopolítico.** 

Razones:
1. Es la que mejor respeta la naturaleza del contenido: un ensayo académico-político denso que necesita legibilidad ante todo
2. La identidad naranja/negro de la presentación existente encaja perfectamente con el brutalismo tipográfico
3. El índice lateral fijo es esencial para un texto de 13 páginas con múltiples secciones
4. Las infografías full-bleed crean los "respiros visuales" necesarios sin sacrificar la densidad
5. Es la más coherente con la estética de Tricontinental y las publicaciones de referencia del autor
