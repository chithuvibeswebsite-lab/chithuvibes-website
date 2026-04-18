import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import { CALLIGRAPHY_PRODUCTS } from "../../data/data";

export default function CalligraphyProducts() {
  const { section1, section2, section3 } = CALLIGRAPHY_PRODUCTS;
  return (
    <>
      <Section1 content = {section1}/>
      <Section2 content = {section2}/>
      <Section3 content = {section3}/>
    </>
  );
}