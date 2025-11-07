
import BestSeller from '../components/BestSeller'
import HeroSection from '../components/HeroSection'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div >
      <HeroSection/>
    <LatestCollection/>
    <BestSeller/>
    <OurPolicy/>
    <Testimonials/>
     </div>
  )
}

export default Home