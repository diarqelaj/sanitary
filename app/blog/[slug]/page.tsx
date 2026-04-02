import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts, getBlogPost, BlogSection } from '@/lib/blog-data'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Clock, Tag, User, ArrowLeft, Lightbulb, AlertTriangle, Info } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className="text-lg text-zinc-600 dark:text-zinc-400 leading-[1.8] mb-6"
        >
          {section.content}
        </p>
      )

    case 'heading':
      return (
        <h2
          key={index}
          className="font-display text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-stone-100 mt-12 mb-4 leading-tight"
        >
          {section.content}
        </h2>
      )

    case 'subheading':
      return (
        <h3
          key={index}
          className="font-display text-xl font-semibold text-zinc-900 dark:text-stone-100 mt-8 mb-3"
        >
          {section.content}
        </h3>
      )

    case 'list':
      return (
        <ul key={index} className="mb-6 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'callout': {
      const styles = {
        tip: {
          bg: 'bg-green-50 dark:bg-green-900/15',
          border: 'border-green-200 dark:border-green-800/40',
          icon: <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />,
          text: 'text-green-800 dark:text-green-300',
        },
        warning: {
          bg: 'bg-amber-50 dark:bg-amber-900/15',
          border: 'border-amber-200 dark:border-amber-800/40',
          icon: <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />,
          text: 'text-amber-800 dark:text-amber-300',
        },
        info: {
          bg: 'bg-blue-50 dark:bg-blue-900/15',
          border: 'border-blue-200 dark:border-blue-800/40',
          icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />,
          text: 'text-blue-800 dark:text-blue-300',
        },
      }
      const s = styles[section.variant]
      return (
        <div
          key={index}
          className={`flex items-start gap-3 p-4 rounded-xl border mb-6 ${s.bg} ${s.border}`}
        >
          {s.icon}
          <p className={`text-sm leading-relaxed ${s.text}`}>{section.content}</p>
        </div>
      )
    }

    default:
      return null
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Back link */}
        <div className="pt-24 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-stone-100 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="px-6 pb-10">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                <Clock className="w-3 h-3" />
                {post.readTime} Min. Lesezeit
              </span>
              <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                <User className="w-3 h-3" />
                {post.author}
              </span>
              <span className="text-xs text-zinc-400">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-stone-100 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Cover image */}
        <div className="px-6 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Article content */}
        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            {post.sections.map((section, i) => renderSection(section, i))}
          </div>
        </article>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-700 dark:bg-blue-600 rounded-3xl p-10 text-center text-white">
              <h2 className="font-display text-3xl font-semibold mb-3">
                Haben Sie ein Rohrproblem?
              </h2>
              <p className="text-blue-100 mb-7 max-w-md mx-auto">
                Kontaktieren Sie uns jetzt — kostenlose Ersteinschätzung und schnelle Hilfe auch im Notfall.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-medium text-sm hover:bg-blue-50 transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-medium text-sm transition-colors"
                >
                  Zurück zum Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}