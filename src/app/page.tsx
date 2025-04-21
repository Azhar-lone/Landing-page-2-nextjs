import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";
import SuperQuality from "@/components/SuperQuality";
// import Services from "@/components/Services";

// import CustomerReviews from "@/components/CustomerReviews";
// import Footer from "@/components/Footer";
// import SpecialOffer from "@/components/SpecialOffer";
// import Subscribe from "@/components/Subscribe";

const Home = () => {
  return (
    <main className="relative">
      <Navbar className="py-4 px-10" />
      <Hero className="py-4 px-10" />
      <PopularProducts className="py-4 px-10" />
      <SuperQuality className="py-4 px-10" />
      {/* <Services /> */}
      {/*<SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer /> */}
    </main>
  );
};

export default Home;
