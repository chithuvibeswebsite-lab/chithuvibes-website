import ThankYouScreen from "../../components/thankyou/thankyou";
import { useCart } from "../../context/cart.context";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import SEOMeta from "../../components/seo/seo-meta";
import { CART } from "../../data/data";

export default function Cart() {
    const { showThankYou, handleThankYouDone } = useCart();
    const { section1, section2 } = CART;

    const seoMetadata = {
      title: 'Your Selection — Chithu Vibes',
      description: 'Review your selected Tamil calligraphy and laser-engraved pieces. Finalise your bespoke order via WhatsApp with Jeya Chitra for personal customisation.',
      canonical: 'https://chithuvibes.in/cart',
      robots: 'noindex, nofollow',
      ogTitle: 'Your Selection — Chithu Vibes',
      ogDescription: 'Finalise your bespoke Tamil calligraphy order. Jeya Chitra will personally connect to discuss customisation and confirm your unique piece.',
      ogImage: 'https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779800731/products/wooden_photo_frame/img2.jpg',
      ogImageAlt: 'Chithu Vibes cart — curating your bespoke Tamil calligraphy selection',
      ogUrl: 'https://chithuvibes.in/cart',
      twitterTitle: 'Your Selection — Chithu Vibes',
      twitterDescription: 'Finalise your bespoke Tamil calligraphy order. Jeya Chitra will personally connect to discuss customisation and confirm your unique piece.',
      twitterImage: 'https://res.cloudinary.com/dvdmdowip/image/upload/q_auto/f_auto/v1779800731/products/wooden_photo_frame/img2.jpg',
      twitterImageAlt: 'Chithu Vibes cart — curating your bespoke Tamil calligraphy selection',
    };

    if (showThankYou) {
      return (
        <>
          <SEOMeta {...seoMetadata} />
          <div className="h-screen">
            <ThankYouScreen onDone={handleThankYouDone} />
          </div>
        </>
      )
    }

  return (
    <>
      <SEOMeta {...seoMetadata} />
      <div className="bg-cv-white min-h-screen">
        <Section1 content={section1} />
        <Section2 content={section2} />
      </div>
    </>
  );
}