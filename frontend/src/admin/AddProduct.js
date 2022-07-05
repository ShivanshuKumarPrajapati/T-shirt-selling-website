import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Base from "../core/Base";

const AddProduct = () => {

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock:""
    });

    const { name, description, price, stock } = values;

    const onSubmit = () => {
    
}

    const handleChange = () => {
    
}


  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success mt-3">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group  mt-3">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group  mt-3">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group  mt-3">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group  mt-3">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          <option value="a">a</option>
          <option value="b">b</option>
        </select>
      </div>
      <div className="form-group  mt-3">
        <input
          onChange={handleChange("quantity")}
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mt-3 mb-3"
      >
        Create Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add product here!"
      description="Welcome to product creation section"
      className="container bg-dark p-4"
    >
      <div className="row bg-white rounded">
              <div className="col-md-8 offset-md-2 ">
                  
                  {createProductForm()}
            <div className="mt-5">
            <Link
                className="btn btn-sm btn-outline-danger mb-3 px-3 rounded-3"
                to="/admin/dashboard"
            >
                Back
            </Link>
            </div>
              </div>
      </div>
    </Base>
  );
};

export default AddProduct;
