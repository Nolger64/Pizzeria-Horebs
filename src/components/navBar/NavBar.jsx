const NavBar = () => {
  return (
    <div className="w-full h-24 bg-blue-700">
      <div className="mx-auto h-auto flex">
        <div className="h-24 w-1/2 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold">Pizzeria Horebs</h1>
        </div>
        <div className="h-24 w-1/2 flex justify-center items-center">
            <ul className="flex justify-center items-center">
                <li className="text-white font-bold text-xl mx-2">Home</li>
                <li className="text-white font-bold text-xl mx-2">Contactanos</li>
                <li className="text-white font-bold text-xl mx-2">Acerca de nostros</li>
                <li className="text-white font-bold text-xl mx-2">Ubicanos</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
