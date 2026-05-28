import Section1 from './sections/section1/section1'
import Section2 from './sections/section2/section2'
import Section3 from './sections/section3/section3'
import SEOMeta from '../../components/seo/seo-meta'
import { CONTACT } from '../../data/data'
import { buildCloudinaryUrl } from '../../utils/cloudinary.util'

export default function Contact() {
  const { section1, section2, section3 } = CONTACT

  const seoMetadata = {
    title: 'Contact & Custom Orders — Bespoke Tamil Calligraphy | Chithu Vibes',
    description: 'Commission a bespoke Tamil calligraphy piece with Jeya Chitra. Submit an inquiry for custom engravings, bulk orders or personal consultations. Studio in Chennai.',
    keywords: 'contact Chithu Vibes, custom Tamil calligraphy order, bespoke laser engraving, commission calligraphy Chennai, Jeya Chitra consultation',
    canonical: 'https://chithuvibes.in/contact',
    ogTitle: 'Begin Your Bespoke Journey — Chithu Vibes Studio',
    ogDescription: 'A private 1-on-1 consultation with Jeya Chitra to commission your unique Tamil calligraphy piece. Custom script, material, and dimensions — etched for eternity.',
    ogImage: buildCloudinaryUrl('v1779800731/products/wooden_photo_frame/img2.jpg'),
    ogImageAlt: 'Chithu Vibes studio consultation — bespoke Tamil calligraphy commission process',
    ogUrl: 'https://chithuvibes.in/contact',
    twitterTitle: 'Begin Your Bespoke Journey — Chithu Vibes Studio',
    twitterDescription: 'A private 1-on-1 consultation with Jeya Chitra to commission your unique Tamil calligraphy piece. Custom script, material, and dimensions — etched for eternity.',
    twitterImage: buildCloudinaryUrl('v1779800731/products/wooden_photo_frame/img2.jpg'),
    twitterImageAlt: 'Chithu Vibes studio consultation — bespoke Tamil calligraphy commission process',
    hreflangEn: 'https://chithuvibes.in/contact',
    hreflangTa: 'https://chithuvibes.in/contact?lang=ta',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Chithu Vibes',
      url: 'https://chithuvibes.in/contact',
      description: 'Commission bespoke Tamil calligraphy with Jeya Chitra. Custom engravings, consultations, and bulk orders.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Chithu Vibes',
        telephone: '+91-73053-27776',
        email: 'hello@chithuvibes.in',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        priceRange: '₹₹–₹₹₹',
        openingHours: 'Mo-Sa 10:00-18:00',
      },
    }
  };

  return (
    <>
      <SEOMeta {...seoMetadata} />
      <Section1 content={section1} />
      <Section2 content={section2} />
      <Section3 content={section3} />
    </>
  )
}