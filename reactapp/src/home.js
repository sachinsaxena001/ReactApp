import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./bootstrap.min.css";
import product from "./product";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  // Deleted function - functionality
  // for deleting product
  function deleted(id) {
    var index = product
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    // deleting the entry with index
    product.splice(index, 1);

    // We need to re-render the page for getting
    // the results so redirect to same page.
    history("/");
  }

  const [products, setFilteredProducts] = useState(product);

  const filterByCategory = (category) => {
    if(category === "Select")
      setFilteredProducts(product);
    else {
      setFilteredProducts(
        product.filter((product) => product.Category === category)
      );
    }
      
  };

  // Getting unique categories
  const categories = Array.from(
    new Set(product.map((product) => product.Category))
  );

  function editHandler(item) {
    history("/edit", { state: item });
  }


  return (
    <div style={{ margin: "1%", width: "100%" }}>
      <div className="Style-Div-Gap">
        <select
          name="category-list"
          id="category-list"
          // value={this.category}
          onChange={(e) => filterByCategory(e.target.value)}
        >
          <option value="Select">
            Select
          </option>
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <table size="sm" className="Styled-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Price</th>
            <th>ExpiryDate</th>
            <th>Description</th>
            <th>Special</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id} className={item.IsSpecial ? "Active-Row" : ""}>
                <td>{item.Category}</td>
                <td>{item.Price}</td>
                <td>{item.ExpiryDate}</td>
                <td>{item.Description}</td>
                <td>{item.IsSpecial}</td>

                <td>
                  <Button onClick={(e) => editHandler(item)} variant="info">
                    Update
                  </Button>
                </td>
                <td>
                  <Button onClick={(e) => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <a className="CreateBtn" href="/create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </a>
    </div>
  );
}

export default Home;
