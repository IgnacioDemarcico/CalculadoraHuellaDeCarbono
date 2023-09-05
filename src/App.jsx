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
          <Route path='/Consejos' element={<ConsejosHuellaCarbono/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

