import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Shop from './pages/Shop';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
