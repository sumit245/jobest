import Categories from "@/component/categories/Categories";
import Featured from "@/component/featured/Featured";
import Footer from "@/component/footer/Footer";
import HomepageContent from "@/component/hero/HomepageContent";
import HowItWorks from "@/component/howitworks/HowItWorks";
import JoinUs from "@/component/joinus/JoinUs";
import Testimonial from "@/component/testimonials/Testimonial";
import Values from "@/component/values/Values";

export default function Home() {
  return (
    <>
      <HowItWorks />
      <Values />
      <Categories />
      <Featured />
      <JoinUs />
      <Testimonial />
      <Footer />
    </>
  )
}
