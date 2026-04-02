export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: number
  image: string
  sections: BlogSection[]
}

export type BlogSection =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'subheading'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; content: string; variant: 'tip' | 'warning' | 'info' }

export const blogPosts: BlogPost[] = [
  {
    slug: '5-zeichen-rohre-wartung',
    title: '5 Zeichen, dass Ihre Rohre dringend Wartung brauchen',
    excerpt:
      'Viele Wasserschäden lassen sich verhindern — wenn man die Warnsignale früh genug erkennt. Wir zeigen Ihnen die 5 häufigsten Hinweise, die auf ein Rohrproblem hindeuten.',
    date: '15. März 2025',
    author: 'Sanitär Oberhausen',
    category: 'Wartung & Vorsorge',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    sections: [
      {
        type: 'paragraph',
        content:
          'Rohre sind das unsichtbare Rückgrat Ihres Hauses. Solange alles funktioniert, denkt kaum jemand daran — doch ein einziger Rohrbruch kann tausende Euro Schaden verursachen. Die gute Nachricht: In den meisten Fällen kündigt sich ein Problem schon Wochen oder Monate vorher an. Wer die Warnsignale kennt, kann rechtzeitig handeln.',
      },
      {
        type: 'heading',
        content: '1. Niedriger Wasserdruck',
      },
      {
        type: 'paragraph',
        content:
          'Wenn das Wasser aus dem Hahn nur noch tröpfelt, obwohl der Absperrhahn vollständig geöffnet ist, deutet das oft auf ein ernstes Problem hin. Mögliche Ursachen sind Ablagerungen in den Rohren, ein kleines Leck, das Druck abbaut, oder verkalkte Armaturen. Tritt der niedrige Druck nur an einer Stelle auf, liegt das Problem lokal — betrifft er das ganze Haus, sollten Sie sofort einen Fachmann rufen.',
      },
      {
        type: 'callout',
        content:
          'Tipp: Testen Sie den Wasserdruck an verschiedenen Stellen im Haus. Wenn nur ein Badezimmer betroffen ist, liegt das Problem meist in diesem Bereich.',
        variant: 'tip',
      },
      {
        type: 'heading',
        content: '2. Verfärbtes oder trübes Wasser',
      },
      {
        type: 'paragraph',
        content:
          'Kommt aus Ihrem Hahn braunes, rötliches oder trübes Wasser, ist das ein klares Warnsignal. Rostfarbenes Wasser deutet auf verrostete Rohre hin — besonders in älteren Häusern mit Eisenleitungen. Weißlich-milchiges Wasser kann auf Luft im System hinweisen, verschwindet aber meist von selbst. Bleibt das Wasser verfärbt, lassen Sie es unbedingt analysieren und die Rohre überprüfen.',
      },
      {
        type: 'callout',
        content:
          'Warnung: Trinken Sie kein verfärbtes Wasser, bevor die Ursache geklärt ist. In seltenen Fällen können alte Bleileitungen gefährliche Stoffe abgeben.',
        variant: 'warning',
      },
      {
        type: 'heading',
        content: '3. Ungewöhnliche Geräusche in den Wänden',
      },
      {
        type: 'paragraph',
        content:
          'Hören Sie Gluckern, Pfeifen, Hämmern oder Rauschen in Wänden oder Decken, sollten Sie aufhorchen. Klopfende Geräusche ("Wasserhammer") entstehen, wenn Wasser abrupt gestoppt wird — das belastet die Rohre und Armaturen dauerhaft. Pfeifende Geräusche können auf zu hohen Wasserdruck hinweisen. Gluckernde Laute deuten oft auf Luft in den Rohren oder einen beginnenden Verstopfung hin.',
      },
      {
        type: 'list',
        items: [
          'Hämmernde Geräusche → Wasserhammer, zu hoher Druck',
          'Pfeifende Laute → Kalk, Ablagerungen oder Druckproblem',
          'Gluckern → Luft im System oder beginnende Verstopfung',
          'Rauschen in der Wand → mögliches Leck hinter dem Putz',
        ],
      },
      {
        type: 'heading',
        content: '4. Feuchte Wände, Flecken oder Schimmel',
      },
      {
        type: 'paragraph',
        content:
          'Dunkle Flecken an Wänden oder Decken, abblätternde Farbe oder Schimmelbildung können auf versteckte Leckagen hinweisen. Oft bemerkt man das Problem erst, wenn schon erheblicher Schaden entstanden ist. Besonders tückisch: Kleine Lecks in schlecht zugänglichen Bereichen wie unter Fliesen oder hinter Verkleidungen. Wer Schimmel entfernt, ohne die Ursache zu beheben, kämpft gegen Symptome statt gegen das eigentliche Problem.',
      },
      {
        type: 'callout',
        content:
          'Info: Mit moderner Lecksuche-Technik können wir Wasserschäden zerstörungsfrei orten — ohne Stemmen oder Aufreißen von Wänden.',
        variant: 'info',
      },
      {
        type: 'heading',
        content: '5. Unerklärlich hohe Wasserrechnung',
      },
      {
        type: 'paragraph',
        content:
          'Ein plötzlicher Anstieg der Wasserrechnung ohne geänderte Gewohnheiten ist ein starkes Indiz für ein verstecktes Leck. Selbst kleine Undichtigkeiten können täglich hunderte Liter Wasser verschwenden. Drehen Sie zum Test den Haupthahn ab und beobachten Sie, ob der Wasserzähler weiterläuft — das ist ein sicherer Hinweis auf ein Leck im System.',
      },
      {
        type: 'heading',
        content: 'Was tun, wenn Sie eines dieser Zeichen bemerken?',
      },
      {
        type: 'paragraph',
        content:
          'Ignorieren Sie Warnsignale nie. Ein kleines Leck wird ohne Eingriff nicht kleiner. Wenden Sie sich bei Verdacht auf ein Rohrproblem immer an einen Fachbetrieb — wir bieten eine kostenlose Ersteinschätzung und helfen Ihnen schnell und unkompliziert. Bei akuten Schäden wie einem Rohrbruch stehen wir rund um die Uhr zur Verfügung.',
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
