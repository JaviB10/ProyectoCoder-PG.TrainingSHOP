import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Ending from './components/Ending';
import ScrollTo from './components/ScrollTo';
import Contacto from './components/Contacto';
import ContactoEnding from './components/ContactoEnding';


function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}/>
            <Route path={"/category/:id"} element={<ItemListContainer />}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/ending/:id"} element={<Ending />} />
            <Route path={"/contacto"} element={<Contacto />} /> 
            <Route path={"/success"} element={<ContactoEnding />} />   
            <Route path={"*"} element={<Error404 />}/>
          </Routes>
          <Footer />
          <ScrollTo />
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
