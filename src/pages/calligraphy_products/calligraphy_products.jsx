import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import SEOMeta from "../../components/seo/seo-meta";
import { CALLIGRAPHY_PRODUCTS } from "../../data/data";

export default function CalligraphyProducts() {
  const { section1, section2, section3 } = CALLIGRAPHY_PRODUCTS;

  const seoMetadata = {
    title: 'Tamil Calligraphy Products — Wooden, Acrylic & Metal Engravings | Chithu Vibes',
    description: 'Shop hand-crafted Tamil calligraphy pieces laser-engraved on teak, walnut, acrylic and brass. Each piece celebrates the ancient rhythm of Tamil script. Ships globally.',
    keywords: 'buy Tamil calligraphy, wooden Tamil engraving, acrylic Tamil plaque, metal calligraphy art, laser engraved Tamil gifts, Chennai',
    canonical: 'https://chithuvibes.in/calligraphy-products',
    ogTitle: 'Tamil Calligraphy Collection — Artistry in Every Stroke',
    ogDescription: 'Hand-crafted with archival materials, each Chithu Vibes calligraphy piece celebrates the ancient rhythm of the quill and the beauty of the written Tamil word.',
    ogImage: 'https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779800731/products/wooden_photo_frame/img2.jpg',
    ogImageAlt: 'Collection of Tamil calligraphy laser-engraved pieces on wood and acrylic — Chithu Vibes',
    ogUrl: 'https://chithuvibes.in/calligraphy-products',
    twitterTitle: 'Tamil Calligraphy Collection — Artistry in Every Stroke',
    twitterDescription: 'Hand-crafted with archival materials, each Chithu Vibes calligraphy piece celebrates the ancient rhythm of the quill and the beauty of the written Tamil word.',
    twitterImage: 'https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779800731/products/wooden_photo_frame/img2.jpg',
    twitterImageAlt: 'Collection of Tamil calligraphy laser-engraved pieces on wood and acrylic — Chithu Vibes',
    hreflangEn: 'https://chithuvibes.in/calligraphy-products',
    hreflangTa: 'https://chithuvibes.in/calligraphy-products?lang=ta',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Tamil Calligraphy Products',
      description: 'Hand-crafted Tamil calligraphy laser-engraved on premium wood, acrylic and metal. Each piece is an archival-quality artwork.',
      url: 'https://chithuvibes.in/calligraphy-products',
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
            name: 'Calligraphy Products',
            item: 'https://chithuvibes.in/calligraphy-products',
          },
        ],
      },
    }
  };

  return (
    <>
      <SEOMeta {...seoMetadata} />
      <Section1 content = {section1}/>
      <Section2 content = {section2}/>
      <Section3 content = {section3}/>
    </>
  );
}