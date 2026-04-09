import Careers from '../components/Careers/Careers'
import SEO from '../components/SEO/SEO'

export default function CareersPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <SEO
        title="Tutor Jobs Bay Area | Join Study Prime"
        description="Join the Study Prime team as a tutor. We hire SAT, ACT, and subject tutors in the Bay Area. Competitive pay, flexible hours, and rewarding work."
        canonical="/careers"
      />
      <Careers />
    </div>
  )
}
