import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/data/site";

export const metadata: Metadata = {
  title: seoConfig.about.title,
  description: seoConfig.about.description,
  keywords: seoConfig.about.keywords,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="candy-wash-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-candy-pink tracking-widest uppercase mb-4 block">
              Our Story ✨
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-candy-plum leading-tight mb-6">
              Candy Made the Way
              <br />
              It <span className="bg-gradient-to-r from-candy-pink to-candy-rose bg-clip-text text-transparent">Should Be</span> 🍬
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-light/80 leading-relaxed">
              Cristal&apos;s Candies started with a simple question: Why can&apos;t
              hard candy be made with real ingredients? No artificial colors.
              No fake flavors. No corn syrup you can&apos;t pronounce. Just sugar,
              water, and the kind of care that turns a candy into something
              worth savoring.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-candy-pink-light/30 to-candy-lavender-light/30 flex items-center justify-center">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-candy-pink-light/40 to-candy-lavender-light/40 flex items-center justify-center">
                    <span className="text-8xl sm:text-9xl">👩‍🍳</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-br from-candy-pink to-candy-rose flex items-center justify-center text-white font-serif text-2xl font-bold shadow-lg">
                  C
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum mb-6">
                Meet Cristal 💜
              </h2>
              <div className="space-y-4 text-charcoal-light/80 leading-relaxed">
                <p>
                  Cristal grew up in a family where the kitchen was the heart of
                  everything. Her grandmother made fudge every Christmas. Her
                  mother baked bread every Saturday morning. Food was how you
                  showed love, and candy was the exclamation point 🍬
                </p>
                <p>
                  But somewhere along the way, store-bought candy stopped being
                  candy. It became a chemistry experiment — neon colors, unpronounceable
                  ingredients, and flavors that taste like a lab, not a kitchen.
                  Cristal thought there had to be a better way.
                </p>
                <p>
                  So in 2019, she bought a candy thermometer, watched about a
                  hundred hours of tutorials, and started pulling hard candy in
                  her Rigby kitchen. The first batches were messy. Some were
                  beautiful. All of them were made with real ingredients — organic
                  sugar, real fruit, actual vanilla bean, lavender from her own
                  garden.
                </p>
                <p>
                  She brought those first batches to the Rigby Farmers Market
                  on a folding table and a prayer. They sold out in two hours.
                  People didn&apos;t just buy the candy — they asked questions.
                  They wanted to know the flavors, the process, the story. They
                  wanted to meet the person behind it.
                </p>
                <p>
                  That&apos;s when Cristal knew she had something. Not just a candy
                  — a craft. And Cristal&apos;s Candies was born ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gradient-to-br from-candy-plum to-candy-plum-dark text-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold text-candy-pink-light tracking-widest uppercase mb-4 block">
              What We Stand For 💕
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-white">
              Our Mission & Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-candy-lavender/10 rounded-3xl p-8 border border-candy-lavender/20 candy-bounce">
              <span className="text-4xl mb-4 block">🌿</span>
              <h3 className="font-serif text-xl font-semibold text-warm-white mb-3">
                All-Natural, Always
              </h3>
              <p className="text-candy-lavender-light/70 leading-relaxed">
                We use organic cane sugar, real fruit, and actual herbs and
                botanicals — never artificial flavors, synthetic colors, or
                preservatives. If it doesn&apos;t come from nature, it doesn&apos;t
                go in our candy. Period.
              </p>
            </div>
            <div className="bg-candy-lavender/10 rounded-3xl p-8 border border-candy-lavender/20 candy-bounce">
              <span className="text-4xl mb-4 block">🤲</span>
              <h3 className="font-serif text-xl font-semibold text-warm-white mb-3">
                Small-Batch Integrity
              </h3>
              <p className="text-candy-lavender-light/70 leading-relaxed">
                Every batch is hand-pulled, hand-cut, and hand-wrapped. We
                make 120 pieces at a time, not 120,000. That means every candy
                gets attention, and every customer gets quality that mass
                production can&apos;t touch.
              </p>
            </div>
            <div className="bg-candy-lavender/10 rounded-3xl p-8 border border-candy-lavender/20 candy-bounce">
              <span className="text-4xl mb-4 block">💜</span>
              <h3 className="font-serif text-xl font-semibold text-warm-white mb-3">
                Community First
              </h3>
              <p className="text-candy-lavender-light/70 leading-relaxed">
                We&apos;re proud to be a woman-owned small business in Rigby, Idaho.
                We source locally when we can, support other small businesses,
                and believe that community is the sweetest ingredient in
                anything we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 sm:py-24 candy-wash-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold text-candy-mint-dark tracking-widest uppercase mb-4 block">
              From Scratch 🍬
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum">
              How We Make Our Candy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Source",
                desc: "We start with organic cane sugar, local honey, and real botanicals — herbs from our garden, fruit from Idaho orchards, spices from trusted importers.",
              },
              {
                step: "02",
                title: "Cook",
                desc: "The sugar is dissolved and cooked to precisely 300°F. This is where science meets art — too hot and it burns, too cool and it won't set. Every batch is monitored by hand.",
              },
              {
                step: "03",
                title: "Pull",
                desc: "The cooked candy is poured onto a marble slab and hand-pulled to develop its texture and sheen. This is the oldest step in candy-making, and we wouldn't dream of skipping it.",
              },
              {
                step: "04",
                title: "Wrap",
                desc: "Each piece is hand-cut and individually wrapped. No machines, no conveyor belts. Just careful hands and the satisfaction of a job done right.",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-serif font-bold text-candy-mint/30 mb-2">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-candy-plum mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-light/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-6 block text-candy-pink">"</span>
          <blockquote className="font-serif text-2xl sm:text-3xl text-candy-plum leading-relaxed mb-6">
            I bought the Honey Amber Drops as a gift and ended up eating the
            whole bag myself. These aren&apos;t like any candy I&apos;ve ever had —
            you can taste that they&apos;re made by a real person who cares 💕
          </blockquote>
          <div className="text-charcoal-light/60">
            <p className="font-medium text-charcoal-light/80">Sarah M.</p>
            <p className="text-sm">Boise, Idaho</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 candy-wash-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum mb-4">
            Taste the Story 🍬
          </h2>
          <p className="text-charcoal-light/60 max-w-lg mx-auto mb-8">
            Every candy has one. Shop our collection and discover why real
            ingredients make all the difference ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-base font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              Shop the Collection 🍭
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-candy-pink/25 text-candy-pink text-base font-bold rounded-full hover:bg-candy-pink/5 transition-colors"
            >
              Get in Touch 💜
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}