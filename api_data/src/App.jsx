import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table/Table'
import ProductForm from './components/ControlledComponent/Index'
import Movies from './components/Movies/Index'
import FormHandling from './components/formhandling/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* Table component */}
     {/* <Table/> */}
     {/* <ProductForm/> */}
     <FormHandling/>
     {/* <Movies/> */}
    </>
  )
}

export default App
