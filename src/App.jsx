import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './paginas/Inicio'
import { Nosotros } from './paginas/Nosotros'
import { Productos } from './paginas/Productos'
import { Detalle } from './paginas/Detalle'
import { FormContacto } from './paginas/Contacto' 
import { Navbar } from './componentes/navbar'
import { Footer } from './componentes/Footer'
import { LoginForm } from './componentes/LoginForm'
import Modal from './componentes/Modal'

function App() {

   const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Navbar onOpenLogin={() => setLoginOpen(true)}/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/productos/:id' element={<Detalle/>}></Route>
        <Route path='/contacto' element={<FormContacto/>}></Route>
      </Routes>
      <Footer/>
      
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <LoginForm onSuccess={() => setLoginOpen(false)} />
      </Modal>


    </>
  )
}

export default App
