import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
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
