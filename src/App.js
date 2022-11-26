import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Account from './pages/Account'
import Landingpage from './pages/Landingpage'
import ProductPage from './pages/ProductPage'
import React from "react"
import ProductsList from './pages/ProductsList'



function App() {
  return (
    <div >
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Landingpage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='/products-list' element={<ProductsList />} />
          <Route path='/product-page' element={<ProductPage />} />
      </Routes>     
    </div>
  );
}

export default App;

