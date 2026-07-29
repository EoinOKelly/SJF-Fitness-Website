import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section className="py-24 lg:py-32" id="about">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Portrait of Sandra (public/SJF_Hero.jpg) */}
          <div
            className="relative aspect-[4/5] border border-white/10 bg-graphite bg-cover bg-center"
            style={{ backgroundImage: 'url(/SJF_Hero.jpg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
            <span className="pointer-events-none absolute inset-4 border border-brand/25" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="font-display text-3xl text-ivory">{siteConfig.owner}</p>
              <p className="eyebrow mt-3">Founder · Personal Coach</p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="The Founder"
              title="Meet Sandra Furney"
              subtitle="Certified personal trainer, nutrition expert and qualified chef."
            />
            <div className="space-y-5 leading-relaxed text-ash">
              <p>
                SJF Fitness is a private studio built around one belief: real results come from
                real attention. Every session is led personally by Sandra — never handed off to a
                rotating floor of instructors.
              </p>
              <p>
                Whether your goal is to lose weight, build strength, or simply feel at home in your
                body again, she designs a plan around your life and coaches you through every rep
                and every meal.
              </p>
              <p>
                As a trainer, nutrition expert and qualified chef, Sandra brings the whole picture
                together — how you train, how you eat, how you cook — in one discreet, welcoming
                space.
              </p>
            </div>
            <Button to="/contact" variant="outline" className="mt-10">
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
