import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";

export default function Cart() {
  return (
    <>
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </>
  );
}