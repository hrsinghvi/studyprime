import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import ResultsCarousel from '../components/ResultsCarousel/ResultsCarousel'
import Stats from '../components/Stats/Stats'
import FAQ from '../components/FAQ/FAQ'
import ContactForm from '../components/ContactForm/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FAQ limit={6} />
      <ResultsCarousel />
      <Stats />
      <ContactForm />
    </>
  )
}
