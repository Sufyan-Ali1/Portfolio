
import About from "./components/About";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { ThemeProvider } from './context/ThemeContext'

export default function Home() {
  return (
    
    <ThemeProvider>
      <Navbar />
      <Header />
      <Connect/>
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}



