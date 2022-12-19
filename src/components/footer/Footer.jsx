const Footer = () => {
  const callme = () => {
    window.open("tel:3157861208");
  };
  const map = () => {
    window.open("https://goo.gl/maps/FDTUvzN4RumYCXL17");
  };
  return (
    <>
      <div className="w-full h-72 bg-black">
        <div className="w-11/12 h-auto mx-auto relative">
          <div className="text-white font-bold text-4xl flex justify-center items-center py-4 w-full h-20 relative">
            <span className="pizzeria-footer px-4 leading-3">
              Pizzeria horebs
            </span>
            <hr className="hr-footer" />
          </div>
          <div className="text-white flex justify-between h-32 items-center">
            <div  onClick={map}>
              <h1 className="text-4xl font-semibold my-2 cursor-pointer">Visitanos</h1>
              <h6>Cll 37 # 7H - 46</h6>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer" onClick={callme}>
              <h1 className="text-4xl font-semibold my-2">Llamanos</h1>
              <h6>3157861208</h6>
            </div>
            <div>
              <h1 className="text-4xl font-semibold my-2">Enlaces</h1>
              <li>link1</li>
              <li>link2</li>
            </div>
          </div>
          <div className="w-full flex justify-center my-12">
            <h6 className="text-white">Copyrigth © Nolger</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
