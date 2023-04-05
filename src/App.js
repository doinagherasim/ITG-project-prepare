import HomePage from "./components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import Product from "./components/ProductPage/ProductPage";
import ProductList from "./components/ProductLists/ListOfProducts";

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="www.itgstore.ro/cititor-coduri-de-bare-datalogic-quickscan-qw2120-usb-stand-p-QW2120-BKK1S-1144" element={<Product/>}/>
    <Route path="www.itgstore.ro/cititoare-coduri-de-bare-cu-fir-1d-c-56" element={<ProductList/>}/>
    </Routes>
  );
}

export default App;
