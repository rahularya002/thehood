import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Feed from "./pages/Feed"


function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
