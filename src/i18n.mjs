// Rutas y textos de interfaz en español e inglés.
// El contenido profesional (cargos, viñetas, proyectos…) vive en cv-data.js.

export const SITE = "https://armandomedina.dev";
export const LANGS = ["es", "en"];

// orden de recorrido: define «Anterior / Siguiente» y la dirección de las transiciones
export const PAGES = ["home", "about", "projects", "experience", "contact"];

export const ROUTES = {
  home:       { es: "/",             en: "/en/" },
  about:      { es: "/sobre-mi/",    en: "/en/about/" },
  projects:   { es: "/proyectos/",   en: "/en/projects/" },
  experience: { es: "/experiencia/", en: "/en/experience/" },
  contact:    { es: "/contacto/",    en: "/en/contact/" },
};
export const caseRoute = (slug, lang) => (lang === "en" ? `/en/projects/${slug}/` : `/proyectos/${slug}/`);
export const cvRoute = (lang, version = "completo") => `/cv.html?lang=${lang}&version=${version}#cv`;
export const pdfRoute = (lang, version = "completo") => `/cv.html?lang=${lang}&version=${version}&print=1#cv`;

export const UI = {
  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", experience: "Experiencia", contact: "Contacto" },
    talk: "Hablemos",
    skip: "Saltar al contenido",
    menuOpen: "Abrir menú", menuClose: "Cerrar menú", sections: "Secciones del sitio", language: "Idioma",
    langNames: { es: "Español", en: "English" },
    prev: "Anterior", next: "Siguiente", backToStart: "Volver al inicio",
    copy: "Copiar", copied: "Copiado",
    footerNote: "Hecho en Bogotá",
    // inicio
    home: {
      title: "Armando Medina · Product Manager Técnico | Product Owner",
      description: "Ingeniero de Sistemas que convierte necesidades de negocio en productos digitales escalables: gestión de producto, arquitectura de software, inteligencia artificial y liderazgo de equipos.",
      explore: "Explorar proyectos", viewCv: "Ver CV",
      concepts: ["Producto", "Tecnología", "Estrategia"],
      statsLabel: "Indicadores profesionales",
      stats: [["14+", "años de experiencia profesional"], ["5", "clientes pagos en Flowcol"], ["3", "universidades como docente"]],
      doorsLabel: "Por dónde empezar",
      doors: {
        about: "Perfil, especialidades y forma de trabajo.",
        projects: "Tres casos de estudio de producto y tecnología.",
        experience: "14 años de trayectoria en producto, tecnología y docencia.",
      },
      heroAlt: "Ilustración: Armando trabajando en su portátil sobre un puf",
    },
    // sobre mí
    about: {
      title: "Sobre mí", description: "Perfil de Armando Medina: especialidades en producto, liderazgo, ingeniería, datos e IA; metodología de trabajo y formación.",
      eyebrow: "Perfil",
      lead: "Ingeniero de Sistemas con 14 años de experiencia profesional en banca y seguros, sector público, construcción, industria y educación. He ocupado cargos de Product Manager, Product Owner y líder técnico; fundé Flowcol, un ERP en la nube para pymes, y desde 2023 soy docente universitario. Actualmente curso un Máster en Inteligencia Artificial.",
      approach: "Enfoque de trabajo",
      traits: [["layers", "Perfil híbrido"], ["chart", "Decisiones con datos"], ["users", "Liderazgo ágil"], ["book", "Aprendizaje continuo"], ["cap", "Docente universitario"], ["bulb", "Visión de negocio"]],
      specialties: "Especialidades",
      specialtyIcons: { Producto: "target", Liderazgo: "users", "Ingeniería": "layers", "Datos e IA": "spark" },
      method: "Metodología", methodLead: "Cómo llevo un producto del descubrimiento a la entrega y su evolución.",
      steps: [["search", "Descubrir", "User research y el problema real."], ["pen", "Definir", "Propuesta de valor y MVP."], ["list", "Priorizar", "Roadmap y backlog por impacto."], ["rocket", "Entregar", "Sprints con Scrum y lanzamiento."], ["trend", "Medir", "KPIs, aprendizaje e iteración."]],
      education: "Formación académica", certifications: "Certificaciones y cursos", languages: "Idiomas",
      illoAlt: "Ilustración: Armando con una taza de café junto a una ventana",
    },
    // proyectos
    projects: {
      title: "Proyectos", description: "Casos de estudio de Armando Medina: Flowcol (ERP SaaS para pymes), Flow · Gravity Tunnel (control industrial) y Primer Paso (app de salud mental).",
      eyebrow: "Portafolio", lead: "Productos que fundé, lideré o construí, contados desde el problema hasta los resultados.",
      role: "Rol", tech: "Tecnología", viewCase: "Ver caso de estudio",
    },
    // caso
    case: {
      eyebrow: "Caso de estudio", of: "de", breadcrumb: "Ruta de navegación", toc: "En esta página", all: "Todos los proyectos",
      prev: "Caso anterior", next: "Siguiente caso",
      sections: { context: "Contexto y problema", objectives: "Objetivos del producto", role: "Rol y responsabilidades", solution: "Solución implementada", tech: "Arquitectura y tecnologías", decisions: "Decisiones técnicas y de negocio", results: "Resultados e impacto", learnings: "Aprendizajes" },
      period: "Periodo", org: "Organización",
    },
    // experiencia
    experience: {
      title: "Experiencia", description: "Trayectoria de Armando Medina: 14 años de experiencia profesional en producto y tecnología, y docencia universitaria desde 2023.",
      eyebrow: "Trayectoria", lead: "Diez posiciones desde 2012, entre producto y tecnología y la docencia universitaria.",
      filterLabel: "Filtrar experiencia", filters: { all: "Todo", pro: "Producto y tecnología", doc: "Docencia" },
      more: n => `Ver ${n} logros más`, less: "Ver menos",
      cvTitle: "¿Necesitas el CV?", cvText: "La versión completa y una de dos páginas, listas para imprimir o guardar en PDF.",
      viewCv: "Ver CV completo", pdfFull: "PDF completo", pdfShort: "PDF de 2 páginas",
    },
    // contacto
    contact: {
      title: "Contacto", heading: "Hablemos", description: "Contacta a Armando Medina para oportunidades como Product Manager o Product Owner, colaboración o consultoría de producto.",
      eyebrow: "Contacto", lead: "Estoy abierto a conversar sobre nuevas oportunidades y proyectos de producto.",
      reasonsLabel: "Motivos de contacto",
      reasons: [
        ["brief", "Oportunidades laborales", "Roles de Product Manager, Product Owner o Technical Lead."],
        ["users", "Colaboración", "Proyectos de producto, docencia y formación en agilidad o IA."],
        ["bulb", "Consultoría", "Discovery, definición de MVP, roadmap y arquitectura de software."],
      ],
      channelsLabel: "Canales",
      email: "Correo", phone: "Teléfono", linkedin: "LinkedIn", location: "Ubicación",
      write: "Escribir correo", call: "Llamar", profile: "Ver perfil",
      cv: "Hoja de vida", pdfFull: "Descargar CV completo (PDF)", pdfShort: "Descargar CV de 2 páginas (PDF)",
    },
    notFound: { title: "Página no encontrada", lead: "La dirección que buscas no existe o cambió de lugar.", back: "Ir al inicio" },
  },

  en: {
    nav: { home: "Home", about: "About", projects: "Projects", experience: "Experience", contact: "Contact" },
    talk: "Let's talk",
    skip: "Skip to content",
    menuOpen: "Open menu", menuClose: "Close menu", sections: "Site sections", language: "Language",
    langNames: { es: "Español", en: "English" },
    prev: "Previous", next: "Next", backToStart: "Back to start",
    copy: "Copy", copied: "Copied",
    footerNote: "Made in Bogotá",
    home: {
      title: "Armando Medina · Technical Product Manager | Product Owner",
      description: "Systems Engineer who turns business needs into scalable digital products: product management, software architecture, artificial intelligence and team leadership.",
      explore: "Explore projects", viewCv: "View résumé",
      concepts: ["Product", "Technology", "Strategy"],
      statsLabel: "Professional highlights",
      stats: [["14+", "years of professional experience"], ["5", "paying Flowcol clients"], ["3", "universities as a lecturer"]],
      doorsLabel: "Where to start",
      doors: {
        about: "Profile, specialties and way of working.",
        projects: "Three product and technology case studies.",
        experience: "14 years across product, technology and teaching.",
      },
      heroAlt: "Illustration: Armando working on his laptop on a beanbag",
    },
    about: {
      title: "About", description: "Armando Medina's profile: specialties in product, leadership, engineering, data and AI; way of working and education.",
      eyebrow: "Profile",
      lead: "Systems Engineer with 14 years of professional experience in banking and insurance, the public sector, construction, industry and education. I have held Product Manager, Product Owner and technical lead roles, founded Flowcol, a cloud ERP for small businesses, and have taught at universities since 2023. I am currently pursuing a Master's in Artificial Intelligence.",
      approach: "How I work",
      traits: [["layers", "Hybrid profile"], ["chart", "Data-driven decisions"], ["users", "Agile leadership"], ["book", "Lifelong learner"], ["cap", "University lecturer"], ["bulb", "Business vision"]],
      specialties: "Specialties",
      specialtyIcons: { Product: "target", Leadership: "users", Engineering: "layers", "Data & AI": "spark" },
      method: "Method", methodLead: "How I take a product from discovery to delivery and ongoing evolution.",
      steps: [["search", "Discover", "User research and the real problem."], ["pen", "Define", "Value proposition and MVP."], ["list", "Prioritize", "Roadmap and backlog by impact."], ["rocket", "Deliver", "Scrum sprints and launch."], ["trend", "Measure", "KPIs, learning and iteration."]],
      education: "Education", certifications: "Certifications & courses", languages: "Languages",
      illoAlt: "Illustration: Armando holding a cup of coffee by a window",
    },
    projects: {
      title: "Projects", description: "Armando Medina's case studies: Flowcol (SaaS ERP for small businesses), Flow · Gravity Tunnel (industrial control) and Primer Paso (mental-health app).",
      eyebrow: "Portfolio", lead: "Products I founded, led or built, told from the problem to the results.",
      role: "Role", tech: "Technology", viewCase: "View case study",
    },
    case: {
      eyebrow: "Case study", of: "of", breadcrumb: "Breadcrumb", toc: "On this page", all: "All projects",
      prev: "Previous case", next: "Next case",
      sections: { context: "Context and problem", objectives: "Product goals", role: "Role and responsibilities", solution: "What was built", tech: "Architecture and technology", decisions: "Technical and business decisions", results: "Results and impact", learnings: "Learnings" },
      period: "Period", org: "Organization",
    },
    experience: {
      title: "Experience", description: "Armando Medina's career: 14 years of professional experience in product and technology, and university teaching since 2023.",
      eyebrow: "Career", lead: "Ten roles since 2012, across product and technology and university teaching.",
      filterLabel: "Filter experience", filters: { all: "All", pro: "Product & technology", doc: "Teaching" },
      more: n => `Show ${n} more`, less: "Show less",
      cvTitle: "Need the résumé?", cvText: "A full version and a two-page version, ready to print or save as PDF.",
      viewCv: "View full résumé", pdfFull: "Full PDF", pdfShort: "2-page PDF",
    },
    contact: {
      title: "Contact", heading: "Let's talk", description: "Contact Armando Medina about Product Manager or Product Owner opportunities, collaboration or product consulting.",
      eyebrow: "Contact", lead: "I'm open to talking about new opportunities and product projects.",
      reasonsLabel: "Reasons to get in touch",
      reasons: [
        ["brief", "Job opportunities", "Product Manager, Product Owner or Technical Lead roles."],
        ["users", "Collaboration", "Product projects, teaching and training in agile or AI."],
        ["bulb", "Consulting", "Discovery, MVP definition, roadmap and software architecture."],
      ],
      channelsLabel: "Channels",
      email: "Email", phone: "Phone", linkedin: "LinkedIn", location: "Location",
      write: "Send an email", call: "Call", profile: "View profile",
      cv: "Résumé", pdfFull: "Download full résumé (PDF)", pdfShort: "Download 2-page résumé (PDF)",
    },
    notFound: { title: "Page not found", lead: "The address you're looking for doesn't exist or has moved.", back: "Go to home" },
  },
};
