const Tittle = (props) => {
    return (
        <div className="h-60 w-60 relative">
            <img src={props.img} alt="" className="h-60 w-60 rounded-full"/>
            <div className="rounded-full absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <h1 className="text-white text-4xl font-bold">{props.titulo}</h1>
            </div>
        </div>
    )
}
export default (Tittle)