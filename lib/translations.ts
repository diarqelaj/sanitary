export type Language = 'de' | 'en' | 'fr' | 'es' | 'sq'

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'sq', label: 'Shqip', flag: '🇦🇱' },
]

export type TranslationKey = typeof translations.de

export const translations = {
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    hero: {
      badge: '⚡ Notdienst 24/7 verfügbar',
      headline1: 'Ihr Klempner',
      headline2: 'in Oberhausen.',
      subline:
        'Schnell. Zuverlässig. Fair. Ob Rohrbruch um Mitternacht oder geplante Badsanierung — wir sind für Sie da.',
      cta_whatsapp: 'WhatsApp schreiben',
      cta_call: 'Jetzt anrufen',
      scroll_hint: 'Mehr entdecken',
    },
    services: {
      title: 'Unsere Leistungen',
      subtitle:
        'Von der Notfallreparatur bis zur kompletten Badsanierung — professionelle Sanitärarbeit aus einer Hand.',
      items: [
        {
          title: 'Notdienst 24/7',
          description:
            'Kein Wasseraustritt wartet auf den nächsten Morgen. Wir sind rund um die Uhr erreichbar — auch an Wochenenden und Feiertagen.',
        },
        {
          title: 'Rohrreinigung',
          description:
            'Verstopfte Abflüsse und Rohre schnell und gründlich beseitigt. Modernste Technik für nachhaltige Ergebnisse.',
        },
        {
          title: 'Heizungsinstallation',
          description:
            'Einbau, Wartung und Reparatur von Heizsystemen. Energieeffiziente Lösungen für Ihr Zuhause.',
        },
        {
          title: 'Badsanierung',
          description:
            'Komplettumbau oder einzelne Reparaturen — wir gestalten Ihr Traumbad nach Ihren Wünschen.',
        },
        {
          title: 'Lecksuche',
          description:
            'Zerstörungsfreie Ortung von Wasserschäden und versteckten Leitungsbrüchen. Schnell und präzise.',
        },
        {
          title: 'Sanitärinstallation',
          description:
            'Neuinstallation und Umbau von Wasserleitungen, Armaturen und Sanitäranlagen aller Art.',
        },
      ],
    },
    stats: [
      { value: '10+', label: 'Jahre Erfahrung' },
      { value: '24/7', label: 'Notdienst' },
      { value: '500+', label: 'Projekte' },
      { value: '<60 Min', label: 'Reaktionszeit' },
    ],
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle:
        'Wählen Sie Ihren bevorzugten Kanal. Wir antworten so schnell wie möglich — für Notfälle sofort.',
      hours_label: 'Reguläre Öffnungszeiten',
      hours_value: 'Mo – Fr, 08:00 – 18:00 Uhr',
      emergency_label: 'Notdienst',
      emergency_value: 'Täglich, 24 Stunden',
      area_label: 'Einsatzgebiet',
      area_value: 'Oberhausen, Essen, Mülheim, Duisburg',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Schreiben Sie uns — wir melden uns schnellstmöglich zurück.',
        cta: 'Chat öffnen',
      },
      telegram: {
        title: 'Telegram',
        description: 'Alternativ erreichen Sie uns auch über Telegram.',
        cta: 'Telegram öffnen',
      },
      phone: {
        title: 'Telefon',
        description: 'Für dringende Anliegen — direkter Draht zum Meister.',
        cta: 'Anrufen',
      },
    },
    blog: {
      title: 'Ratgeber & Tipps',
      subtitle:
        'Nützliche Infos rund um Sanitär, Heizung und Wasser — direkt vom Fachmann.',
      read_more: 'Weiterlesen',
      back: '← Zurück zum Blog',
      min_read: 'Min. Lesezeit',
      by: 'von',
    },
    footer: {
      tagline: 'Ihr zuverlässiger Sanitärpartner in Oberhausen und Umgebung.',
      rights: 'Alle Rechte vorbehalten.',
      emergency_cta: 'Notfall? Jetzt anrufen',
      links: {
        imprint: 'Impressum',
        privacy: 'Datenschutz',
      },
    },
    phone_modal: {
      title: 'Jetzt anrufen',
      hint_desktop: 'Auf dem Desktop? Nutzen Sie Skype, FaceTime oder Ihr Smartphone.',
      hint_mobile: 'Tippt auf die Nummer, um den Anruf zu starten.',
      close: 'Schließen',
    },
    whatsapp_message:
      'Hallo! Ich möchte gerne einen Termin vereinbaren. Meine bevorzugten Zeiten: Montag bis Freitag, 8–18 Uhr. Bitte melden Sie sich bei mir. Danke!',
    whyUs: {
      eyebrow: 'Warum wir',
      heading1: 'Handwerk mit',
      headingHighlight: 'Verantwortung',
      heading2: '— seit zwei Jahrzehnten.',
      para1:
        'Sanitär- und Heizungsprobleme kennen keine Geschäftszeiten. Deshalb stehen wir Ihnen 24 Stunden am Tag zur Seite — nicht als anonymes Callcenter, sondern als vertrauter Handwerksbetrieb aus Ihrer Nachbarschaft.',
      para2:
        'Was uns von anderen unterscheidet? Wir kommen pünktlich, arbeiten sauber und erklären Ihnen verständlich, was gemacht wurde und warum. Kein Fachjargon, keine überhöhten Rechnungen — nur ehrliche Arbeit.',
      badges: ['Zertifizierter Fachbetrieb', 'Meisterbetrieb', 'DVGW-Mitglied'],
      statValue: '98',
      statLabel: 'Kundenzufriedenheit',
      yearsValue: '20+',
      yearsLabel: 'Jahre Erfahrung',
      pillars: [
        {
          title: 'Schnelle Reaktionszeit',
          body: 'Im Notfall sind wir innerhalb von 60 Minuten bei Ihnen — rund um die Uhr, 365 Tage im Jahr. Kein Warteschleifen, kein Vertrösten.',
        },
        {
          title: 'Festpreisgarantie',
          body: 'Sie erhalten vor jedem Einsatz einen transparenten Festpreis. Keine bösen Überraschungen auf der Rechnung — das ist unser Versprechen.',
        },
        {
          title: '20+ Jahre Erfahrung',
          body: 'Unser Team löst täglich Sanitär- und Heizungsprobleme in Oberhausen und Umgebung. Von der einfachen Reparatur bis zur kompletten Badsanierung.',
        },
        {
          title: '5 Jahre Garantie',
          body: 'Auf alle unsere Installationsarbeiten geben wir 5 Jahre Gewährleistung. Qualität, die hält — oder wir kommen kostenlos zurück.',
        },
      ],
      approach: {
        eyebrow: 'Unser Ansatz',
        heading1: 'Wir lösen das Problem —',
        headingHighlight: 'beim ersten Besuch.',
        para1:
          'Viele Kunden berichten, dass andere Betriebe mehrfach kommen mussten, bis das Problem wirklich behoben war. Bei uns ist das anders: Unsere Techniker kommen mit dem richtigen Werkzeug, den passenden Ersatzteilen und dem Know-how, das es braucht.',
        para2:
          'Ob Rohrbruch mitten in der Nacht, eine defekte Heizung im Winter oder eine komplette Badsanierung — wir planen jeden Einsatz so, dass Sie danach keine Gedanken mehr daran verschwenden müssen.',
        checklist: [
          'Kostenlose Ersteinschätzung am Telefon',
          'Modernste Diagnosetechnik (Kamera, Leckorter)',
          'Eigenes Ersatzteillager — keine langen Lieferzeiten',
          'Saubere Arbeitsweise, vollständige Aufräumung danach',
          'Rechnung sofort nach Abschluss — keine Überraschungen',
        ],
        badgeActive: 'Notdienst aktiv',
        badgeTime: 'Ø Reaktionszeit 45 Min.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      badge: '⚡ Emergency service available 24/7',
      headline1: 'Your Plumber',
      headline2: 'in Oberhausen.',
      subline:
        'Fast. Reliable. Fair. Whether it\'s a burst pipe at midnight or a planned bathroom renovation — we\'re here for you.',
      cta_whatsapp: 'Message on WhatsApp',
      cta_call: 'Call us now',
      scroll_hint: 'Discover more',
    },
    services: {
      title: 'Our Services',
      subtitle:
        'From emergency repairs to complete bathroom renovations — professional plumbing work from a single source.',
      items: [
        {
          title: '24/7 Emergency Service',
          description:
            'No water leak waits until morning. We\'re available around the clock — including weekends and public holidays.',
        },
        {
          title: 'Pipe Cleaning',
          description:
            'Blocked drains and pipes cleared quickly and thoroughly. State-of-the-art technology for lasting results.',
        },
        {
          title: 'Heating Installation',
          description:
            'Installation, maintenance and repair of heating systems. Energy-efficient solutions for your home.',
        },
        {
          title: 'Bathroom Renovation',
          description:
            'Full refurbishment or individual repairs — we design your dream bathroom to your specifications.',
        },
        {
          title: 'Leak Detection',
          description:
            'Non-destructive detection of water damage and hidden pipe breaks. Fast and precise.',
        },
        {
          title: 'Sanitary Installation',
          description:
            'New installation and conversion of water pipes, fittings and sanitary facilities of all kinds.',
        },
      ],
    },
    stats: [
      { value: '10+', label: 'Years of experience' },
      { value: '24/7', label: 'Emergency service' },
      { value: '500+', label: 'Projects completed' },
      { value: '<60 min', label: 'Response time' },
    ],
    contact: {
      title: 'Get in touch',
      subtitle:
        'Choose your preferred channel. We respond as quickly as possible — immediately for emergencies.',
      hours_label: 'Regular opening hours',
      hours_value: 'Mon – Fri, 08:00 – 18:00',
      emergency_label: 'Emergency service',
      emergency_value: 'Daily, 24 hours',
      area_label: 'Service area',
      area_value: 'Oberhausen, Essen, Mülheim, Duisburg',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Message us — we\'ll get back to you as soon as possible.',
        cta: 'Open chat',
      },
      telegram: {
        title: 'Telegram',
        description: 'You can also reach us via Telegram.',
        cta: 'Open Telegram',
      },
      phone: {
        title: 'Phone',
        description: 'For urgent matters — a direct line to the master plumber.',
        cta: 'Call now',
      },
    },
    blog: {
      title: 'Guides & Tips',
      subtitle:
        'Useful information about plumbing, heating and water — straight from the expert.',
      read_more: 'Read more',
      back: '← Back to Blog',
      min_read: 'min read',
      by: 'by',
    },
    footer: {
      tagline: 'Your reliable plumbing partner in Oberhausen and the surrounding area.',
      rights: 'All rights reserved.',
      emergency_cta: 'Emergency? Call now',
      links: {
        imprint: 'Imprint',
        privacy: 'Privacy Policy',
      },
    },
    phone_modal: {
      title: 'Call us now',
      hint_desktop: 'On desktop? Use Skype, FaceTime or your smartphone.',
      hint_mobile: 'Tap the number to start the call.',
      close: 'Close',
    },
    whatsapp_message:
      'Hello! I\'d like to schedule an appointment. My preferred times are Monday to Friday, 8am – 6pm. Please get back to me. Thank you!',
    whyUs: {
      eyebrow: 'Why us',
      heading1: 'Craftsmanship with',
      headingHighlight: 'Responsibility',
      heading2: '— for two decades.',
      para1:
        'Plumbing and heating problems don\'t keep business hours. That\'s why we\'re by your side 24 hours a day — not as an anonymous call centre, but as a trusted local trade business from your neighbourhood.',
      para2:
        'What sets us apart? We arrive on time, work cleanly and explain clearly what was done and why. No jargon, no inflated bills — just honest work.',
      badges: ['Certified specialist', 'Master craftsman', 'DVGW member'],
      statValue: '98',
      statLabel: 'Customer satisfaction',
      yearsValue: '20+',
      yearsLabel: 'Years of experience',
      pillars: [
        {
          title: 'Fast response time',
          body: 'In an emergency we are with you within 60 minutes — around the clock, 365 days a year. No hold music, no delays.',
        },
        {
          title: 'Fixed-price guarantee',
          body: 'You receive a transparent fixed price before every job. No nasty surprises on the bill — that is our promise.',
        },
        {
          title: '20+ years of experience',
          body: 'Our team solves plumbing and heating problems daily in Oberhausen and the surrounding area. From simple repairs to complete bathroom renovations.',
        },
        {
          title: '5-year guarantee',
          body: 'We provide a 5-year warranty on all our installation work. Quality that lasts — or we come back free of charge.',
        },
      ],
      approach: {
        eyebrow: 'Our approach',
        heading1: 'We solve the problem —',
        headingHighlight: 'on the first visit.',
        para1:
          'Many customers report that other companies had to come multiple times before the problem was actually fixed. We do things differently: our technicians arrive with the right tools, the correct spare parts and the know-how it takes.',
        para2:
          'Whether it\'s a burst pipe in the middle of the night, a broken heating system in winter or a complete bathroom renovation — we plan every job so that you won\'t have to think about it again afterwards.',
        checklist: [
          'Free initial assessment over the phone',
          'State-of-the-art diagnostic technology (camera, leak detector)',
          'In-house spare parts stock — no long delivery times',
          'Clean working practice, full clean-up afterwards',
          'Invoice immediately after completion — no surprises',
        ],
        badgeActive: 'Emergency service active',
        badgeTime: 'Avg. response time 45 min.',
      },
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      badge: '⚡ Service d\'urgence 24h/24',
      headline1: 'Votre plombier',
      headline2: 'à Oberhausen.',
      subline:
        'Rapide. Fiable. Honnête. Que ce soit une fuite à minuit ou une rénovation planifiée — nous sommes là pour vous.',
      cta_whatsapp: 'Écrire sur WhatsApp',
      cta_call: 'Appeler maintenant',
      scroll_hint: 'Découvrir plus',
    },
    services: {
      title: 'Nos Services',
      subtitle:
        'De la réparation d\'urgence à la rénovation complète de la salle de bain — une solution professionnelle.',
      items: [
        {
          title: 'Urgences 24h/24',
          description:
            'Aucune fuite d\'eau n\'attend le lendemain matin. Disponible à toute heure, week-ends et jours fériés inclus.',
        },
        {
          title: 'Débouchage',
          description:
            'Canalisations et évacuations débouchées rapidement et efficacement grâce aux techniques modernes.',
        },
        {
          title: 'Installation chauffage',
          description:
            'Pose, entretien et réparation des systèmes de chauffage. Solutions économiques pour votre foyer.',
        },
        {
          title: 'Rénovation salle de bain',
          description:
            'Transformation complète ou réparations ponctuelles — nous créons la salle de bain de vos rêves.',
        },
        {
          title: 'Recherche de fuites',
          description:
            'Détection non destructive des dégâts des eaux et canalisations endommagées. Rapide et précis.',
        },
        {
          title: 'Installation sanitaire',
          description:
            'Nouvelle installation et transformation des canalisations, robinetterie et équipements sanitaires.',
        },
      ],
    },
    stats: [
      { value: '10+', label: 'Ans d\'expérience' },
      { value: '24/7', label: 'Service urgences' },
      { value: '500+', label: 'Projets réalisés' },
      { value: '<60 Min', label: 'Temps de réponse' },
    ],
    contact: {
      title: 'Nous contacter',
      subtitle:
        'Choisissez votre canal préféré. Nous répondons le plus vite possible — immédiatement pour les urgences.',
      hours_label: 'Horaires réguliers',
      hours_value: 'Lun – Ven, 08h00 – 18h00',
      emergency_label: 'Service d\'urgence',
      emergency_value: 'Tous les jours, 24h/24',
      area_label: 'Zone d\'intervention',
      area_value: 'Oberhausen, Essen, Mülheim, Duisbourg',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Écrivez-nous — nous répondrons dans les plus brefs délais.',
        cta: 'Ouvrir le chat',
      },
      telegram: {
        title: 'Telegram',
        description: 'Vous pouvez aussi nous joindre via Telegram.',
        cta: 'Ouvrir Telegram',
      },
      phone: {
        title: 'Téléphone',
        description: 'Pour les urgences — ligne directe avec le maître artisan.',
        cta: 'Appeler',
      },
    },
    blog: {
      title: 'Conseils & Astuces',
      subtitle:
        'Informations utiles sur la plomberie, le chauffage et l\'eau — directement du professionnel.',
      read_more: 'Lire la suite',
      back: '← Retour au blog',
      min_read: 'min de lecture',
      by: 'par',
    },
    footer: {
      tagline: 'Votre partenaire sanitaire de confiance à Oberhausen et ses environs.',
      rights: 'Tous droits réservés.',
      emergency_cta: 'Urgence ? Appeler',
      links: {
        imprint: 'Mentions légales',
        privacy: 'Confidentialité',
      },
    },
    phone_modal: {
      title: 'Appeler maintenant',
      hint_desktop: 'Sur ordinateur ? Utilisez Skype, FaceTime ou votre smartphone.',
      hint_mobile: 'Appuyez sur le numéro pour lancer l\'appel.',
      close: 'Fermer',
    },
    whatsapp_message:
      'Bonjour ! Je souhaite prendre rendez-vous. Mes horaires préférés : du lundi au vendredi, de 8h à 18h. Merci de me recontacter !',
    whyUs: {
      eyebrow: 'Pourquoi nous',
      heading1: 'Artisanat avec',
      headingHighlight: 'Responsabilité',
      heading2: '— depuis deux décennies.',
      para1:
        'Les problèmes de plomberie et de chauffage ne connaissent pas les heures d\'ouverture. C\'est pourquoi nous sommes à vos côtés 24h/24 — non pas comme un centre d\'appels anonyme, mais comme une entreprise artisanale de confiance de votre quartier.',
      para2:
        'Ce qui nous différencie des autres ? Nous arrivons à l\'heure, travaillons proprement et vous expliquons clairement ce qui a été fait et pourquoi. Pas de jargon technique, pas de factures gonflées — juste un travail honnête.',
      badges: ['Entreprise certifiée', 'Maître artisan', 'Membre DVGW'],
      statValue: '98',
      statLabel: 'Satisfaction client',
      yearsValue: '20+',
      yearsLabel: 'Ans d\'expérience',
      pillars: [
        {
          title: 'Intervention rapide',
          body: 'En cas d\'urgence, nous sommes chez vous en 60 minutes — 24h/24, 365 jours par an. Pas de musique d\'attente, pas de délais inutiles.',
        },
        {
          title: 'Garantie prix fixe',
          body: 'Vous recevez un prix fixe transparent avant chaque intervention. Pas de mauvaises surprises sur la facture — c\'est notre promesse.',
        },
        {
          title: '20+ ans d\'expérience',
          body: 'Notre équipe résout chaque jour des problèmes de plomberie et de chauffage à Oberhausen et dans les environs. De la simple réparation à la rénovation complète.',
        },
        {
          title: 'Garantie 5 ans',
          body: 'Nous offrons une garantie de 5 ans sur tous nos travaux d\'installation. Une qualité qui dure — sinon nous revenons gratuitement.',
        },
      ],
      approach: {
        eyebrow: 'Notre approche',
        heading1: 'Nous résolvons le problème —',
        headingHighlight: 'dès la première visite.',
        para1:
          'Beaucoup de clients nous disent que d\'autres entreprises ont dû intervenir plusieurs fois avant que le problème soit vraiment résolu. Chez nous, c\'est différent : nos techniciens arrivent avec les bons outils, les bonnes pièces et le savoir-faire nécessaire.',
        para2:
          'Qu\'il s\'agisse d\'une rupture de canalisation en pleine nuit, d\'un chauffage défaillant en hiver ou d\'une rénovation complète de salle de bain — nous planifions chaque intervention pour que vous n\'ayez plus à y penser.',
        checklist: [
          'Estimation initiale gratuite par téléphone',
          'Technologie de diagnostic moderne (caméra, détecteur de fuites)',
          'Stock de pièces détachées intégré — pas de longs délais de livraison',
          'Travail propre, nettoyage complet après intervention',
          'Facture immédiatement après la fin des travaux — sans surprises',
        ],
        badgeActive: 'Service d\'urgence actif',
        badgeTime: 'Temps de réponse moy. 45 min.',
      },
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      blog: 'Blog',
      contact: 'Contacto',
    },
    hero: {
      badge: '⚡ Servicio de emergencia 24/7',
      headline1: 'Su fontanero',
      headline2: 'en Oberhausen.',
      subline:
        'Rápido. Fiable. Honesto. Ya sea una avería a medianoche o una reforma planificada — estamos aquí para usted.',
      cta_whatsapp: 'Escribir por WhatsApp',
      cta_call: 'Llamar ahora',
      scroll_hint: 'Descubrir más',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle:
        'Desde reparaciones de emergencia hasta reformas completas de baño — servicio profesional integral.',
      items: [
        {
          title: 'Emergencias 24/7',
          description:
            'Ninguna fuga espera a la mañana siguiente. Disponibles a cualquier hora, incluidos fines de semana y festivos.',
        },
        {
          title: 'Desatasco de tuberías',
          description:
            'Desatasco rápido y eficaz de desagües y tuberías con las técnicas más modernas.',
        },
        {
          title: 'Instalación de calefacción',
          description:
            'Instalación, mantenimiento y reparación de sistemas de calefacción. Soluciones eficientes para su hogar.',
        },
        {
          title: 'Reforma de baño',
          description:
            'Reforma completa o reparaciones puntuales — creamos el baño de sus sueños.',
        },
        {
          title: 'Detección de fugas',
          description:
            'Localización no destructiva de daños por agua y tuberías rotas. Rápido y preciso.',
        },
        {
          title: 'Instalación sanitaria',
          description:
            'Nueva instalación y reforma de tuberías, grifería y equipos sanitarios de todo tipo.',
        },
      ],
    },
    stats: [
      { value: '10+', label: 'Años de experiencia' },
      { value: '24/7', label: 'Emergencias' },
      { value: '500+', label: 'Proyectos' },
      { value: '<60 Min', label: 'Tiempo de respuesta' },
    ],
    contact: {
      title: 'Ponerse en contacto',
      subtitle:
        'Elija su canal preferido. Respondemos lo antes posible — inmediatamente para emergencias.',
      hours_label: 'Horario regular',
      hours_value: 'Lun – Vie, 08:00 – 18:00',
      emergency_label: 'Emergencias',
      emergency_value: 'Todos los días, 24 horas',
      area_label: 'Área de servicio',
      area_value: 'Oberhausen, Essen, Mülheim, Duisburgo',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Escríbanos — le responderemos lo antes posible.',
        cta: 'Abrir chat',
      },
      telegram: {
        title: 'Telegram',
        description: 'También puede contactarnos a través de Telegram.',
        cta: 'Abrir Telegram',
      },
      phone: {
        title: 'Teléfono',
        description: 'Para urgencias — línea directa con el maestro fontanero.',
        cta: 'Llamar',
      },
    },
    blog: {
      title: 'Consejos & Guías',
      subtitle:
        'Información útil sobre fontanería, calefacción y agua — directamente del profesional.',
      read_more: 'Leer más',
      back: '← Volver al blog',
      min_read: 'min de lectura',
      by: 'por',
    },
    footer: {
      tagline: 'Su socio sanitario de confianza en Oberhausen y alrededores.',
      rights: 'Todos los derechos reservados.',
      emergency_cta: '¿Emergencia? Llamar',
      links: {
        imprint: 'Aviso legal',
        privacy: 'Privacidad',
      },
    },
    phone_modal: {
      title: 'Llamar ahora',
      hint_desktop: '¿En ordenador? Use Skype, FaceTime o su smartphone.',
      hint_mobile: 'Toque el número para iniciar la llamada.',
      close: 'Cerrar',
    },
    whatsapp_message:
      '¡Hola! Me gustaría concertar una cita. Mis horarios preferidos: de lunes a viernes, de 8 a 18 horas. Por favor, contácteme. ¡Gracias!',
    whyUs: {
      eyebrow: 'Por qué nosotros',
      heading1: 'Artesanía con',
      headingHighlight: 'Responsabilidad',
      heading2: '— desde hace dos décadas.',
      para1:
        'Los problemas de fontanería y calefacción no entienden de horarios comerciales. Por eso estamos a su lado las 24 horas — no como un centro de llamadas anónimo, sino como una empresa artesanal de confianza de su vecindario.',
      para2:
        '¿Qué nos diferencia? Llegamos puntuales, trabajamos con limpieza y le explicamos claramente qué se hizo y por qué. Sin tecnicismos, sin facturas infladas — solo trabajo honesto.',
      badges: ['Empresa certificada', 'Maestro artesano', 'Miembro DVGW'],
      statValue: '98',
      statLabel: 'Satisfacción del cliente',
      yearsValue: '20+',
      yearsLabel: 'Años de experiencia',
      pillars: [
        {
          title: 'Tiempo de respuesta rápido',
          body: 'En caso de emergencia, estamos en su domicilio en 60 minutos — las 24 horas, los 365 días del año. Sin música de espera, sin demoras.',
        },
        {
          title: 'Garantía de precio fijo',
          body: 'Recibirá un presupuesto fijo y transparente antes de cada intervención. Sin sorpresas en la factura — esa es nuestra promesa.',
        },
        {
          title: '20+ años de experiencia',
          body: 'Nuestro equipo resuelve cada día problemas de fontanería y calefacción en Oberhausen y alrededores. Desde reparaciones simples hasta reformas completas de baño.',
        },
        {
          title: 'Garantía de 5 años',
          body: 'Ofrecemos 5 años de garantía en todos nuestros trabajos de instalación. Calidad duradera — o volvemos sin cargo.',
        },
      ],
      approach: {
        eyebrow: 'Nuestro enfoque',
        heading1: 'Resolvemos el problema —',
        headingHighlight: 'en la primera visita.',
        para1:
          'Muchos clientes nos cuentan que otras empresas tuvieron que venir varias veces antes de solucionar realmente el problema. Nosotros trabajamos de otra manera: nuestros técnicos llegan con las herramientas adecuadas, los repuestos correctos y el conocimiento necesario.',
        para2:
          'Ya sea una rotura de tubería en mitad de la noche, una calefacción averiada en invierno o una reforma completa de baño — planificamos cada intervención para que no tenga que preocuparse más por ello.',
        checklist: [
          'Evaluación inicial gratuita por teléfono',
          'Tecnología de diagnóstico moderna (cámara, detector de fugas)',
          'Stock propio de repuestos — sin largos tiempos de entrega',
          'Trabajo limpio y recogida completa al finalizar',
          'Factura inmediatamente tras la finalización — sin sorpresas',
        ],
        badgeActive: 'Servicio de urgencias activo',
        badgeTime: 'Tiempo de resp. prom. 45 min.',
      },
    },
  },

  sq: {
    nav: {
      home: 'Ballina',
      services: 'Shërbime',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    hero: {
      badge: '⚡ Shërbim urgjence 24/7',
      headline1: 'Hidrauliku juaj',
      headline2: 'në Oberhausen.',
      subline:
        'I shpejtë. I besueshëm. I ndershëm. Qoftë defekt në mesnatë apo rinovim i planifikuar — jemi këtu për ju.',
      cta_whatsapp: 'Shkruaj në WhatsApp',
      cta_call: 'Telefono tani',
      scroll_hint: 'Zbulo më shumë',
    },
    services: {
      title: 'Shërbimet Tona',
      subtitle:
        'Nga riparime urgjente deri te rinovime të plota të banjës — punë profesionale sanitare.',
      items: [
        {
          title: 'Urgjenca 24/7',
          description:
            'Asnjë rrjedhje uji nuk pret gdhirjen. Jemi të arritshëm çdo orë, duke përfshirë fundjavat dhe festat.',
        },
        {
          title: 'Pastrimi i tubave',
          description:
            'Gypat dhe rrjedhjet e bllokuara pastrohen shpejt dhe tërësisht me teknikat moderne.',
        },
        {
          title: 'Instalimi i ngrohjes',
          description:
            'Instalim, mirëmbajtje dhe riparim i sistemeve të ngrohjes. Zgjidhje efiçente për shtëpinë tuaj.',
        },
        {
          title: 'Rinovimi i banjës',
          description:
            'Rinovim i plotë ose riparime të pjesshme — krijojmë banjën e ëndrrave tuaja.',
        },
        {
          title: 'Zbulimi i rrjedhjeve',
          description:
            'Lokalizim jo-shkatërrues i dëmeve nga uji dhe tubave të thyera. I shpejtë dhe preciz.',
        },
        {
          title: 'Instalime sanitare',
          description:
            'Instalime të reja dhe riparime të tubave, armaturave dhe pajisjeve sanitare.',
        },
      ],
    },
    stats: [
      { value: '10+', label: 'Vite përvojë' },
      { value: '24/7', label: 'Urgjenca' },
      { value: '500+', label: 'Projekte' },
      { value: '<60 Min', label: 'Koha e reagimit' },
    ],
    contact: {
      title: 'Na kontaktoni',
      subtitle:
        'Zgjidhni kanalin tuaj të preferuar. Përgjigjemi sa më shpejt — menjëherë për urgjenca.',
      hours_label: 'Orari i rregullt',
      hours_value: 'Hën – Pre, 08:00 – 18:00',
      emergency_label: 'Shërbimi i urgjencës',
      emergency_value: 'Çdo ditë, 24 orë',
      area_label: 'Zona e shërbimit',
      area_value: 'Oberhausen, Essen, Mülheim, Duisburg',
      whatsapp: {
        title: 'WhatsApp',
        description: 'Shkruani — do të përgjigjemi sa më shpejt të jetë e mundur.',
        cta: 'Hap bisedën',
      },
      telegram: {
        title: 'Telegram',
        description: 'Mund të na kontaktoni edhe përmes Telegram.',
        cta: 'Hap Telegram',
      },
      phone: {
        title: 'Telefon',
        description: 'Për çështje urgjente — linja direkte me mesterin.',
        cta: 'Telefono',
      },
    },
    blog: {
      title: 'Këshilla & Udhëzime',
      subtitle:
        'Informacione të dobishme rreth hidraulikës, ngrohjes dhe ujit — direkt nga profesionisti.',
      read_more: 'Lexo më shumë',
      back: '← Kthehu te blogu',
      min_read: 'min lexim',
      by: 'nga',
    },
    footer: {
      tagline: 'Partneri juaj i besueshëm sanitar në Oberhausen dhe rrethinë.',
      rights: 'Të gjitha të drejtat e rezervuara.',
      emergency_cta: 'Urgjencë? Telefono',
      links: {
        imprint: 'Informacione ligjore',
        privacy: 'Privatësia',
      },
    },
    phone_modal: {
      title: 'Telefono tani',
      hint_desktop: 'Në kompjuter? Përdorni Skype, FaceTime ose smartfonin tuaj.',
      hint_mobile: 'Trokitni numrin për të filluar thirrjen.',
      close: 'Mbyll',
    },
    whatsapp_message:
      'Përshëndetje! Dëshiroj të rezervoj një takim. Orari im i preferuar: e hënë deri të premte, 8–18. Ju lutem kontaktomëni. Faleminderit!',
    whyUs: {
      eyebrow: 'Pse ne',
      heading1: 'Zejtari me',
      headingHighlight: 'Përgjegjësi',
      heading2: '— prej dy dekadash.',
      para1:
        'Problemet e hidraulikës dhe ngrohjes nuk njohin orar pune. Prandaj jemi pranë jush 24 orë në ditë — jo si një qendër anonime thirrjesh, por si një biznes zejtarie i besuar nga lagja juaj.',
      para2:
        'Çfarë na dallon nga të tjerët? Arrijmë në kohë, punojmë pastër dhe ju shpjegojmë qartë çfarë është bërë dhe pse. Pa zhargon teknik, pa fatura të fryra — vetëm punë e ndershme.',
      badges: ['Ndërmarrje e certifikuar', 'Mjeshtër zejtari', 'Anëtar DVGW'],
      statValue: '98',
      statLabel: 'Kënaqësia e klientit',
      yearsValue: '20+',
      yearsLabel: 'Vite përvojë',
      pillars: [
        {
          title: 'Reagim i shpejtë',
          body: 'Në rast urgjence jemi tek ju brenda 60 minutash — gjatë gjithë orëve, 365 ditë në vit. Pa muzikë pritjeje, pa vonesa.',
        },
        {
          title: 'Garanci çmimi fiks',
          body: 'Përpara çdo ndërhyrje do të merrni një çmim fiks transparent. Pa surpriza në faturë — kjo është premtimi ynë.',
        },
        {
          title: '20+ vite përvojë',
          body: 'Ekipi ynë zgjidh çdo ditë probleme hidraulike dhe ngrohëse në Oberhausen dhe rrethinë. Nga riparimi i thjeshtë deri te rinovimi i plotë i banjës.',
        },
        {
          title: 'Garanci 5 vjet',
          body: 'Ofrojmë 5 vjet garanci për të gjitha punimet tona të instalimit. Cilësi e qëndrueshme — ose kthehemi pa pagesë.',
        },
      ],
      approach: {
        eyebrow: 'Qasja jonë',
        heading1: 'Ne zgjidhim problemin —',
        headingHighlight: 'në vizitën e parë.',
        para1:
          'Shumë klientë raportojnë se ndërmarrje të tjera duhej të vinin disa herë para se problemi të zgjidhej me të vërtetë. Tek ne është ndryshe: teknikët tanë vijnë me mjetet e duhura, pjesët e këmbimit dhe njohuritë e nevojshme.',
        para2:
          'Qoftë një gypë i thyer në mesnatë, një ngrohje e prishur dimrit apo rinovim i plotë banje — planifikojmë çdo ndërhyrje në mënyrë që ju të mos keni më asnjë shqetësim.',
        checklist: [
          'Vlerësim fillestar falas me telefon',
          'Teknologji moderne diagnostike (kamera, zbulues rrjedhjesh)',
          'Magazinë e pjesëve të këmbimit — pa kohë të gjata pritjeje',
          'Punë e pastër, pastrimi i plotë pas ndërhyrjes',
          'Faturë menjëherë pas përfundimit — pa surpriza',
        ],
        badgeActive: 'Shërbimi i urgjencës aktiv',
        badgeTime: 'Koha mesatare e reagimit 45 min.',
      },
    },
  },
}