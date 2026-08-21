import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section className="py-24 lg:py-32" id="about">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div
              className="relative aspect-[4/5] border-x border-b border-white/10 bg-graphite bg-cover bg-center"
              style={{ backgroundImage: 'url(/SJF_Hero.jpg)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
              <span className="pointer-events-none absolute inset-4 border border-brand/25" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="font-display text-3xl text-ivory">{siteConfig.owner}</p>
                <p className="eyebrow mt-3">Founder · Trainer &amp; Chef</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="The Founder"
              title="Meet Sandra Furney"
              subtitle="Certified personal trainer, nutrition expert and trained chef."
            />

            <ul className="mb-8 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              {['Certified Personal Trainer', 'Nutrition Expert', 'Trained Chef'].map((item) => (
                <li
                  key={item}
                  className="bg-obsidian px-5 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ivory"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-5 leading-relaxed text-ash">
              <p>
                SJF Fitness is a private studio built around one belief: real results come from
                real attention. Every session is led personally by Sandra, never handed off to a
                rotating floor of instructors.
              </p>
              <p>
                Whether your goal is to lose weight, build strength, or simply feel at home in your
                body again, she designs a plan around your life and coaches you through every rep
                and every meal.
              </p>
              <p>
                As a fully trained chef, Sandra brings something most trainers cannot: real cooking
                knowledge. She joins up how you train, how you eat and how you actually cook, so
                your nutrition plan works in a real kitchen, not just on paper.
              </p>
            </div>
            <Button to="/contact" variant="outline" className="mt-10">
              Start a Conversation
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
