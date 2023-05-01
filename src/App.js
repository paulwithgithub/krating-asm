import {Routes, Route} from 'react-router-dom'

import Navbar from './components/navber/navbar';
import Footer from './components/Footer';


import Home from './components/Home/';
import DoctorsFeatures from './components/DoctorsFeatures/';

import './App.css';

function App() {
  return (
   <>
    <Navbar />
   <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/doctorsCare' element={<DoctorsFeatures/>}></Route>
   </Routes>
   <Footer />
   </>
     
      
  );
}

export default App;
