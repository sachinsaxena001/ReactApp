// Filename - Edit.js
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./bootstrap.min.css";
import product from "./product";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [expiry, setExpitry] = useState("");
  const [description, setDesciption] = useState("");
  const [id, setID] = useState("");

  // Used for navigation with logic in javascript
  let history = useNavigate();

  // Getting an index of an entry with an id
  var index = product.map(function (e) { 
	return e.id; }).indexOf(id);
	 

  // Function for handling the edit and
  // pushing changes of editing/updating
  const handelSubmit = (e) => {
    // Preventing from reload
    e.preventDefault();

    // Getting an index of an product
    let a = product[index]
    a.Category = category
	a.Price = price
	a.ExpiryDate = expiry
	a.Description = description
      
    history("/");
  };

  // Useeffect take care that page will
  // be rendered only once
  useEffect(() => {
    setCategory(localStorage.getItem("Category"));
    setPrice(localStorage.getItem("Price"));
    setExpitry(localStorage.getItem("ExpiryDate"));
    setDesciption(localStorage.getItem("Desciption"));
    setID(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Control
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Category"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formExpiry">
          <Form.Control
            value={expiry}
            onChange={(e) => setExpitry(e.target.value)}
            type="text"
            placeholder="Expiry"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Control
            value={description}
            onChange={(e) => setDesciption(e.target.value)}
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
          size="lg"
        >
          Update
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
