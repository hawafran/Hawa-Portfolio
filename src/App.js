import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componants/Footer';
import Navbar from './componants/Navbar';
import Work from './pages/work';
import About from './pages/about';
import Home from './pages/home';
import Resume from './pages/resume';
import Mixology from './pages/Lazy-Mixology';
import Pets from './pages/Pet-App';
import Events from './pages/EventsRUs';

function App () {
  return (
    <>
    
    <Router>
      
<Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/aboutme' element={<About />} />
  <Route path='/work' element={<Work />} />
  <Route path='/resume' element={<Resume />} />
  <Route path='/Lazy-Mixology' element={<Mixology />} />
  <Route path='/Pet-App' element={<Pets />} />
  <Route path='/EventsRUs' element={<Events />} />


  
  {/* <Route render={() => <h1 className='display-2'>Welcome To Our Site!!</h1>} /> */}
</Routes>
<Footer />

</Router>
   
   </>
  );
}

export default App;
