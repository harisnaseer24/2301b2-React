
import './App.css'
import { Routes,Route,Link,NavLink,Outlet } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Feedback from './Feedback'
import PageNotFound from './PageNotFound'
import Product from './Product'


function App() {
  

  return (
    <>


    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

    <NavLink to="/contact" className="navlink" activeClass="active">Contact</NavLink>
    <NavLink to="product" className="navlink" activeClass="active">Product</NavLink>
  
     
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/product" element={<Product/>} />
     <Route path="feedback" element={<Feedback/>} />
     {/* <Route path="/*" element={<PageNotFound/>} /> */}
     </Routes>
     {/* <Outlet/> */}
    </>
  )
}

export default App
