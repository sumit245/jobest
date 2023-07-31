'use client'
import Categories from "@/component/categories/Categories";
import Organisation from "@/component/organisation/Organisation"
import Featured from "@/component/featured/Featured";
import Footer from "@/component/footer/Footer";
import HowItWorks from "@/component/howitworks/HowItWorks";
import JoinUs from "@/component/joinus/JoinUs";
import Testimonial from "@/component/testimonials/Testimonial";
import Values from "@/component/values/Values";
import WhyUs from "@/component/whyus/WhyUs";

export default function Home() {
  return (
    <>
      <Organisation />
      <HowItWorks />
      <WhyUs />
      <Values />
      <Categories />
      <Featured />
      <JoinUs />
      <Testimonial />
      <Footer />
    </>
  )
}
