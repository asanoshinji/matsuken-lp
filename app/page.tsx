import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Placeholder for form section - will be implemented later */}
      <section id="form-section" className="min-h-screen bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl">
            お問い合わせ
          </h2>
          <p className="mt-4 font-sans text-muted-foreground">
            資料請求フォームは後ほど追加されます。
          </p>
        </div>
      </section>
    </main>
  )
}
