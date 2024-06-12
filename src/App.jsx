import './App.css'
import { Navbar } from './components/navbar'
import { Body } from './components/body'
import { About } from './components/about'
import { Faqs } from './components/FAQS'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Body></Body>
    <About></About>
    <Faqs></Faqs>
    <Contact></Contact>
    <Footer/>
    </>
  )
}

export default App
