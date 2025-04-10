import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Projects from './Pages/Projects/Projects'
import Navbar from './Components/Navbar/Navbar'

createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>


        <Route element={<Home/>} path='/' />
        <Route element={<About/>} path='/About-Us' />
        <Route element={<Projects/>} path='/Projects'/>
        <Route element={<Contact/>} path='/Contact'/>
        <Route element={<Error/>} path='*' />

      </Routes>
    </BrowserRouter>
    <Footer />
  </>
)