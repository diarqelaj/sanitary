import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-data'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Ratgeber & Tipps',
  description:
    'Nützliche Tipps und Ratgeber rund um Sanitär, Heizung und Wasser vom Klempner aus Oberhausen.',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-3 block">
              Blog
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-zinc-900 dark:text-stone-100 mb-4 leading-tight">
              Ratgeber & Tipps
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
              Nützliche Infos rund um Sanitär, Heizung und Wasser — direkt vom Fachmann.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="pb-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  {/*
                    IMAGE RECOMMENDATION for this post:
                    - Plumbing pipes close-up: https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800
                    - Pipe wrench: https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800
                    - Water drops/leak: https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800
                  */}
                 <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-xs font-medium text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-200/50 dark:border-zinc-700/50">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} Min. Lesezeit
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-stone-100 mb-2 leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-sm font-medium text-blue-700 dark:text-blue-400 flex items-center gap-1">
                    Weiterlesen
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
