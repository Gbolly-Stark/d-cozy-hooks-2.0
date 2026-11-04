import About from "../components/About";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";


import Testimonials from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer"

const Page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <About />
      <Testimonials/>
      <CTA />
      <Footer />
    </main> 
   
      
  );
};

export default Page;