import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Section1 from './sections/section1/section1'
import Section2 from './sections/section2/section2'
import Section3 from './sections/section3/section3'
import Section4 from './sections/section4/section4'
import Section5 from './sections/section5/section5'
import Section6 from './sections/section6/section6'
import Section7 from './sections/section7/section7'

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  )
}