import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";

export default function CalligraphyProducts() {
  return (
    <>
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </>
  );
}