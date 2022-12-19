import Tittle from "./Tittle";
import img from "../../assets/img/tittleimg.jpg";

const BannerTittles = () => {
  return (
    <div className="w-full h-80 bg-blue-300">
      <div className="flex justify-between items-center w-11/12 mx-auto h-80">
        <Tittle img={img} titulo="Titulo1" />
        <Tittle img={img} titulo="Titulo2" />
        <Tittle img={img} titulo="Titulo3" />
        <Tittle img={img} titulo="Titulo4" />
      </div>
    </div>
  );
};
export default BannerTittles;
