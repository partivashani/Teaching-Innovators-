import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Header from './component/Header.jsx'
// import Section from './component/Section.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Layout from "./component/Layout.jsx"
import About from "./component/Footer.jsx"
import Home from './component/pages/Home.jsx'
import Signup from './component/Signup.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path='/' element={<Home/>} />
    <Route path="/about" element={<About />} />
   
    <Route path="/signup" element={<Signup />} />
 
    </Route>
     
  )    

)



createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router ={router} />
  </StrictMode>,
)
