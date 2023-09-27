import './App.css';
import Calculadora from './components/Calculadora';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ConsejosHuellaCarbono from './components/ConsejosHuellaDeCarbono';
import UserProvider from './Context/UserContext';
import Usuario from './components/User';


function App() {
  return ( 
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Calculadora />}></Route>
          <Route path='/Consejos' element={<ConsejosHuellaCarbono/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Usuario/>
  </UserProvider>
  )
}

export default App

