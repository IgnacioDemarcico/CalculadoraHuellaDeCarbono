import './App.css';
import Calculadora from './components/Calculadora';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Calculadora />}></Route>
          <Route path='/otrolado' element={<h1>otrolado</h1>}></Route>
          {/*<Route path='/informacion' element={<Calculadora/>} ></Route>
          <Route path='/personas/:id' element={<Persona />}></Route>
  <Route path='/contacto' element={<Contacto />} ></Route>*/}
          <Route path='*' element={<h1>Not Found</h1>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

