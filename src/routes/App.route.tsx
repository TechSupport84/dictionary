import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../app/Home"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Policy from "../components/Policy"

export  const AppRouter =() =>{
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/policy" element ={<Policy/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}