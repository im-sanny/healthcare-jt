import Banner from "./Component/Banner"
import Discount from "./Component/Discount"
import Faq from "./Component/Faq"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Testimonial from "./Component/Testimonial"
import Who from "./Component/Who"

const Home = () => {
  return (
    <>
    <div className="mx-32">
    <Navbar></Navbar>
    <Banner></Banner>
    <Who></Who>
    <Testimonial></Testimonial>
    <Faq></Faq>
    <Discount></Discount>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Home