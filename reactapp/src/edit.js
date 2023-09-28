// Filename - Edit.js
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./bootstrap.min.css";
import product from "./product";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Edit() {
  const test = useLocation();
  // Used for navigation with logic in javascript
  let history = useNavigate();

  // Getting an index of an entry with an id
  var index = product
    .map(function (e) {
      return e.id;
    })
    .indexOf(test.state.id);

  // Function for handling the edit and
  // pushing changes of editing/updating
  const handelSubmit = (e) => {
    // Preventing from reload
    e.preventDefault();
    // Getting an index of an product
    let a = product[index];
    console.log(e.target);
    a.Category = e.target.formCategory.value
    a.Price = e.target.formPrice.value
    a.ExpiryDate = e.target.formExpiry.value
    a.Description = e.target.formDescription.value
    history("/");
  };

  // Useeffect take care that page will
  // be rendered only once
  useEffect(() => {}, []);

  return (
    <div>
      <Form
        id={test.state.id}
        className="d-grid gap-2"
        style={{ margin: "15rem" }}
        onSubmit={handelSubmit}
      >
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Control
            
            defaultValue={test.state.Category}
            type="text"
            placeholder="Category"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Control
            defaultValue={test.state.Price}
            
            type="text"
            placeholder="Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formExpiry">
          <Form.Control
            defaultValue={test.state.ExpiryDate}
            
            type="text"
            placeholder="Expiry"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Control
            defaultValue={test.state.Description}
            
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
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
