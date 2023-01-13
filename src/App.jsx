import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import PromocionApp from './components/PromocionApp';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Ending from './components/Ending';


function App() {
  return (
    <CartContextProvider>
      <div className='container-fluid'>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}/>
            <Route path={"/category/:id"} element={<ItemListContainer />}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/ending/:id"} element={<Ending />} />
            <Route path={"*"} element={<Error404 />}/>
          </Routes>
          <PromocionApp />
          <Footer />
        </BrowserRouter>
        
      </div>
    </CartContextProvider>
  );
}

export default App;
