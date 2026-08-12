import About from "./components/About";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Productsdetail from "./components/Productsdetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />

        <Route
          path="/products/:id"
          element={
            <main>
              <Navbar />
              <Productsdetail />
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;