import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import SEOMeta from "../../components/seo/seo-meta";
import { GIFT_PRODUCTS } from "../../data/data";

export default function GiftProducts() {
  const { section1,section2,section3 } = GIFT_PRODUCTS;

  const seoMetadata = {
    title: 'Tamil Calligraphy Gift Items — Laser-Crafted Keepsakes | Chithu Vibes',
    description: 'Thoughtful laser-crafted Tamil calligraphy gifts for weddings, anniversaries and milestones. Personalised engravings that preserve cherished memories. Order via WhatsApp.',
    keywords: 'Tamil calligraphy gifts, laser engraved gifts India, personalised Tamil gift, wedding gift Tamil, anniversary gift Chennai',
    canonical: 'https://chithuvibes.in/gift-products',
    ogTitle: 'Laser-Crafted Tamil Calligraphy Gifts — Chithu Vibes',
    ogDescription: 'Modern precision meets sentimental value. Our laser-crafted gifts are designed to preserve your most cherished milestones in the beauty of Tamil script.',
    ogImage: 'https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779800731/products/wooden_photo_frame/img2.jpg',
    ogImageAlt: 'Personalised Tamil calligraphy laser-engraved gift from Chithu Vibes',
    ogUrl: 'https://chithuvibes.in/gift-products',
    twitterTitle: 'Laser-Crafted Tamil Calligraphy Gifts — Chithu Vibes',
    twitterDescription: 'Modern precision meets sentimental value. Our laser-crafted gifts are designed to preserve your most cherished milestones in the beauty of Tamil script.',
    twitterImage: 'https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779800731/products/wooden_photo_frame/img2.jpg',
    twitterImageAlt: 'Personalised Tamil calligraphy laser-engraved gift from Chithu Vibes',
    hreflangEn: 'https://chithuvibes.in/gift-products',
    hreflangTa: 'https://chithuvibes.in/gift-products?lang=ta',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Tamil Calligraphy Gift Products',
      description: 'Personalised laser-crafted Tamil calligraphy gifts for weddings, anniversaries and special milestones.',
      url: 'https://chithuvibes.in/gift-products',
      provider: {
        '@type': 'Organization',
        name: 'Chithu Vibes',
        url: 'https://chithuvibes.in',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://chithuvibes.in',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Gift Products',
            item: 'https://chithuvibes.in/gift-products',
          },
        ],
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
  );
}