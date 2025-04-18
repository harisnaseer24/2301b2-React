
// import './App.css'
import { Routes,Route,Link } from 'react-router'
import Home from './Home'
import About from './About'
import PageNotFound from './PageNotFound'


function App() {
  

  return (
    <>


    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  
     
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/*" element={<PageNotFound/>} />
     
     </Routes>
    </>
  )
}

export default App
