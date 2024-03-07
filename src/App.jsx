import './App.css'
import Deals_and_Offers from './sections/Deals_and_Offers'
import Featured from './sections/Featured'
import Footer from './sections/Footer'
import Nav_Banner from './sections/Nav_Banner'
import Popular_Airlines from './sections/Popular_Airlines'
import Subscribe from './sections/Subscribe'
import Testimonials from './sections/Testimonials'
import Travel_Blog from './sections/Travel_Blog'

function App() {

  return (
    <>
      <div className='max-w-8xl   mx-auto '>
       <Nav_Banner></Nav_Banner>
       <Featured></Featured>
       <Deals_and_Offers></Deals_and_Offers>
       <Popular_Airlines></Popular_Airlines>
       <Testimonials></Testimonials>
       <Travel_Blog></Travel_Blog>
       <Subscribe></Subscribe>
       <Footer></Footer>
      </div>
    </>
  )
}

export default App
