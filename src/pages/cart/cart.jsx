import ThankYouScreen from "../../components/thankyou/thankyou";
import { useCart } from "../../context/cart.context";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import SEOMeta from "../../components/seo/seo-meta";
import { CART } from "../../data/data";

export default function Cart() {
    const { showThankYou, handleThankYouDone } = useCart();
    const { section1, section2 } = CART;

    if (showThankYou) {
      return (
        <>
          <SEOMeta {...CART.seo} />
          <div className="h-screen">
            <ThankYouScreen onDone={handleThankYouDone} />
          </div>
        </>
      )
    }

  return (
    <>
      <SEOMeta {...CART.seo} />
      <div className="bg-cv-white min-h-screen">
        <Section1 content={section1} />
        <Section2 content={section2} />
      </div>
    </>
  );
}