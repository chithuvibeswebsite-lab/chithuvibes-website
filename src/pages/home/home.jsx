import Section1 from './sections/section1/section1'
import Section2 from './sections/section2/section2'
import Section3 from './sections/section3/section3'
import Section4 from './sections/section4/section4'
import Section5 from './sections/section5/section5'
import Section6 from './sections/section6/section6'
import Section7 from './sections/section7/section7'
import SEOMeta from '../../components/seo/seo-meta'
import { HOME } from '../../data/data'
import { buildCloudinaryUrl } from '../../utils/cloudinary.util'

export default function Home() {
  const { section1,section2,section3,section4,section5,section6,section7 } = HOME;
  
  const seoMetadata = {
    title: 'Chithu Vibes — Tamil Calligraphy & Laser Engraving | Chennai',
    description: 'Handcrafted Tamil calligraphy laser-engraved on wood, acrylic and metal. Heritage script meets modern precision. Ships globally from Chennai.',
    keywords: 'Tamil calligraphy, laser engraving Chennai, Tamil script art, wooden engraving, acrylic name plaque, brass engraving, Chithu Vibes',
    canonical: 'https://chithuvibes.in/',
    ogTitle: 'Chithu Vibes — The Soul of Tamil Calligraphy',
    ogDescription: 'Where ancient Tamil script meets avant-garde laser technology. Immortalise the fluid beauty of Tamil letters into timeless materials with 0.01mm accuracy.',
    ogImage: buildCloudinaryUrl('v1779800731/products/wooden_photo_frame/img2.jpg'),
    ogImageAlt: 'Tamil calligraphy laser-engraved on teak wood by Chithu Vibes, Chennai',
    ogUrl: 'https://chithuvibes.in/',
    twitterTitle: 'Chithu Vibes — The Soul of Tamil Calligraphy',
    twitterDescription: 'Where ancient Tamil script meets avant-garde laser technology. Immortalise the fluid beauty of Tamil letters into timeless materials with 0.01mm accuracy.',
    twitterImage: buildCloudinaryUrl('v1779800731/products/wooden_photo_frame/img2.jpg'),
    twitterImageAlt: 'Tamil calligraphy laser-engraved on teak wood by Chithu Vibes, Chennai',
    hreflangEn: 'https://chithuvibes.in/',
    hreflangTa: 'https://chithuvibes.in/?lang=ta',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Chithu Vibes',
      url: 'https://chithuvibes.in',
      logo: 'https://chithuvibes.in/logo.png',
      description: 'Handcrafted Tamil calligraphy laser-engraved on premium materials. Heritage script, modern precision.',
      foundingDate: '2023',
      founder: { '@type': 'Person', name: 'Jeya Chitra' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-73053-27776',
        contactType: 'customer service',
        availableLanguage: ['English', 'Tamil'],
      },
      sameAs: [
        'https://www.instagram.com/chithuvibes',
        'https://www.facebook.com/chithuvibes',
        'https://www.linkedin.com/in/chithuvibes',
        'https://www.youtube.com/@chithuvibes18',
      ],
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
      <Section6 content={section6} />
      <Section7 content={section7} />
    </>
  )
}