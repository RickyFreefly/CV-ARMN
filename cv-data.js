/* Fuente única de la hoja de vida (español e inglés).
   La usan build.mjs (todas las páginas del sitio y los casos de estudio) y cv.html (editor, vista #cv e impresión en PDF).
   Tras editar este archivo, ejecuta: node build.mjs
   Los campos «todo» marcan evidencia pendiente y no se muestran. */
window.CV_DATA = {
  "name": "Armando Ricardo Medina Nieto",
  "shortName": "Armando Medina",
  "contact": {
    "email": "rmedinan2009@gmail.com",
    "phone": "+57 320 434 4662",
    "phoneRaw": "+573204344662",
    "location": "Bogotá, Colombia",
    "linkedin": "linkedin.com/in/armandomedinapm",
    "linkedinUrl": "https://www.linkedin.com/in/armandomedinapm",
    "photo": "img/foto.jpg"
  },
  "role": {
    "es": "Product Manager Técnico | Product Owner",
    "en": "Technical Product Manager | Product Owner"
  },
  "pitch": {
    "es": "Ingeniero de Sistemas especializado en transformar necesidades de negocio en productos digitales escalables. Combino gestión de producto, arquitectura de software, inteligencia artificial y liderazgo de equipos para llevar soluciones desde el descubrimiento hasta su implementación y evolución.",
    "en": "Systems Engineer focused on turning business needs into scalable digital products. I combine product management, software architecture, artificial intelligence and team leadership to take solutions from discovery through implementation and ongoing evolution."
  },
  "degree": {
    "es": "Ingeniero de Sistemas",
    "en": "Systems Engineer"
  },
  "profile": {
    "es": "Ingeniero de Sistemas con 14 años de experiencia profesional (desde 2012) en banca y seguros, sector público, construcción, industria, consultoría y educación. He trabajado como Product Manager, Product Owner, líder técnico y Service Manager, y desde 2023 como docente universitario. Fundador de Flowcol, plataforma ERP en la nube que hoy opera con cinco clientes pagos. Combino gestión de producto (discovery, MVP, roadmap y backlog), arquitectura de software e inteligencia artificial para traducir necesidades de negocio en decisiones técnicas viables y trabajar de igual a igual con equipos de desarrollo, arquitectura y datos.",
    "en": "Systems Engineer with 14 years of professional experience (since 2012) in banking and insurance, the public sector, construction, industry, consulting and education. I have worked as Product Manager, Product Owner, technical lead and Service Manager, and as a university lecturer since 2023. Founder of Flowcol, a cloud ERP platform that now runs with five paying clients. I combine product management (discovery, MVP, roadmap and backlog), software architecture and artificial intelligence to translate business needs into viable technical decisions and work as a peer with development, architecture and data teams."
  },
  "profileShort": {
    "es": "Ingeniero de Sistemas con 14 años de experiencia profesional (desde 2012) en banca y seguros, sector público, construcción, industria, consultoría y educación. Product Manager y Product Owner con experiencia en arquitectura de software e inteligencia artificial. Fundador de Flowcol, ERP en la nube con cinco clientes pagos, y docente universitario desde 2023.",
    "en": "Systems Engineer with 14 years of professional experience (since 2012) in banking and insurance, the public sector, construction, industry, consulting and education. Product Manager and Product Owner with a background in software architecture and artificial intelligence. Founder of Flowcol, a cloud ERP with five paying clients, and university lecturer since 2023."
  },
  "approach": {
    "es": "Combino gestión de producto (discovery, MVP, roadmap y backlog), arquitectura de software e inteligencia artificial para traducir necesidades de negocio en decisiones técnicas viables y trabajar de igual a igual con equipos de desarrollo, arquitectura y datos.",
    "en": "I combine product management (discovery, MVP, roadmap and backlog), software architecture and artificial intelligence to translate business needs into viable technical decisions and work as a peer with development, architecture and data teams."
  },
  "summary": [
    {
      "label": {
        "es": "Experiencia profesional",
        "en": "Professional experience"
      },
      "value": {
        "es": "14 años",
        "en": "14 years"
      },
      "text": {
        "es": "Desde junio de 2012 en banca y seguros, sector público, construcción, industria, consultoría y software.",
        "en": "Since June 2012 in banking and insurance, the public sector, construction, industry, consulting and software."
      }
    },
    {
      "label": {
        "es": "Experiencia específica en producto",
        "en": "Product-specific experience"
      },
      "value": {
        "es": "2 cargos de producto",
        "en": "2 product roles"
      },
      "text": {
        "es": "Product Manager en Lavenir SAS (2022) y Fundador y Product Manager en Flowcol (2025 – actual). Funciones de producto (requerimientos, historias de usuario y backlog) en Gravity Tunnel, Fondo Nacional de Garantías y Constructora Bolívar.",
        "en": "Product Manager at Lavenir SAS (2022) and Founder & Product Manager at Flowcol (2025 – present). Product responsibilities (requirements, user stories and backlog) at Gravity Tunnel, Fondo Nacional de Garantías and Constructora Bolívar."
      },
      "todo": "TODO: confirmar el total de años de experiencia específica en producto antes de publicarlo como cifra."
    },
    {
      "label": {
        "es": "Experiencia docente",
        "en": "Teaching experience"
      },
      "value": {
        "es": "Desde 2023",
        "en": "Since 2023"
      },
      "text": {
        "es": "Universidad El Bosque, Universidad de los Andes y Universidad Manuela Beltrán.",
        "en": "Universidad El Bosque, Universidad de los Andes and Universidad Manuela Beltrán."
      }
    }
  ],
  "experience": [
    {
      "kind": "doc",
      "org": "Universidad Manuela Beltrán",
      "role": {
        "es": "Docente tiempo completo",
        "en": "Full-time Lecturer"
      },
      "start": {
        "es": "Sep 2026",
        "en": "Sep 2026"
      },
      "end": {
        "es": "Actual",
        "en": "Present"
      },
      "product": false,
      "bullets": [
        {
          "es": "Encargado de las asignaturas de Inteligencia Artificial, teoría de bases de datos, desarrollo web, sistemas expertos, programación orientada a objetos, computación móvil y nuevas tecnologías de desarrollo.",
          "en": "I teach Artificial Intelligence, database theory, web development, expert systems, object-oriented programming, mobile computing and emerging development technologies."
        }
      ],
      "short": [
        0
      ]
    },
    {
      "kind": "pro",
      "org": "Flowcol",
      "role": {
        "es": "Fundador y Product Manager",
        "en": "Founder & Product Manager"
      },
      "start": {
        "es": "Nov 2025",
        "en": "Nov 2025"
      },
      "end": {
        "es": "Actual",
        "en": "Present"
      },
      "product": true,
      "bullets": [
        {
          "es": "Fundé Flowcol y la llevé de idea a producto en operación: una plataforma ERP en la nube (SaaS) para pymes, hoy con cinco clientes pagos activos en menos de un año desde el lanzamiento.",
          "en": "I founded Flowcol and took it from idea to a live product: a cloud ERP (SaaS) for small businesses, now with five active paying clients less than a year after launch."
        },
        {
          "es": "Definí la propuesta de valor, el MVP y el roadmap a partir de user research con los primeros clientes, priorizando los módulos de ventas, compras, inventario, contabilidad, tesorería y terceros.",
          "en": "I defined the value proposition, MVP and roadmap from user research with the first clients, prioritizing the sales, purchasing, inventory, accounting, treasury and third-party modules."
        },
        {
          "es": "Dirijo el ciclo completo del producto: discovery, definición funcional, desarrollo, lanzamiento, onboarding de clientes y soporte post-venta.",
          "en": "I run the full product cycle: discovery, functional definition, development, launch, client onboarding and post-sale support."
        },
        {
          "es": "Reemplacé procesos manuales en Excel, propensos a error, por flujos automatizados y validados, adaptados a las necesidades de emprendedores y pequeñas empresas.",
          "en": "I replaced error-prone manual Excel processes with automated, validated workflows built around the needs of entrepreneurs and small businesses."
        },
        {
          "es": "Diseñé la arquitectura multiempresa con control de usuarios, roles y permisos por compañía, y la integración de facturación electrónica con proveedor externo vía microservicio.",
          "en": "I designed the multi-company architecture with users, roles and permissions per company, plus e-invoicing integration with an external provider through a microservice."
        }
      ],
      "short": [
        0,
        1,
        4
      ],
      "stack": "Node.js, Express, PostgreSQL, React, Tailwind CSS, APIs REST, Render, Cloudflare",
      "todo": "TODO: añadir un resultado medible de la automatización (p. ej., horas ahorradas o errores evitados por cliente) y, si existe, la métrica de time-to-market por release."
    },
    {
      "kind": "doc",
      "org": "Universidad de los Andes",
      "role": {
        "es": "Docente de Educación Continuada",
        "en": "Continuing Education Lecturer"
      },
      "start": {
        "es": "Ago 2024",
        "en": "Aug 2024"
      },
      "end": {
        "es": "Actual",
        "en": "Present"
      },
      "product": false,
      "bullets": [
        {
          "es": "Actualmente dicto el curso Liderazgo Estratégico y Toma de Decisiones Impulsado por IA.",
          "en": "I currently teach the course Strategic Leadership and AI-Driven Decision Making."
        },
        {
          "es": "Formé profesionales en gestión de proyectos, metodologías ágiles Scrum, marco PMP y metodologías de innovación, en convenio con Colsubsidio.",
          "en": "I trained professionals in project management, Scrum, the PMP framework and innovation methods, in partnership with Colsubsidio."
        },
        {
          "es": "Diseñé el contenido académico del programa y acompañé a los participantes en la aplicación de enfoques ágiles, predictivos e innovadores a proyectos reales de sus organizaciones.",
          "en": "I designed the program's content and coached participants in applying agile, predictive and innovative approaches to real projects in their organizations."
        }
      ],
      "short": [
        0
      ]
    },
    {
      "kind": "doc",
      "org": "Universidad El Bosque",
      "role": {
        "es": "Instructor Asociado",
        "en": "Associate Instructor"
      },
      "start": {
        "es": "Sep 2023",
        "en": "Sep 2023"
      },
      "end": {
        "es": "Jul 2026",
        "en": "Jul 2026"
      },
      "product": false,
      "bullets": [
        {
          "es": "Orienté las asignaturas de Introducción a la Ingeniería, Matemáticas Aplicadas, Estructuras de Datos y Bases de Datos en el programa de Ingeniería de Sistemas, con métodos interactivos orientados al pensamiento crítico.",
          "en": "I taught Introduction to Engineering, Applied Mathematics, Data Structures and Databases in the Systems Engineering program, using interactive methods focused on critical thinking."
        },
        {
          "es": "Gestor del contrato de los diplomados en Ciberseguridad impartidos al Ministerio de Defensa: supervisé la ejecución y el cumplimiento de los términos contractuales mediante inspección, evaluación, análisis, control, seguimiento y verificación de los compromisos establecidos.",
          "en": "Contract manager for the Cybersecurity diploma programs delivered to the Ministry of Defense: I supervised execution and compliance with the contract terms through inspection, evaluation, analysis, control, follow-up and verification of commitments."
        },
        {
          "es": "Lideré el desarrollo de Primer Paso, aplicación móvil en Flutter para diagnóstico inicial y orientación en salud mental, desde la definición del alcance hasta la entrega.",
          "en": "I led the development of Primer Paso, a Flutter mobile app for initial mental-health screening and guidance, from scope definition to delivery."
        }
      ],
      "short": [
        2
      ],
      "todo": "TODO: si hay datos (encuestas, notas o asistencia), añadir la mejora en participación o rendimiento académico."
    },
    {
      "kind": "pro",
      "org": "Gravity Tunnel",
      "role": {
        "es": "Analista de Soluciones / Desarrollador Full Stack",
        "en": "Solutions Analyst / Full Stack Developer"
      },
      "start": {
        "es": "Mar 2023",
        "en": "Mar 2023"
      },
      "end": {
        "es": "Sep 2026",
        "en": "Sep 2026"
      },
      "product": false,
      "bullets": [
        {
          "es": "Diseñé e implementé un sistema de control tipo SCADA para el variador de frecuencia del motor del túnel, con comunicación Modbus TCP en arquitectura dual-host (canales separados de lectura y escritura) para sostener el control operativo aun si uno de los dos enlaces falla.",
          "en": "I designed and built a SCADA-style control system for the tunnel motor's frequency drive, using Modbus TCP in a dual-host architecture (separate read and write channels) that keeps operations under control even if one of the two links fails."
        },
        {
          "es": "Construí mecanismos de resiliencia industrial (watchdogs, heartbeats, reconexión automática y verificación de escritura por lectura de confirmación) que distinguen entre «backend conectado» y «señal real del variador», para evitar falsos positivos de disponibilidad y reinicios manuales.",
          "en": "I built industrial resilience mechanisms (watchdogs, heartbeats, automatic reconnection and read-back write verification) that tell \"backend connected\" apart from \"real drive signal\", to avoid false availability positives and manual restarts."
        },
        {
          "es": "Implementé telemetría en tiempo real (RPM y % de potencia) propagada por WebSockets a múltiples pantallas de operación y de cara al público, sincronizadas entre sí con alertas visuales y sonoras automáticas según el tiempo restante de cada vuelo.",
          "en": "I implemented real-time telemetry (RPM and % power) pushed over WebSockets to multiple operator and public-facing screens, kept in sync with automatic visual and audio alerts based on the time left in each flight."
        },
        {
          "es": "Desarrollé una app de control remoto en Flutter (Android) que replica los comandos del panel físico (potencia, presets, inicio/pausa de sets) sobre el mismo canal de sockets, permitiendo operar el túnel desde un dispositivo móvil con la misma lógica y telemetría.",
          "en": "I developed a Flutter (Android) remote-control app that mirrors the physical panel's commands (power, presets, start/pause of sets) over the same socket channel, so the tunnel can be run from a mobile device with the same logic and telemetry."
        },
        {
          "es": "Definí y lideré la construcción de Flow, plataforma interna para gestión administrativa, control de usuarios, reportes, facturación, cierres operativos y medición de consumo energético; hoy es la herramienta central de la operación.",
          "en": "I defined and led the build of Flow, the internal platform for administration, user control, reporting, billing, operational closings and energy metering; today it is the operation's central tool."
        },
        {
          "es": "Levanté requerimientos con las áreas de operación y administración y prioricé el backlog de funcionalidades según impacto operativo y costo de implementación.",
          "en": "I gathered requirements with the operations and administration teams and prioritized the feature backlog by operational impact and implementation cost."
        },
        {
          "es": "Implementé un esquema de control de acceso basado en 5 roles diferenciados (administración, caja, coaches, energía, vuelos), segmentando el uso de los más de 15 módulos de la plataforma según responsabilidad operativa.",
          "en": "I implemented role-based access control with 5 distinct roles (administration, cashier, coaches, energy, flights), segmenting the use of more than 15 platform modules by operational responsibility."
        },
        {
          "es": "Diseñé el módulo de control de energía con conciliación de consumo por zona, cálculo automático del consumo en periodos inactivos entre cierres y agregación alineada al ciclo real de facturación eléctrica, dando trazabilidad para auditar el gasto energético del túnel.",
          "en": "I designed the energy module with per-zone consumption reconciliation, automatic calculation of idle-period usage between closings and aggregation aligned with the real electricity billing cycle, giving traceability to audit the tunnel's energy spend."
        },
        {
          "es": "Integré en un único flujo de cierre diario la conciliación de caja, facturación y energía, antes gestionadas como reportes independientes.",
          "en": "I merged cash, billing and energy reconciliation, previously separate reports, into a single daily closing flow."
        }
      ],
      "short": [
        0,
        2,
        4
      ]
    },
    {
      "kind": "pro",
      "org": "Sophos Solutions",
      "role": {
        "es": "Service Manager",
        "en": "Service Manager"
      },
      "start": {
        "es": "Jul 2022",
        "en": "Jul 2022"
      },
      "end": {
        "es": "Jun 2023",
        "en": "Jun 2023"
      },
      "product": false,
      "bullets": [
        {
          "es": "Lideré la entrega de proyectos y servicios tecnológicos para clientes del sector financiero: Seguros Alfa, Banco de Bogotá, ATH y Bolsa de Valores de Colombia.",
          "en": "I led the delivery of technology projects and services for financial-sector clients: Seguros Alfa, Banco de Bogotá, ATH and the Colombian Stock Exchange."
        },
        {
          "es": "Gestioné equipos de 15 personas y presupuestos de 300 millones de pesos, respondiendo por alcance, tiempos, calidad y relación con el cliente (stakeholder management).",
          "en": "I managed teams of 15 people and budgets of COP 300 million, accountable for scope, timelines, quality and the client relationship (stakeholder management)."
        },
        {
          "es": "Coordiné 2 proyectos en paralelo, articulando equipos técnicos con las áreas de negocio del cliente.",
          "en": "I coordinated 2 projects in parallel, aligning technical teams with the client's business areas."
        }
      ],
      "short": [
        0,
        1
      ]
    },
    {
      "kind": "pro",
      "org": "Lavenir SAS",
      "role": {
        "es": "Gerente de Producto (Product Manager)",
        "en": "Product Manager"
      },
      "start": {
        "es": "Feb 2022",
        "en": "Feb 2022"
      },
      "end": {
        "es": "Jun 2022",
        "en": "Jun 2022"
      },
      "product": true,
      "bullets": [
        {
          "es": "Gestioné el roadmap del producto y la planificación de requerimientos, definiendo historias de usuario y criterios de aceptación.",
          "en": "I managed the product roadmap and requirements planning, writing user stories and acceptance criteria."
        },
        {
          "es": "Prioricé el backlog funcional y di seguimiento a los sprints bajo Scrum, actuando como Product Owner del equipo y como puente entre negocio y desarrollo.",
          "en": "I prioritized the functional backlog and tracked Scrum sprints, acting as the team's Product Owner and the bridge between business and development."
        }
      ],
      "short": [
        0,
        1
      ]
    },
    {
      "kind": "pro",
      "org": "Double V Partners",
      "role": {
        "es": "Líder Técnico",
        "en": "Technical Lead"
      },
      "start": {
        "es": "Abr 2021",
        "en": "Apr 2021"
      },
      "end": {
        "es": "Oct 2021",
        "en": "Oct 2021"
      },
      "product": false,
      "bullets": [
        {
          "es": "Diseñé arquitecturas de microservicios, soluciones cloud y aplicaciones monolíticas para clientes de la consultoría, definiendo patrones de desarrollo, integración y criterios de selección tecnológica que guiaron las decisiones de los equipos de producto.",
          "en": "I designed microservice architectures, cloud solutions and monolithic applications for consulting clients, defining development and integration patterns and technology selection criteria that guided product teams' decisions."
        }
      ],
      "short": [
        0
      ]
    },
    {
      "kind": "pro",
      "org": "Fondo Nacional de Garantías",
      "role": {
        "es": "Ingeniero de Desarrollo VII",
        "en": "Development Engineer VII"
      },
      "start": {
        "es": "Abr 2016",
        "en": "Apr 2016"
      },
      "end": {
        "es": "Abr 2021",
        "en": "Apr 2021"
      },
      "product": false,
      "bullets": [
        {
          "es": "Lideré los proyectos Microsoft de la entidad: Dynamics CRM, SharePoint, gestión documental, portal transaccional y sitio web corporativo.",
          "en": "I led the organization's Microsoft projects: Dynamics CRM, SharePoint, document management, the transactional portal and the corporate website."
        },
        {
          "es": "Definí historias de usuario, coordiné un equipo de 5 personas y gestioné el seguimiento a contratos con proveedores tecnológicos.",
          "en": "I wrote user stories, coordinated a team of 5 people and managed follow-up on contracts with technology vendors."
        },
        {
          "es": "Lideré el ajuste y mantenimiento del portal transaccional que atiende a las entidades financieras a nivel nacional para el seguimiento y la ejecución de garantías, integrando la solución con el ERP SAP.",
          "en": "I led updates and maintenance of the transactional portal that serves financial institutions nationwide for tracking and executing guarantees, integrating the solution with SAP ERP."
        }
      ],
      "short": [
        0,
        2
      ]
    },
    {
      "kind": "pro",
      "org": "Constructora Bolívar",
      "role": {
        "es": "Administrador CRM",
        "en": "CRM Administrator"
      },
      "start": {
        "es": "Jun 2012",
        "en": "Jun 2012"
      },
      "end": {
        "es": "Abr 2016",
        "en": "Apr 2016"
      },
      "product": false,
      "bullets": [
        {
          "es": "Administré la plataforma Dynamics CRM 2011, lideré el levantamiento de requerimientos con las áreas comerciales y de servicio, y traduje necesidades de negocio en historias de usuario y mejoras funcionales de la plataforma.",
          "en": "I managed the Dynamics CRM 2011 platform, led requirements gathering with the sales and service teams, and turned business needs into user stories and functional improvements to the platform."
        }
      ],
      "short": [
        0
      ]
    }
  ],
  "skills": [
    {
      "group": {
        "es": "Producto",
        "en": "Product"
      },
      "items": {
        "es": [
          "Product discovery",
          "user research",
          "definición de MVP",
          "roadmap de producto",
          "historias de usuario y criterios de aceptación",
          "priorización y refinamiento de backlog",
          "KPIs y OKRs",
          "go-to-market"
        ],
        "en": [
          "Product discovery",
          "user research",
          "MVP definition",
          "product roadmap",
          "user stories and acceptance criteria",
          "backlog prioritization and refinement",
          "KPIs and OKRs",
          "go-to-market"
        ]
      }
    },
    {
      "group": {
        "es": "Liderazgo",
        "en": "Leadership"
      },
      "items": {
        "es": [
          "Scrum",
          "Kanban",
          "marco PMI/PMP",
          "Product Owner",
          "gestión de stakeholders",
          "coordinación de equipos de hasta 15 personas",
          "gestión de presupuestos y contratos con proveedores",
          "Jira",
          "Azure Boards",
          "Confluence"
        ],
        "en": [
          "Scrum",
          "Kanban",
          "PMI/PMP framework",
          "Product Owner",
          "stakeholder management",
          "leading teams of up to 15 people",
          "budget and vendor contract management",
          "Jira",
          "Azure Boards",
          "Confluence"
        ]
      }
    },
    {
      "group": {
        "es": "Ingeniería",
        "en": "Engineering"
      },
      "items": {
        "es": [
          "Arquitectura de microservicios",
          "APIs REST",
          "Node.js",
          "Express",
          ".NET / .NET Core",
          "Python",
          "React",
          "Angular",
          "Flutter",
          "PostgreSQL",
          "SQL Server",
          "MongoDB",
          "Azure",
          "AWS",
          "Docker",
          "WebSockets",
          "Modbus TCP",
          "Dynamics CRM",
          "SharePoint",
          "SAP",
          "Power Automate",
          "Microsoft 365"
        ],
        "en": [
          "Microservice architecture",
          "REST APIs",
          "Node.js",
          "Express",
          ".NET / .NET Core",
          "Python",
          "React",
          "Angular",
          "Flutter",
          "PostgreSQL",
          "SQL Server",
          "MongoDB",
          "Azure",
          "AWS",
          "Docker",
          "WebSockets",
          "Modbus TCP",
          "Dynamics CRM",
          "SharePoint",
          "SAP",
          "Power Automate",
          "Microsoft 365"
        ]
      }
    },
    {
      "group": {
        "es": "Datos e IA",
        "en": "Data & AI"
      },
      "items": {
        "es": [
          "Power BI",
          "Tableau",
          "IA generativa",
          "asistentes empresariales",
          "gestión de riesgos de IA"
        ],
        "en": [
          "Power BI",
          "Tableau",
          "generative AI",
          "enterprise assistants",
          "AI risk management"
        ]
      }
    }
  ],
  "education": [
    {
      "title": {
        "es": "Máster Universitario en Inteligencia Artificial",
        "en": "Master's Degree in Artificial Intelligence"
      },
      "school": "UNIR",
      "year": {
        "es": "En curso",
        "en": "In progress"
      }
    },
    {
      "title": {
        "es": "Especialización en Docencia y Pedagogía Universitaria",
        "en": "Specialization in University Teaching and Pedagogy"
      },
      "school": "Universidad La Gran Colombia",
      "year": {
        "es": "2012",
        "en": "2012"
      }
    },
    {
      "title": {
        "es": "Ingeniería de Sistemas",
        "en": "B.S. in Systems Engineering"
      },
      "school": "Universidad Los Libertadores",
      "year": {
        "es": "2010",
        "en": "2010"
      }
    }
  ],
  "certifications": [
    {
      "group": {
        "es": "Producto y agilidad",
        "en": "Product & agility"
      },
      "items": [
        {
          "name": {
            "es": "Scrum Product Owner Professional (SPOPC)",
            "en": "Scrum Product Owner Professional (SPOPC)"
          },
          "issuer": "CertiProf",
          "year": "2024"
        },
        {
          "name": {
            "es": "Scrum Master Professional (SMPC)",
            "en": "Scrum Master Professional (SMPC)"
          },
          "issuer": "CertiProf",
          "year": "2024"
        },
        {
          "name": {
            "es": "Scrum Developer Professional (SDPC)",
            "en": "Scrum Developer Professional (SDPC)"
          },
          "issuer": "CertiProf",
          "year": "2024"
        }
      ]
    },
    {
      "group": {
        "es": "Inteligencia artificial",
        "en": "Artificial intelligence"
      },
      "items": [
        {
          "name": {
            "es": "Generative AI Professional Certification (GAIPC)",
            "en": "Generative AI Professional Certification (GAIPC)"
          },
          "issuer": "CertiProf",
          "year": "2024"
        },
        {
          "name": {
            "es": "AI Project Manager Foundation (AIPMFPC)",
            "en": "AI Project Manager Foundation (AIPMFPC)"
          },
          "issuer": "CertiProf",
          "year": "2024"
        },
        {
          "name": {
            "es": "AI Risk Management Professional (AIRMPC)",
            "en": "AI Risk Management Professional (AIRMPC)"
          },
          "issuer": "CertiProf",
          "year": "2024"
        },
        {
          "name": {
            "es": "AI Expert Certificate (CAIEC)",
            "en": "AI Expert Certificate (CAIEC)"
          },
          "issuer": "",
          "year": "2025",
          "todo": "TODO: adjuntar soporte; el PDF no incluye este certificado."
        },
        {
          "name": {
            "es": "AI Professional Certificate (CAIPC)",
            "en": "AI Professional Certificate (CAIPC)"
          },
          "issuer": "",
          "year": "2025",
          "todo": "TODO: adjuntar soporte o confirmar si corresponde a GAIPC (2024), que sí está en el PDF."
        }
      ]
    },
    {
      "group": {
        "es": "Cursos",
        "en": "Courses"
      },
      "items": [
        {
          "name": {
            "es": "Gerencia de Proyectos PMI · 84 h",
            "en": "PMI Project Management · 84 h"
          },
          "issuer": "EUD",
          "year": "2023"
        },
        {
          "name": {
            "es": "Gestión ágil de proyectos con Scrum · 40 h",
            "en": "Agile Project Management with Scrum · 40 h"
          },
          "issuer": "EUD",
          "year": "2023"
        }
      ]
    }
  ],
  "languages": [
    {
      "es": "Español — nativo",
      "en": "Spanish — native"
    },
    {
      "es": "Inglés — B1",
      "en": "English — B1"
    }
  ],
  "labels": {
    "es": {
      "profile": "Perfil profesional",
      "summary": "Resumen de experiencia",
      "experience": "Experiencia profesional",
      "teaching": "Experiencia docente",
      "skills": "Competencias",
      "education": "Educación",
      "certifications": "Certificaciones y cursos",
      "languages": "Idiomas",
      "contact": "Contacto",
      "productRole": "Cargo de producto",
      "full": "CV completo",
      "short": "CV resumido (2 páginas)",
      "earlier": "Experiencia anterior",
      "caseStudy": "Caso de estudio",
      "viewCase": "Ver caso de estudio",
      "challenge": "El reto",
      "did": "Qué hice",
      "decisions": "Decisiones clave",
      "role": "Rol",
      "period": "Periodo",
      "org": "Organización",
      "stack": "Tecnología",
      "results": "Resultados",
      "prev": "Caso anterior",
      "next": "Siguiente caso",
      "of": "de"
    },
    "en": {
      "profile": "Professional profile",
      "summary": "Experience at a glance",
      "experience": "Professional experience",
      "teaching": "Teaching experience",
      "skills": "Skills",
      "education": "Education",
      "certifications": "Certifications & courses",
      "languages": "Languages",
      "contact": "Contact",
      "productRole": "Product role",
      "full": "Full résumé",
      "short": "Short résumé (2 pages)",
      "earlier": "Earlier experience",
      "caseStudy": "Case study",
      "viewCase": "View case study",
      "challenge": "The challenge",
      "did": "What I did",
      "decisions": "Key decisions",
      "role": "Role",
      "period": "Period",
      "org": "Organization",
      "stack": "Technology",
      "results": "Results",
      "prev": "Previous case",
      "next": "Next case",
      "of": "of"
    }
  },
  "projects": [
    {
      "id": "flowcol",
      "title": "Flowcol",
      "image": "img/flowcol.png",
      "imageAlt": {
        "es": "Ilustración de un monitor con el panel de un ERP en la nube",
        "en": "Illustration of a monitor showing a cloud ERP dashboard"
      },
      "subtitle": {
        "es": "ERP en la nube (SaaS) para pymes",
        "en": "Cloud ERP (SaaS) for small businesses"
      },
      "role": {
        "es": "Fundador y Product Manager",
        "en": "Founder & Product Manager"
      },
      "period": {
        "es": "Nov 2025 – Actual",
        "en": "Nov 2025 – Present"
      },
      "context": {
        "es": "Muchas pymes llevan sus procesos en Excel o en ERPs sobredimensionados para su tamaño, con procesos manuales propensos a error.",
        "en": "Many small businesses run their operations on Excel or on ERPs built for much larger companies, with error-prone manual processes."
      },
      "did": [
        {
          "es": "Hice user research con los primeros clientes y a partir de ahí definí la propuesta de valor, el MVP y el roadmap.",
          "en": "Ran user research with the first clients and used it to define the value proposition, MVP and roadmap."
        },
        {
          "es": "Dirijo el ciclo completo del producto: discovery, definición funcional, desarrollo, lanzamiento, onboarding de clientes y soporte post-venta.",
          "en": "I run the full product cycle: discovery, functional definition, development, launch, client onboarding and post-sale support."
        },
        {
          "es": "Reemplacé procesos manuales en Excel por flujos automatizados y validados, adaptados a emprendedores y pequeñas empresas.",
          "en": "Replaced manual Excel processes with automated, validated workflows built for entrepreneurs and small businesses."
        }
      ],
      "decisions": [
        {
          "es": "Priorizar los módulos de ventas, compras, inventario, contabilidad, tesorería y terceros.",
          "en": "Prioritize the sales, purchasing, inventory, accounting, treasury and third-party modules."
        },
        {
          "es": "Arquitectura multiempresa con usuarios, roles y permisos por compañía.",
          "en": "Multi-company architecture with users, roles and permissions per company."
        },
        {
          "es": "Facturación electrónica integrada con un proveedor externo mediante un microservicio.",
          "en": "E-invoicing integrated with an external provider through a microservice."
        }
      ],
      "stack": [
        "Node.js",
        "Express",
        "PostgreSQL",
        "React",
        "Tailwind CSS",
        "APIs REST",
        "Render",
        "Cloudflare"
      ],
      "results": [
        {
          "es": "Cinco clientes pagos activos en menos de un año desde el lanzamiento.",
          "en": "Five active paying clients less than a year after launch."
        }
      ],
      "todo": "TODO: añadir métricas de uso o retención, tiempo ahorrado por cliente y capturas reales del producto.",
      "slug": "flowcol",
      "objectives": [],
      "learnings": []
    },
    {
      "id": "gravity",
      "title": "Flow · Gravity Tunnel",
      "image": "img/flow-gravity.png",
      "imageAlt": {
        "es": "Ilustración de una pantalla de control industrial y una app móvil con un medidor de RPM",
        "en": "Illustration of an industrial control screen and a mobile app with an RPM gauge"
      },
      "subtitle": {
        "es": "Control industrial y plataforma de gestión para un túnel de viento",
        "en": "Industrial control and management platform for a wind tunnel"
      },
      "role": {
        "es": "Analista de Soluciones / Desarrollador Full Stack",
        "en": "Solutions Analyst / Full Stack Developer"
      },
      "period": {
        "es": "Mar 2023 – Sep 2026",
        "en": "Mar 2023 – Sep 2026"
      },
      "context": {
        "es": "El túnel necesitaba controlar el variador de frecuencia del motor de forma confiable. Caja, facturación y energía se gestionaban como reportes independientes, y el seguimiento del consumo energético se hacía manualmente fuera del sistema.",
        "en": "The tunnel needed reliable control of the motor's frequency drive. Cash, billing and energy were handled as separate reports, and energy usage was tracked manually outside the system."
      },
      "did": [
        {
          "es": "Diseñé e implementé el control tipo SCADA del variador de frecuencia con comunicación Modbus TCP.",
          "en": "Designed and built SCADA-style control of the frequency drive over Modbus TCP."
        },
        {
          "es": "Implementé telemetría en tiempo real (RPM y % de potencia) por WebSockets a las pantallas de operación y de público, con alertas según el tiempo restante de cada vuelo.",
          "en": "Implemented real-time telemetry (RPM and % power) over WebSockets to operator and public screens, with alerts based on the time left in each flight."
        },
        {
          "es": "Desarrollé una app de control remoto en Flutter (Android) con la misma lógica y telemetría del panel físico.",
          "en": "Built a Flutter (Android) remote-control app with the same logic and telemetry as the physical panel."
        },
        {
          "es": "Definí y lideré Flow, la plataforma interna de gestión administrativa, usuarios, reportes, facturación, cierres operativos y energía.",
          "en": "Defined and led Flow, the internal platform for administration, users, reporting, billing, operational closings and energy."
        }
      ],
      "decisions": [
        {
          "es": "Arquitectura dual-host con canales separados de lectura y escritura, para sostener el control aunque falle un enlace.",
          "en": "Dual-host architecture with separate read and write channels, so control holds even if one link fails."
        },
        {
          "es": "Watchdogs, heartbeats, reconexión automática y verificación de escritura para distinguir «backend conectado» de «señal real del variador».",
          "en": "Watchdogs, heartbeats, automatic reconnection and write verification to tell \"backend connected\" apart from \"real drive signal\"."
        },
        {
          "es": "Backlog priorizado por impacto operativo y costo de implementación, con requerimientos de las áreas de operación y administración.",
          "en": "Backlog prioritized by operational impact and implementation cost, with requirements from operations and administration."
        },
        {
          "es": "Control de acceso con 5 roles sobre más de 15 módulos, según la responsabilidad operativa.",
          "en": "Access control with 5 roles across more than 15 modules, based on operational responsibility."
        }
      ],
      "stack": [
        "Modbus TCP",
        "WebSockets",
        "Flutter (Android)"
      ],
      "results": [
        {
          "es": "Flow es hoy la herramienta central de la operación.",
          "en": "Flow is now the operation's central tool."
        },
        {
          "es": "Caja, facturación y energía se concilian en un único cierre diario.",
          "en": "Cash, billing and energy are reconciled in a single daily closing."
        },
        {
          "es": "El consumo de energía es trazable por zona y se puede auditar.",
          "en": "Energy usage is traceable by zone and can be audited."
        }
      ],
      "todo": "TODO: completar el stack de Flow (backend, base de datos) y añadir métricas de disponibilidad, tiempo de cierre o incidentes.",
      "slug": "flow-gravity-tunnel",
      "objectives": [],
      "learnings": []
    },
    {
      "id": "primer-paso",
      "title": "Primer Paso",
      "image": "img/primer-paso.png",
      "imageAlt": {
        "es": "Ilustración de un teléfono con una app de bienestar",
        "en": "Illustration of a phone with a wellbeing app"
      },
      "subtitle": {
        "es": "App móvil de orientación en salud mental",
        "en": "Mobile app for mental-health guidance"
      },
      "role": {
        "es": "Líder del desarrollo",
        "en": "Development lead"
      },
      "period": {
        "es": "Universidad El Bosque",
        "en": "Universidad El Bosque"
      },
      "periodLabel": "org",
      "context": {
        "es": "Aplicación móvil para el diagnóstico inicial y la orientación en salud mental.",
        "en": "Mobile app for initial mental-health screening and guidance."
      },
      "did": [
        {
          "es": "Lideré el desarrollo de la aplicación desde la definición del alcance hasta la entrega.",
          "en": "Led the app's development from scope definition to delivery."
        }
      ],
      "decisions": [],
      "stack": [
        "Flutter"
      ],
      "results": [
        {
          "es": "Aplicación desarrollada y entregada en la Universidad El Bosque.",
          "en": "App developed and delivered at Universidad El Bosque."
        }
      ],
      "todo": "TODO: público objetivo, alcance funcional, fechas del proyecto, usuarios o resultados de adopción.",
      "slug": "primer-paso",
      "objectives": [],
      "learnings": []
    }
  ]
};
