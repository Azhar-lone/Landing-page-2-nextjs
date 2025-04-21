import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import PopularProducts from "@/components/ui/PopularProducts";
import SuperQuality from "@/components/ui/SuperQuality";
import Services from "@/components/ui/Services";
import SpecialOffer from "@/components/ui/SpecialOffer";
// import CustomerReviews from "@/components/ui/CustomerReviews";
import Subscribe from "@/components/ui/Subscribe";

import Footer from "@/components/ui/Footer";


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
      <Subscribe className="py-4 px-10" />
      <Footer />
    </main>
  );
};

export default Home;
