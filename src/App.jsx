import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Projects from "./components/Projects.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"

function App() {

  return (
    <div className="bg-page">
      <Header/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App