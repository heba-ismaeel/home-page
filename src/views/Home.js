import Header from '../components/Header';
import AddsBar from '../components/AddsBar';
import Perfume from '../components/Perfume';
import Features from '../components/Features';
import AboutMater from '../components/AboutMater';
import Explore from '../components/Explore';
import Shop from '../components/Shop';
import Recominded from '../components/Recominded';
import Assoon from '../components/Assoon';
import Footer from '../components/Footer';


const Home = () => {
  return (
   <>
   {/* <AddsBar/>
    <Header /> */}
     <Perfume/>
 <Features/>
   <AboutMater/>
   <Explore/><br></br>
  <Shop/>
  <Recominded/>
  <Assoon/>
  {/* <Footer/> */}
  {/* <Shoppage/>  */}
  </>
  )
}

export default Home;