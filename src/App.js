import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Components/Pages/Breakfast';
import Dinner from './Components/Pages/Dinner';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Lunch from './Components/Pages/Lunch';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}>
          <Route path='/home/breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='/home/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/home/dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='' element></Route>
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
