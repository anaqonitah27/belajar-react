import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./content/ProductList";
import AddList from "./content/AddList";
import UpdateList from "./content/UpdateList";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="add" element={<AddList/>}></Route>
        <Route path="update/:id" element={<UpdateList/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
