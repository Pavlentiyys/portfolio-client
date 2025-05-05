import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <div>
          <Header/>
          <Routes>
            <Route path="/portfolio-client/" element={<Home />} />
            <Route path="/portfolio-client/about" element={<About />} />
            <Route path="/portfolio-client/projects" element={<Projects />} />
            <Route path="/portfolio-client/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
