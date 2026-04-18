import Section1 from './sections/section1/section1'
import Section2 from './sections/section2/section2'
import Section3 from './sections/section3/section3'
import Section4 from './sections/section4/section4'
import Section5 from './sections/section5/section5'
import Section6 from './sections/section6/section6'
import Section7 from './sections/section7/section7'
import { HOME } from '../../data/data'

export default function Home() {
  const { section1,section2,section3,section4,section5,section6,section7 } = HOME;
  return (
    <>
      <Section1 content={section1} />
      <Section2 content={section2} />
      <Section3 content={section3} />
      <Section4 content={section4} />
      <Section5 content={section5} />
      <Section6 content={section6} />
      <Section7 content={section7} />
    </>
  )
}