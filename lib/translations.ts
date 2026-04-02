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
  },
}
