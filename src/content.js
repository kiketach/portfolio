// ============================================================
// Contenido del sitio — ES / EN
// Edita aquí tu información. Los campos vacíos ("") no se renderizan.
// ============================================================

const links = {
  email: "kiketachira@gmail.com",
  phone: "+57 300 105 7454",
  linkedin: "https://www.linkedin.com/in/enrique-abril-contreras",
  github: "https://github.com/kiketach",
  cv: {
    es: "/cv/CV_Enrique_Abril_2026_ES.pdf",
    en: "/cv/CV_Enrique_Abril_2026_EN.pdf",
  },
};

export const content = {
  es: {
    meta: { name: "Enrique Abril", role: "AI Engineer", city: "Bogotá, CO" },
    nav: {
      projects: "Proyectos",
      cv: "CV",
      interests: "Intereses",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "AI ENGINEER · AGENTES · RAG · PYTHON",
      line1: "IA en producción.",
      line2: "No en demos.",
      bio1:
        "Soy Enrique, AI Engineer en Bogotá. Diseño y llevo a producción agentes conversacionales, sistemas multi-agente y arquitecturas RAG conectadas a procesos de negocio reales.",
      bio2:
        "Trabajo donde la IA toca la operación: WhatsApp, voz en tiempo real, documentos no estructurados. El modelo interpreta; el sistema decide.",
      availability: "Disponible para proyectos y roles remotos (LATAM).",
      ctaProjects: "VER PROYECTOS",
      ctaCv: "DESCARGAR CV",
      ctaContact: "CONTACTO",
      badges: [
        { label: "INGLÉS", value: "B2" },
        { label: "AHORA", value: "AI Engineer @ MimeIA" },
        { label: "EN PRODUCCIÓN", value: "+11 agencias (RentOSO)" },
        { label: "DOCENCIA", value: "Relator de agentes IA · USACH" },
      ],
      marquee: [
        "PYTHON", "FASTAPI", "AGENCY SWARM", "GOOGLE ADK", "VERTEX AI",
        "GEMINI", "LITELLM", "MCP", "RAG", "PGVECTOR", "POSTGRESQL",
        "SUPABASE", "REDIS", "MONGODB", "TYPESCRIPT", "NESTJS", "NEXT.JS",
        "REACT", "CLOUD RUN", "DOCKER", "RAILWAY", "WHATSAPP API",
        "WEBRTC", "ELEVENLABS", "TWILIO", "MULTI-TENANT", "DDD",
        "STRUCTURED OUTPUTS", "GUARDRAILS", "PROMPT ENGINEERING", "BOGOTÁ → REMOTO",
      ],
    },
    projects: {
      eyebrow: "PROYECTOS",
      title1: "Sistemas que ya están",
      title2: "en producción.",
      intro:
        "Plataformas multi-cliente, agentes que atienden de verdad y RAG sobre documentos reales.",
      groups: [
        {
          label: "EN PRODUCCIÓN",
          items: [
            {
              name: "RentOSO",
              tagline: "CRM inmobiliario con IA · SaaS multi-tenant · CTO",
              description:
                "Automatiza el ciclo comercial inmobiliario completo con agentes que atienden por WhatsApp. Google ADK en Vertex AI Agent Engine (Gemini 2.5), FastAPI + NestJS, Supabase con Row-Level Security. Alta de cliente por configuración, sin re-despliegue. +11 agencias activas.",
              tags: ["PYTHON", "FASTAPI", "GOOGLE ADK", "VERTEX AI", "SUPABASE", "WHATSAPP API"],
              links: [],
            },
            {
              name: "MimeIA / Symphonai",
              tagline: "CRM conversacional multi-agente · Full Stack AI Engineer",
              description:
                "Agentes conversacionales por WhatsApp en producción para clínicas, pettech y logística de carga. Orquestación multi-agente con Agency Swarm, capa LLM multi-proveedor con LiteLLM, estado en Redis y despliegue en Railway.",
              tags: ["AGENCY SWARM", "LITELLM", "FASTAPI", "REDIS", "NEXT.JS", "PGVECTOR"],
              links: [],
            },
            {
              name: "KikeMind",
              tagline: "Plataforma IA para developers · proyecto propio en producción",
              description:
                "Mentor técnico y suite de inglés para developers de habla hispana. Voz en tiempo real con Gemini Live sobre Vertex AI, Clean Architecture con puertos/adapters, auth JWT multi-usuario y control de costos por sesión.",
              tags: ["GEMINI LIVE", "FASTAPI", "REACT 19", "CLOUD RUN", "SUPABASE", "CLEAN ARCH"],
              links: [{ label: "VER SITIO", href: "https://kikemind-9420c.web.app" }],
            },
          ],
        },
        {
          label: "RAG EMPRESARIAL",
          items: [
            {
              name: "Audisoft",
              tagline: "Plataforma RAG para auditoría documental · Developer IA",
              description:
                "Consultas en lenguaje natural sobre auditorías y documentación corporativa para clientes enterprise (Banamex, Bancolombia, Ecopetrol). Pipeline ETL propio: SQL Server → chunking → base vectorial, con Azure AI Document Intelligence y OpenAI.",
              tags: ["RAG", "AZURE AI", "OPENAI", "MONGODB", "SQL SERVER", "ETL"],
              links: [],
            },
          ],
        },
        {
          label: "BUILDER",
          items: [
            {
              name: "CommerceEngine / Fyllu",
              tagline: "Comercio conversacional WhatsApp · PYMES LATAM",
              description:
                "CRM + agente IA + POS + web para comercio conversacional por WhatsApp. Cliente piloto en producción (Le Boutique), desplegado en Cloud Run.",
              tags: ["AGENTES", "WHATSAPP API", "CLOUD RUN", "POS"],
              links: [],
            },
            {
              name: "ETL-RAG",
              tagline: "Herramienta RAG sobre documentos no estructurados",
              description:
                "Búsqueda semántica sobre PDF, Word y Excel. Extracción con Azure Document Intelligence, embeddings de OpenAI e índice vectorial en MongoDB Atlas, con UI en Streamlit.",
              tags: ["PYTHON", "STREAMLIT", "MONGODB ATLAS", "AZURE", "EMBEDDINGS"],
              links: [],
            },
            {
              name: "Construye tu primer agente de IA",
              tagline: "Curso · Escuela de Temporada FACTEC, USACH",
              description:
                "Curso de 25 h dictado en la Universidad de Santiago de Chile: anatomía de un agente, tools, MCP, RAG, deploy y agentes de voz con Gemini Live. También relator del Diplomado de Agentes Conversacionales de la U. de Chile.",
              tags: ["DOCENCIA", "MCP", "RAG", "GEMINI LIVE", "USACH"],
              links: [],
            },
          ],
        },
      ],
    },
    skills: {
      eyebrow: "CV Y HABILIDADES",
      title1: "Roles, stack",
      title2: "y formación.",
      intro:
        "Vengo del backend y hoy diseño sistemas donde la IA es una pieza más de la arquitectura: orquestación de agentes, capa LLM, tools, RAG, datos y deploy. Fui CTO de RentOSO y hoy soy Full Stack AI Engineer en MimeIA, donde también llevo la relación técnica con los clientes.",
      experience: [
        {
          period: "2025 — HOY",
          role: "Full Stack AI Engineer & Technical Account Lead",
          place: "MimeIA",
        },
        {
          period: "2025 — 2026",
          role: "CTO & Lead AI Engineer",
          place: "RentOSO (Chile)",
        },
        {
          period: "2024 — 2025",
          role: "Developer · foco en IA",
          place: "Audisoft (México)",
        },
      ],
      groups: [
        {
          num: "01",
          title: "IA y agentes",
          subtitle: "Orquestación, capa LLM y retrieval.",
          clusters: [
            {
              label: "SISTEMAS",
              items: ["Multi-agente (MAS)", "Agency Swarm", "Google ADK", "PydanticAI", "LiteLLM", "MCP", "RAG", "Function calling", "Structured outputs", "Prompt engineering", "Guardrails"],
            },
            {
              label: "MODELOS",
              items: ["Gemini 2.5", "GPT", "Claude", "Gemini Live (voz)", "ElevenLabs"],
            },
          ],
        },
        {
          num: "02",
          title: "Backend",
          subtitle: "APIs y servicios que aguantan producción.",
          clusters: [
            {
              label: "APIS Y RUNTIME",
              items: ["Python", "FastAPI", "asyncio", "Pydantic", "TypeScript", "NestJS", "Next.js", "REST APIs", "WebSockets", "WebRTC"],
            },
          ],
        },
        {
          num: "03",
          title: "Datos y vector",
          subtitle: "Persistencia, aislamiento y búsqueda semántica.",
          clusters: [
            {
              label: "DATOS",
              items: ["PostgreSQL", "Supabase (RLS)", "pgvector", "MongoDB Atlas", "SQL Server", "Redis", "Alembic", "SQLModel"],
            },
          ],
        },
        {
          num: "04",
          title: "Cloud y entrega",
          subtitle: "GCP, CI/CD e integraciones de negocio.",
          clusters: [
            {
              label: "PLATAFORMA",
              items: ["Google Cloud", "Cloud Run", "Vertex AI Agent Engine", "Secret Manager", "Docker", "Railway", "Firebase", "Azure", "CI/CD", "GitHub Actions"],
            },
            {
              label: "INTEGRACIONES",
              items: ["WhatsApp Business API", "Mercado Libre", "Twilio", "Floid", "Cal.com", "Webhooks", "OAuth"],
            },
          ],
        },
      ],
      languages: {
        title: "Idiomas",
        items: [
          { name: "Español", level: "Nativo" },
          { name: "Inglés", level: "B2 — intermedio alto" },
        ],
      },
      education: {
        title: "Formación",
        items: [
          { name: "Ing. Informática", place: "U. Nacional Experimental del Táchira" },
          { name: "Desarrollo Full Stack (Java)", place: "Generation Colombia · 2023" },
          { name: "Front-end / apps web", place: "BIT — Bogotá Institute of Technology · 2022–2023" },
          { name: "AI-900 · DP-900", place: "Microsoft Azure Fundamentals" },
        ],
      },
    },
    interests: {
      eyebrow: "INTERESES",
      title1: "Cosas que disfruto",
      title2: "fuera del código.",
      intro: "Lo que hago cuando cierro el editor.",
      items: [
        { label: "ENSEÑANDO", title: "Docencia", text: "Le enseño agentes de IA a profesionales: dicté un curso en la USACH y soy relator de un diplomado en la U. de Chile." },
        { label: "SONANDO BAJO", title: "Música chill", text: "Siempre hay algo sonando de fondo: música tranquila para programar, pensar o simplemente desconectar." },
        { label: "EN LA LECTURA", title: "Biografías", text: "Me enganchan las vidas de builders — Steve Jobs y Elon Musk de Walter Isaacson son de mis favoritas." },
        { label: "PRÓXIMO DESTINO", title: "Viajar", text: "Me gusta mucho viajar: conocer ciudades nuevas, su comida y su gente. Siempre con el siguiente destino en mente." },
      ],
    },
    contact: {
      eyebrow: "CONTACTO",
      title1: "Hablemos.",
      title2: "Te respondo pronto.",
      emailLabel: "CORREO",
      phoneLabel: "TELÉFONO",
      locationLabel: "UBICACIÓN",
      location: "Bogotá, CO",
      availabilityLabel: "DISPONIBILIDAD",
      availability: "Proyectos y roles remotos (LATAM)",
      cta: "ESCRÍBEME →",
      note: "Si te va mejor, LinkedIn también vale.",
    },
    footer: {
      tagline: "Este sitio también es un proyecto mío: lo diseñé y lo desarrollé.",
      navigate: "NAVEGAR",
      contactTitle: "CONTACTO",
      rights: "© 2026 Enrique Abril, Bogotá, CO",
    },
    links,
  },

  en: {
    meta: { name: "Enrique Abril", role: "AI Engineer", city: "Bogotá, CO" },
    nav: {
      projects: "Projects",
      cv: "CV",
      interests: "Interests",
      contact: "Contact",
    },
    hero: {
      eyebrow: "AI ENGINEER · AGENTS · RAG · PYTHON",
      line1: "AI in production.",
      line2: "Not in demos.",
      bio1:
        "I'm Enrique, an AI Engineer in Bogotá. I design and ship conversational agents, multi-agent systems and RAG architectures wired into real business processes.",
      bio2:
        "I work where AI meets operations: WhatsApp, real-time voice, unstructured documents. The model interprets; the system decides.",
      availability: "Open to remote projects and roles (LATAM).",
      ctaProjects: "SEE PROJECTS",
      ctaCv: "DOWNLOAD CV",
      ctaContact: "CONTACT",
      badges: [
        { label: "ENGLISH", value: "B2" },
        { label: "NOW", value: "AI Engineer @ MimeIA" },
        { label: "IN PRODUCTION", value: "+11 agencies (RentOSO)" },
        { label: "TEACHING", value: "AI agents lecturer · USACH" },
      ],
      marquee: [
        "PYTHON", "FASTAPI", "AGENCY SWARM", "GOOGLE ADK", "VERTEX AI",
        "GEMINI", "LITELLM", "MCP", "RAG", "PGVECTOR", "POSTGRESQL",
        "SUPABASE", "REDIS", "MONGODB", "TYPESCRIPT", "NESTJS", "NEXT.JS",
        "REACT", "CLOUD RUN", "DOCKER", "RAILWAY", "WHATSAPP API",
        "WEBRTC", "ELEVENLABS", "TWILIO", "MULTI-TENANT", "DDD",
        "STRUCTURED OUTPUTS", "GUARDRAILS", "PROMPT ENGINEERING", "BOGOTÁ → REMOTE",
      ],
    },
    projects: {
      eyebrow: "PROJECTS",
      title1: "Systems already",
      title2: "in production.",
      intro:
        "Multi-tenant platforms, agents that actually answer, and RAG over real documents.",
      groups: [
        {
          label: "IN PRODUCTION",
          items: [
            {
              name: "RentOSO",
              tagline: "Real-estate CRM with AI · multi-tenant SaaS · CTO",
              description:
                "Automates the full real-estate sales cycle with WhatsApp agents. Google ADK on Vertex AI Agent Engine (Gemini 2.5), FastAPI + NestJS, Supabase with Row-Level Security. New-client onboarding is configuration, not redeployment. +11 agencies live.",
              tags: ["PYTHON", "FASTAPI", "GOOGLE ADK", "VERTEX AI", "SUPABASE", "WHATSAPP API"],
              links: [],
            },
            {
              name: "MimeIA / Symphonai",
              tagline: "Multi-agent conversational CRM · Full Stack AI Engineer",
              description:
                "WhatsApp conversational agents in production for clinics, pettech and freight logistics. Multi-agent orchestration with Agency Swarm, multi-provider LLM layer via LiteLLM, state in Redis, deployed on Railway.",
              tags: ["AGENCY SWARM", "LITELLM", "FASTAPI", "REDIS", "NEXT.JS", "PGVECTOR"],
              links: [],
            },
            {
              name: "KikeMind",
              tagline: "AI platform for developers · own product, in production",
              description:
                "Technical mentor and English practice suite for Spanish-speaking developers. Real-time voice with Gemini Live on Vertex AI, Clean Architecture with ports/adapters, multi-user JWT auth and per-session cost control.",
              tags: ["GEMINI LIVE", "FASTAPI", "REACT 19", "CLOUD RUN", "SUPABASE", "CLEAN ARCH"],
              links: [{ label: "VISIT SITE", href: "https://kikemind-9420c.web.app" }],
            },
          ],
        },
        {
          label: "ENTERPRISE RAG",
          items: [
            {
              name: "Audisoft",
              tagline: "RAG platform for document auditing · AI Developer",
              description:
                "Natural-language queries over internal audits and corporate documentation for enterprise clients (Banamex, Bancolombia, Ecopetrol). Custom ETL pipeline: SQL Server → chunking → vector store, with Azure AI Document Intelligence and OpenAI.",
              tags: ["RAG", "AZURE AI", "OPENAI", "MONGODB", "SQL SERVER", "ETL"],
              links: [],
            },
          ],
        },
        {
          label: "BUILDER",
          items: [
            {
              name: "CommerceEngine / Fyllu",
              tagline: "WhatsApp conversational commerce · LATAM SMBs",
              description:
                "CRM + AI agent + POS + web for WhatsApp conversational commerce. Pilot client in production (Le Boutique), deployed on Cloud Run.",
              tags: ["AGENTS", "WHATSAPP API", "CLOUD RUN", "POS"],
              links: [],
            },
            {
              name: "ETL-RAG",
              tagline: "RAG tooling over unstructured documents",
              description:
                "Semantic search over PDF, Word and Excel. Extraction with Azure Document Intelligence, OpenAI embeddings and a vector index in MongoDB Atlas, with a Streamlit UI.",
              tags: ["PYTHON", "STREAMLIT", "MONGODB ATLAS", "AZURE", "EMBEDDINGS"],
              links: [],
            },
            {
              name: "Build your first AI agent",
              tagline: "Course · FACTEC Summer School, USACH",
              description:
                "25-hour course taught at Universidad de Santiago de Chile: agent anatomy, tools, MCP, RAG, deployment and voice agents with Gemini Live. Also a lecturer for the Conversational Agents diploma at Universidad de Chile.",
              tags: ["TEACHING", "MCP", "RAG", "GEMINI LIVE", "USACH"],
              links: [],
            },
          ],
        },
      ],
    },
    skills: {
      eyebrow: "CV & SKILLS",
      title1: "Roles, stack",
      title2: "and education.",
      intro:
        "I come from backend and now design systems where AI is one more architectural piece: agent orchestration, LLM layer, tools, RAG, data and deploy. I was CTO at RentOSO and I'm now Full Stack AI Engineer at MimeIA, where I also own the technical relationship with clients.",
      experience: [
        {
          period: "2025 — NOW",
          role: "Full Stack AI Engineer & Technical Account Lead",
          place: "MimeIA",
        },
        {
          period: "2025 — 2026",
          role: "CTO & Lead AI Engineer",
          place: "RentOSO (Chile)",
        },
        {
          period: "2024 — 2025",
          role: "Developer · AI focus",
          place: "Audisoft (Mexico)",
        },
      ],
      groups: [
        {
          num: "01",
          title: "AI & agents",
          subtitle: "Orchestration, LLM layer and retrieval.",
          clusters: [
            {
              label: "SYSTEMS",
              items: ["Multi-agent (MAS)", "Agency Swarm", "Google ADK", "PydanticAI", "LiteLLM", "MCP", "RAG", "Function calling", "Structured outputs", "Prompt engineering", "Guardrails"],
            },
            {
              label: "MODELS",
              items: ["Gemini 2.5", "GPT", "Claude", "Gemini Live (voice)", "ElevenLabs"],
            },
          ],
        },
        {
          num: "02",
          title: "Backend",
          subtitle: "APIs and services that survive production.",
          clusters: [
            {
              label: "APIS & RUNTIME",
              items: ["Python", "FastAPI", "asyncio", "Pydantic", "TypeScript", "NestJS", "Next.js", "REST APIs", "WebSockets", "WebRTC"],
            },
          ],
        },
        {
          num: "03",
          title: "Data & vector",
          subtitle: "Persistence, isolation and semantic search.",
          clusters: [
            {
              label: "DATA",
              items: ["PostgreSQL", "Supabase (RLS)", "pgvector", "MongoDB Atlas", "SQL Server", "Redis", "Alembic", "SQLModel"],
            },
          ],
        },
        {
          num: "04",
          title: "Cloud & delivery",
          subtitle: "GCP, CI/CD and business integrations.",
          clusters: [
            {
              label: "PLATFORM",
              items: ["Google Cloud", "Cloud Run", "Vertex AI Agent Engine", "Secret Manager", "Docker", "Railway", "Firebase", "Azure", "CI/CD", "GitHub Actions"],
            },
            {
              label: "INTEGRATIONS",
              items: ["WhatsApp Business API", "Mercado Libre", "Twilio", "Floid", "Cal.com", "Webhooks", "OAuth"],
            },
          ],
        },
      ],
      languages: {
        title: "Languages",
        items: [
          { name: "Spanish", level: "Native" },
          { name: "English", level: "B2 — upper intermediate" },
        ],
      },
      education: {
        title: "Education",
        items: [
          { name: "Computer Engineering", place: "U. Nacional Experimental del Táchira" },
          { name: "Full Stack Development (Java)", place: "Generation Colombia · 2023" },
          { name: "Front-end / web apps", place: "BIT — Bogotá Institute of Technology · 2022–2023" },
          { name: "AI-900 · DP-900", place: "Microsoft Azure Fundamentals" },
        ],
      },
    },
    interests: {
      eyebrow: "INTERESTS",
      title1: "Things I enjoy",
      title2: "outside of code.",
      intro: "What I do when I close the editor.",
      items: [
        { label: "TEACHING", title: "Teaching", text: "I teach AI agents to professionals: I taught a course at USACH and lecture in a diploma program at Universidad de Chile." },
        { label: "PLAYING LOW", title: "Chill music", text: "There's always something playing in the background: calm music to code, think, or just disconnect." },
        { label: "CURRENTLY READING", title: "Biographies", text: "I'm hooked on the lives of builders — Walter Isaacson's Steve Jobs and Elon Musk are among my favorites." },
        { label: "NEXT DESTINATION", title: "Travel", text: "I love traveling: new cities, their food and their people. Always with the next destination in mind." },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title1: "Let's talk.",
      title2: "I'll reply soon.",
      emailLabel: "EMAIL",
      phoneLabel: "PHONE",
      locationLabel: "LOCATION",
      location: "Bogotá, CO",
      availabilityLabel: "AVAILABILITY",
      availability: "Remote projects and roles (LATAM)",
      cta: "WRITE ME →",
      note: "LinkedIn works too, if that's easier.",
    },
    footer: {
      tagline: "This site is also a project of mine: I designed and built it.",
      navigate: "NAVIGATE",
      contactTitle: "CONTACT",
      rights: "© 2026 Enrique Abril, Bogotá, CO",
    },
    links,
  },
};
