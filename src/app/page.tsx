import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";
import SuperQuality from "@/components/SuperQuality";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
// import CustomerReviews from "@/components/CustomerReviews";
import Subscribe from "@/components/Subscribe";

import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative">
      <Navbar className="py-4 px-10" />
      <Hero className="py-4 px-10" />
      <PopularProducts className="py-4 px-10" />
      <SuperQuality className="py-4 px-10" />
      <Services className="py-4 px-10" />
      <SpecialOffer className="py-4 px-10" />
      {/* <CustomerReviews className="py-4 px-10" /> */}
      <Subscribe className="py-4 px-10"/>
      <Footer />
    </main>
  );
};

export default Home;
