import { BookingWizard } from '../components/booking/BookingWizard'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionHeading } from '../components/ui/SectionHeading'

export function BookPage() {
  return (
    <PageMeta
      title="Book Now"
      description="Book a personal training session with Sandra Furney at SJF Fitness Portlaoise."
    >
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Reserve"
            title="Schedule your session"
            subtitle="Choose your service, pick a date and time, and Sandra will personally confirm your appointment."
            align="center"
          />
          <BookingWizard />
        </div>
      </section>
    </PageMeta>
  )
}
