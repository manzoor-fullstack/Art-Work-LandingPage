import Contact from "./components/uiComponents/Contact"
import Faqs from "./components/uiComponents/Faqs"
import FeaturedArtwork from "./components/uiComponents/FeaturedArtwork"
import Footer from "./components/uiComponents/Footer"
import Hero from "./components/uiComponents/Hero"
import HowToBuy from "./components/uiComponents/HowToBuy"
import Navbar from "./components/uiComponents/Navbar"
import PrintingProcess from "./components/uiComponents/PrintingProcess"
import WhyChoose from "./components/uiComponents/WhyChoose"


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedArtwork />
      <PrintingProcess />
      <HowToBuy />
      <WhyChoose />
      <Faqs />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
