import Section1 from './sections/section1/section1'
import Section2 from './sections/section2/section2'
import Section3 from './sections/section3/section3'
import Section4 from './sections/section4/section4'
import Section5 from './sections/section5/section5'
import SEOMeta from '../../components/seo/seo-meta'
import { ABOUT } from '../../data/data'
import { buildCloudinaryUrl } from '../../utils/cloudinary.util'

export default function About() {
  const { section1, section2, section3, section4, section5 } = ABOUT

  const seoMetadata = {
    title: 'Our Story — Jeya Chitra & Tamil Calligraphy Heritage | Chithu Vibes',
    description: 'Meet Jeya Chitra — Gold Medalist, M.Phil Computer Science, Tamil Epigraphy scholar and founder of Chithu Vibes. Laser precision meets ancestral script since 2023.',
    keywords: 'Jeya Chitra calligrapher, Tamil epigraphy, Chithu Vibes founder, laser engraving Chennai, Tamil calligraphy heritage',
    canonical: 'https://chithuvibes.in/about',
    ogTitle: 'A Master\'s Legacy — The Story of Chithu Vibes',
    ogDescription: 'Gold Medalist. Archaeologist. Phoenix. Jeya Chitra merges M.Phil precision with Tamil epigraphy to create calligraphy that lasts centuries.',
    ogImage: buildCloudinaryUrl('v1779823667/ChatGPT_Image_May_27_2026_12_57_31_AM_eu8lkk.png'),
    ogImageAlt: 'Jeya Chitra, founder of Chithu Vibes, Tamil calligraphy and laser engraving artist',
    ogUrl: 'https://chithuvibes.in/about',
    twitterTitle: 'A Master\'s Legacy — The Story of Chithu Vibes',
    twitterDescription: 'Gold Medalist. Archaeologist. Phoenix. Jeya Chitra merges M.Phil precision with Tamil epigraphy to create calligraphy that lasts centuries.',
    twitterImage: buildCloudinaryUrl('v1779823667/ChatGPT_Image_May_27_2026_12_57_31_AM_eu8lkk.png'),
    twitterImageAlt: 'Jeya Chitra, founder of Chithu Vibes, Tamil calligraphy and laser engraving artist',
    hreflangEn: 'https://chithuvibes.in/about',
    hreflangTa: 'https://chithuvibes.in/about?lang=ta',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jeya Chitra',
      jobTitle: 'Master Calligrapher & Founder',
      worksFor: {
        '@type': 'Organization',
        name: 'Chithu Vibes',
        url: 'https://chithuvibes.in',
      },
      description: 'Gold Medalist with M.Phil in Computer Science and expertise in Tamil Archaeology & Epigraphy. Founder of Chithu Vibes laser calligraphy studio.',
      knowsAbout: ['Tamil Calligraphy', 'Laser Engraving', 'Tamil Epigraphy', 'Computer Science'],
      award: 'Gold Medalist — M.Phil Computer Science',
      url: 'https://chithuvibes.in/about',
    }
  };

  return (
    <>
      <SEOMeta {...seoMetadata} />
      <Section1 content={section1} />
      <Section2 content={section2} />
      <Section3 content={section3} />
      <Section4 content={section4} />
      <Section5 content={section5} />
    </>
  )
}