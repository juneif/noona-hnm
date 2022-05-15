
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Link } from "react-router-dom";
import ProductAll from './page/ProdectAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar'
import { useState, useInsertionEffect } from 'react';
import PrivateRoute from './route/PrivateRoute'

function App() {
  const [auth, setAuth] = useState(false);

  useInsertionEffect(() => {
    console.log("auth" , auth);
  }, [auth]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={ <ProductAll/> }/>
        <Route path="/login" element={ <Login setAuth={setAuth}/> }/>
        <Route path="/product/:id" element={ <PrivateRoute auth={auth}/> }/>
      </Routes>
    </div>
  );
}

export default App;
