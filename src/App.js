import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About';
import CarDetails from './pages/CarDetails';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Shop from './pages/Shop';
import {Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/Actions/AuthActions';
import ErrorsNotifications from './components/ErrorsNotifications';
import SuccessNotifications from './components/SuccessNotifications';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      if (localStorage.getItem("token")) {
        dispatch(current())
      }
  }, [dispatch])

  const isAuth = useSelector(state => state.AuthReducer.isAuth)

  const authErrors = useSelector(state => state.AuthReducer.errors)

  const authSuccess = useSelector(state => state.AuthReducer.success)
  
  return (
    <div>
      {authErrors &&
        authErrors.map((error) => <ErrorsNotifications error={error} />)}
      {authSuccess &&
        authSuccess.map((success) => (
          <SuccessNotifications success={success} />
        ))}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {isAuth ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        <Route path="/shop" element={<Shop />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/carDetails/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
