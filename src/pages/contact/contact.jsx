/* eslint-disable no-unused-vars */
import Section1 from './sections/section1/section1'
import Section2 from './sections/section2/section2'
import Section3 from './sections/section3/section3'
import Section4 from './sections/section4/section4'
import SEOMeta from '../../components/seo/seo-meta'
import { CONTACT } from '../../data/data'

export default function Contact() {
  const { section1, section2, section3, section4 } = CONTACT

  return (
    <>
      <SEOMeta {...CONTACT.seo} />
      <Section1 content={section1} />
      <Section2 content={section2} />
      {/* <Section3 content={section3} /> */}
      <Section4 content={section4} />
    </>
  )
}