import React, { useState, useEffect }from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProduct] = useState([]);

	useEffect(() => {
    getProducts();
  }, []);

	const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/getproducts");
    setProduct(response.data);
  };

  return (
    <div className="column mt-5 is-center">
      <div className="column is-half"></div>
    <p class="bd-notification is-info is-size-2 has-text-centered mb-2">React App</p>
    <p class="bd-notification is-info is-size-4 has-text-centered mb-5">CRUD (Create, Read, Update, Delete)</p>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th className="is-uppercase has-text-centered">Id</th>
            <th className="is-uppercase has-text-centered">Name</th>
            <th className="is-uppercase has-text-centered">Product</th>
            <th className="is-uppercase has-text-centered">Category</th>
            <th className="is-uppercase has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="has-text-centered">{index+1}</td>
              <td className="has-text-centered">{product.name}</td>
              <td className="has-text-centered">{product.product}</td>
              <td className="has-text-centered">{product.category}</td>
              <td className="has-text-centered">
							<button className="button is-uppercase is-info mr-5">Edit</button>	
							<button className="button is-uppercase is-danger">Delete</button>	
							</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
