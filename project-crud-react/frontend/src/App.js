import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./content/ProductList";
import AddList from "./content/AddList";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="add" element={<AddList/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
