import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hiraya.jpg"
          alt="松本建設の平屋住宅外観 - 白い外壁と木格子のモダンなデザイン"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Logo */}
      <div className="absolute left-6 top-6 z-20 md:left-10 md:top-8">
        <span className="font-serif text-xl tracking-wider text-white md:text-2xl">
          松本建設
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            {/* Catchcopy */}
            <h1 className="font-serif text-3xl font-medium leading-relaxed tracking-wide text-white md:text-4xl lg:text-5xl">
              <span className="text-balance">
                夫婦ふたりに、ちょうどいい平屋。
              </span>
            </h1>

            {/* Subcopy */}
            <p className="mt-6 font-sans text-base tracking-wide text-white/90 md:text-lg">
              自由設計 × コミコミ1,375万円〜｜熊本県玉名・荒尾
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-accent px-8 py-6 font-sans text-base font-medium tracking-wide text-white transition-all hover:bg-accent/90 md:px-10 md:text-lg"
              >
                <a href="#form-section">無料で資料をもらう</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
