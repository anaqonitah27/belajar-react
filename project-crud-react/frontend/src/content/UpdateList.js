import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const UpdateList = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("Handphone");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    getProductById()
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/getproducts/${id}`, {
        name,
        product,
        category,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async () =>{
    const response = await axios.get(`http://localhost:3000/getproducts/${id}`);
    setName(response.data.name);
    setProduct(response.data.product);
    setCategory(response.data.category);
  }
  return (
    <div className="column mt-5 is-centered">
    <p class="bd-notification is-info is-size-2 has-text-centered mb-2">React App</p>
    <p class="bd-notification is-info is-size-4 has-text-centered mb-5">CRUD - Create New Data</p>
      <div className="column is-full">
        <form onSubmit={updateProduct}>
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
            <button type="submit" className="button is-success">Update Data</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateList;
