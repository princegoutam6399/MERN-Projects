import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import About from './Components/About';
import Services from './Components/Services';
import Preview from './Components/Preview';

const NotFound = () => <h2>Page Not Found</h2>;

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
