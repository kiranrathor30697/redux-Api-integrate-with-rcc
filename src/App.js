import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import ProtectedRoute from './routes/ProtectedRoute';
import Table from './pages/Table';
import GetUser from './pages/GetUser';
import ChangeImg from './pages/ChangeImg';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} /> 
          <Route path='/' element={<Home />} /> 
          <Route path='/getuser' element={<GetUser />} /> 
          <Route path='/register' element={<Register />} /> 
          <Route path='/changeimg' element={<ChangeImg />} /> 
          <Route path="/" element={<ProtectedRoute/>} >
            <Route path='/logout' element={<Logout />} /> 
            <Route path='/table' element={<Table />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
