import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-5 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-gray-500 text-xl font-bold animate-bounce">
           <a  href="/">
              <span className="text-2xl text-green-800 font-bold">W</span>-Language
           </a>
        </span>
        
        <button
          className="md:hidden text-gray-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul
          className={`md:flex md:items-center md:space-x-4 absolute md:static w-full md:w-auto bg-gray-800 md:bg-transparent left-0 top-16 p-5 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"} ${isOpen ? "absolute top-16 left-0 w-full bg-gray-800 shadow-md z-50" : ""}`}
        >
          <li>
            <a
              className="text-xl text-gray-400 hover:text-orange-800 block py-2 md:py-0"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray-400 hover:text-orange-800 block py-2 md:py-0"
              href="/support"
            >
              Support
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray-400 hover:text-orange-800 block py-2 md:py-0"
              href="/contact"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;