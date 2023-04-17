import "./App.css"
import Catergory from "./components/Catergory"
import Food from "./components/Food"
import HeadlineCards from "./components/HeadlineCards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Catergory />
    </div>
  )
}

export default App
