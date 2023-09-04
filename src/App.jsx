import './App.css';
import Calculadora from './components/Calculadora';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ConsejosHuellaCarbono from './components/ConsejosHuellaDeCarbono';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Calculadora />}></Route>
          <Route path='/otrolado' element={<ConsejosHuellaCarbono/>}></Route>
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

