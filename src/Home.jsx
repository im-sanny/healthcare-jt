import Banner from "./Component/Banner"
import Care from "./Component/Care"
import Discount from "./Component/Discount"
import Faq from "./Component/Faq"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Service from "./Component/Service"
import Testimonial from "./Component/Testimonial"
import Who from "./Component/Who"

const Home = () => {
  return (
    <>
    <div className="mx-32">
    <Navbar></Navbar>
    <Banner></Banner>
    <Care></Care>
    <Who></Who>
    <Service></Service>
    <Testimonial></Testimonial>
    <Faq></Faq>
    <Discount></Discount>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Home