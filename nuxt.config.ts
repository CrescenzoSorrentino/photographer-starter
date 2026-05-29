// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  modules: ["@nuxt/icon"],

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&display=swap" },
      ],
    },
  },

  runtimeConfig: {
    public: {
      // Colori
      background: "#0a0a0a",
      surface: "#141414",
      foreground: "#f0ede8",
      foregroundMuted: "rgba(240, 237, 232, 0.65)",
      muted: "#7a7a7a",
      accent: "#d4924a",

      // Tipografia
      fontSans: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
      fontDisplay: "'Bebas Neue', sans-serif",

      // Brand
      brandName: "Mario Rossi",
      ctaLabel:  "Vuoi immortalare il tuo giorno speciale?",
      ctaTitle:  "Parliamo del tuo evento",
      ctaButton: "Scrivimi",
      phone: "+39 333 1234567",
      email: "mario@rossi.it",

      // About
      aboutPhoto: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=900&q=80&fit=crop&crop=faces",
      aboutName:  "Mario Rossi",
      aboutBio:      "Fotografo di matrimoni e ritratti con sede a Milano. Racconto storie attraverso la luce, i dettagli e le emozioni autentiche del vostro giorno speciale.",
      aboutServices: "Fotografia matrimoni,Video making,Ritratti & Book,Reportage eventi,Pre-matrimonio,Drone & Aerial",

      // Social
      instagram: "https://instagram.com/mariorossi",
      facebook: "https://facebook.com/mariorossi",

      // Hero videos
      heroVideoEvento1: "/evento-1.mp4",
      heroVideoEvento2: "/evento-2.mp4",
      heroVideoEvento3: "/evento-3.mp4",
      heroPoster: "/hero-poster.png",
      heroPoster1: "/hero-poster.png",
      heroPoster2: "/hero-poster.png",
      heroPoster3: "/hero-poster.png",

      // Hero labels
      heroLabelEvento1: "Evento 1",
      heroLabelEvento2: "Evento 2",
      heroLabelEvento3: "Evento 3",

      // Eventi grid
      event1Title:       "Matrimonio Rossi & Bianchi",
      event1Subtitle:    "Milano, Giugno 2024",
      event1Image:       "/evento-1.jpg",
      event1HeroImage:   "/evento-2.jpg",
      event1Slug:        "matrimonio-rossi-bianchi",
      event1Orientation: "portrait",
      event1Type:        "image",
      event1Poster:      "",
      event1Photos:      "/evento-1.jpg,/evento-2.jpg,/evento-3.jpg,/evento-4.jpg,/evento-5.jpg,/evento-6-poster.jpg",

      event2Title:       "Matrimonio Ferrari & Esposito",
      event2Subtitle:    "Roma, Settembre 2024",
      event2Image:       "/evento-2.jpg",
      event2HeroImage:   "/evento-2.jpg",
      event2Slug:        "matrimonio-ferrari-esposito",
      event2Orientation: "landscape",
      event2Type:        "image",
      event2Poster:      "",
      event2Photos:      "/evento-2.jpg,/evento-1.jpg,/evento-3.jpg,/evento-4.jpg,/evento-5.jpg",

      event3Title:       "Matrimonio Conti & Romano",
      event3Subtitle:    "Napoli, Ottobre 2024",
      event3Image:       "/evento-3.jpg",
      event3HeroImage:   "/evento-2.jpg",
      event3Slug:        "matrimonio-conti-romano",
      event3Orientation: "portrait",
      event3Type:        "image",
      event3Poster:      "",
      event3Photos:      "/evento-3.jpg,/evento-4.jpg,/evento-5.jpg,/evento-1.jpg",

      event4Title:       "Matrimonio Greco & Ricci",
      event4Subtitle:    "Firenze, Luglio 2024",
      event4Image:       "/evento-4.jpg",
      event4HeroImage:   "/evento-6-poster.jpg",
      event4Slug:        "matrimonio-greco-ricci",
      event4Orientation: "portrait",
      event4Type:        "image",
      event4Poster:      "",
      event4Photos:      "/evento-4.jpg,/evento-5.jpg,/evento-2.jpg,/evento-3.jpg",

      event5Title:       "Matrimonio Marino & Costa",
      event5Subtitle:    "Venezia, Agosto 2024",
      event5Image:       "/evento-5.jpg",
      event5HeroImage:   "/evento-6-poster.jpg",
      event5Slug:        "matrimonio-marino-costa",
      event5Orientation: "portrait",
      event5Type:        "image",
      event5Poster:      "",
      event5Photos:      "/evento-5.jpg,/evento-1.jpg,/evento-4.jpg,/evento-6-poster.jpg",

      event6Title:       "Matrimonio Bruno & Serra",
      event6Subtitle:    "Amalfi, Settembre 2024",
      event6Image:       "/evento-6.mp4",
      event6HeroImage:   "/evento-6-poster.jpg",
      event6Slug:        "matrimonio-bruno-serra",
      event6Orientation: "landscape",
      event6Type:        "video",
      event6Poster:      "/evento-6-poster.jpg",
      event6Photos:      "/evento-6-poster.jpg,/evento-3.jpg,/evento-2.jpg,/evento-5.jpg",
    },
  },
});
