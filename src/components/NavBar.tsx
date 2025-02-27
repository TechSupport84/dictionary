const NavBar = ()=>{
    return(
    <div className="nav-bar flex  flex-row justify-between bg-gray-800 p-5">
        <span className="text-gray-500 text-1xl font-bold animate-bounce">
         <span className="text-2xl text-green-800 font-bold">W</span>-Language
        </span>
        <ul>
        <li><a className="text-2xl text-gray-400 hover:text-orange-800 " href="/" >Home</a></li>
        </ul>
        <ul className="flex flex-row gap-2 pl-2 ">
            
            <li><a className="text-2xl  text-gray-400 hover:text-orange-800 underline " href="#" >Support</a></li>
            <li><a className="text-2xl text-gray-400 hover:text-orange-800  underline" href="#"  >Contact Us</a></li>
        </ul>
    </div>
)
}

export default NavBar