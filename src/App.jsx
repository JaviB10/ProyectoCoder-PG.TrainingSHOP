import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import PromocionApp from './components/PromocionApp';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (

    <div className='container-fluid'>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route path={"*"} element={<Error404 />}/>
        </Routes>
        <PromocionApp />
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
