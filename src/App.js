import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import myGa from './components/pages/MyGa';
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {

  useEffect(() => {
    myGa();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
