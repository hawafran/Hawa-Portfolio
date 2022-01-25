import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componants/Footer';
import Navbar from './componants/Navbar';
import Work from './pages/work.js';
import About from './pages/about.js';
import Home from './pages/home.js';
import Resume from './pages/resume.js';
import Mixology from 'src/pages/lazy-mixology.js';
import Pets from './pages/fetch.js';
import Events from './pages/EventsRUs.js';

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
  <Route path='/lazy-mixology' element={<Mixology />} />
  <Route path='/fetch' element={<Pets />} />
  <Route path='/EventsRUs' element={<Events />} />


  
  {/* <Route render={() => <h1 className='display-2'>Welcome To Our Site!!</h1>} /> */}
</Routes>
<Footer />

</Router>
   
   </>
  );
}

export default App;
