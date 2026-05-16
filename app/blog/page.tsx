import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

const posts = [
  {
    slug: 'understanding-hba1c',
    title: 'Understanding HbA1c: What Your Test Results Really Mean',
    excerpt: 'HbA1c measures your average blood sugar over 3 months. Here\'s how to interpret your numbers and what they mean for your diabetes management journey.',
    category: 'Education',
    readTime: '5 min read',
    date: 'May 2, 2026',
    featured: true,
  },
  {
    slug: 'indian-diet-diabetes',
    title: 'The Indian Diabetic\'s Complete Diet Guide: From Roti to Rajma',
    excerpt: 'Managing blood sugar on an Indian diet is entirely possible. We break down the glycaemic impact of everyday Indian foods and how to eat well.',
    category: 'Nutrition',
    readTime: '8 min read',
    date: 'April 28, 2026',
    featured: false,
  },
  {
    slug: 'berberine-vs-metformin',
    title: 'Berberine vs. Metformin: What the Research Actually Says',
    excerpt: 'Multiple studies have compared Berberine directly to Metformin. Here\'s an honest, evidence-based look at both options for newly diagnosed T2DM.',
    category: 'Research',
    readTime: '7 min read',
    date: 'April 20, 2026',
    featured: false,
  },
  {
    slug: 'exercise-blood-sugar',
    title: 'The 10-Minute Post-Meal Walk That Could Transform Your Blood Sugar',
    excerpt: 'Research shows a short walk after meals can reduce post-prandial glucose spikes by up to 22%. Here\'s the science and how to make it a habit.',
    category: 'Lifestyle',
    readTime: '4 min read',
    date: 'April 15, 2026',
    featured: false,
  },
  {
    slug: 'stress-diabetes',
    title: 'Why Stress Raises Your Blood Sugar (And What to Do About It)',
    excerpt: 'Cortisol, the stress hormone, directly raises blood glucose. Understanding this connection is crucial for anyone managing diabetes.',
    category: 'Wellness',
    readTime: '6 min read',
    date: 'April 10, 2026',
    featured: false,
  },
  {
    slug: 'gymnema-sylvestre-guide',
    title: 'Gymnema Sylvestre: The Ancient "Sugar Destroyer" With Modern Proof',
    excerpt: 'Used in Ayurvedic medicine for centuries, Gymnema Sylvestre now has robust clinical evidence. Here\'s what studies show about its effectiveness.',
    category: 'Ingredients',
    readTime: '6 min read',
    date: 'April 5, 2026',
    featured: false,
  },
]

const categories = ['All', 'Education', 'Nutrition', 'Research', 'Lifestyle', 'Wellness', 'Ingredients']

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-hero px-4">
        <div className="container-content max-w-3xl mx-auto text-center space-y-6">
          <h1 className="heading-1">The QYOUR Journal</h1>
          <p className="body-lg">
            Evidence-based insights on diabetes management, nutrition, and natural wellness —
            written by our medical team for the newly diagnosed.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={i === 0
                  ? 'badge-brand cursor-pointer'
                  : 'badge-success opacity-60 cursor-pointer hover:opacity-100 transition-opacity'}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          <div className="card-hover p-0 overflow-hidden mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-cream-100 aspect-video md:aspect-auto flex items-center justify-center p-12">
                <div className="text-center space-y-2">
                  <span className="badge-brand">{featured.category}</span>
                  <p className="font-playfair text-2xl font-medium text-brown-800 mt-4">Featured Article</p>
                </div>
              </div>
              <div className="p-8 md:p-10 space-y-4 flex flex-col justify-center">
                <span className="badge-brand">{featured.category}</span>
                <h2 className="heading-3">{featured.title}</h2>
                <p className="body-base text-brown-700">{featured.excerpt}</p>
                <div className="flex items-center gap-4 body-sm text-brown-500">
                  <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                </div>
                <Link href={`/blog/${featured.slug}`} className="btn-text">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-hover p-0 overflow-hidden block group">
                <div className="bg-cream-100 aspect-video flex items-center justify-center">
                  <span className="badge-brand">{post.category}</span>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-playfair text-lg font-medium text-brown-900 leading-snug group-hover:text-sand-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="body-sm text-brown-600 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 body-sm text-brown-400">
                    <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-cream-100">
        <div className="container-content max-w-2xl mx-auto text-center space-y-6">
          <h2 className="heading-2">Get Weekly Diabetes Insights</h2>
          <p className="body-lg">Evidence-based tips delivered to your inbox every Tuesday. No spam, ever.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="input-base flex-1"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}
