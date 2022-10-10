import { Route, Routes } from 'react-router-dom';
import './App.css';
import Foods from './Components/Pages/Foods';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/food' element={<Foods></Foods>}></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
