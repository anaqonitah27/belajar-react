import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddList = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("Handphone");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/getproducts`, {
        name,
        product,
        category,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="column mt-5 is-centered">
    <p class="bd-notification is-info is-size-2 has-text-centered mb-2">React App</p>
    <p class="bd-notification is-info is-size-4 has-text-centered mb-5">CRUD - Create New Data</p>
      <div className="column is-full">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label"> Name </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label"> Product </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Product"
              />
            </div>
          </div>
          <div className="field">
            <label className="label"> Category </label>
            <div className="control select is-normal is-fullwidth">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Handphone">Handphone</option>
                <option value="Laptop">Laptop</option>
              </select>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success is-fullwidth mt-5">Save New Data</button>
            <a href="/" className="button is-info is-fullwidth mt-3">Back to Product List</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddList;
