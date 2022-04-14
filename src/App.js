import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Header from './Page/shared/Header/Header';
import About from './Page/About/About';
import ServicesDetail from './Page/ServicesDetails/ServicesDetail';
import NotFound from './Page/NotFound/NotFound';
import Login from './Page/Login/Login';
import Registerd from './Page/Registerd/Registerd';
import RequireAuth from './Page/requiredAuth/RequiredAuth';
import Checkout from './Page/Checkout/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services/:servicesId' element={<ServicesDetail></ServicesDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registerd' element={<Registerd></Registerd>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
