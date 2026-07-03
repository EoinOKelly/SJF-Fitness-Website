import { BookingWizard } from '../components/booking/BookingWizard'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'

export function BookPage() {
  return (
    <PageMeta
      title="Book Now"
      description="Book a personal training session with Sandra Furney at SJF Fitness Portlaoise."
    >
      <section className="py-12 lg:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Book Now"
            title="Schedule your session"
            subtitle="Choose your service, pick a date and time, and Sandra will confirm your appointment."
            align="center"
          />
          <BookingWizard />
        </div>
      </section>
    </PageMeta>
  )
}
