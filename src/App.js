import Home from './pages/home/Home'
import {Routes, Route} from 'react-router-dom'
import Navigation from './pages/navigation/Navigation';
import Shop from './pages/shop/Shop';
import Authentication from './pages/authentication/authentication';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='shop' element={<Shop />} />
       <Route path='auth' element={<Authentication />} />
       <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
