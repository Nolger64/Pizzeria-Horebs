const Banner1 = () => {
    const callme = () => {
        window.open("tel:3187592616");
    }
    const whatsapp = () => {
        window.open("https://wa.me/573187592616");
    }
    return (
        <div className="w-full h-screen banner1 relative">
            <div className="flex absolute bottom-0 left-10">
                <div className="m-8 w-40 rounded-sm flex flex-col items-center cursor-pointer" onClick={callme}>
                    <h3 className="p-1 px-2 text-xl h-9 font-semibold bg-orange-500 border-none w-44 rounded-lg uppercase">Domicilio</h3>
                    <span className="border border-t-0 w-40 h-10 rounded-b-lg text-white fonts-bold text-center text-2xl">3187592616</span>
                </div>
                <button onClick={whatsapp} className="m-6 text-3xl font-semibold w-40 bg-orange-500 h-24 rounded-md uppercase">Llama Ahora</button>
            </div>
        </div>
    );
}
export default (Banner1)