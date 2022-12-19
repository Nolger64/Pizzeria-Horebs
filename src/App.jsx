import Banner1 from "./components/banners/Banner1";
import Banner2 from "./components/banners/Banner2";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import BannerTittles from "./components/tittlesBanner/BannerTittles";

function App() {
  return (
    <>
      <NavBar />
      <Banner1 />
      <BannerTittles />
      <Banner2 />
      <Footer />
    </>
  );
}

export default App;
