// Filename - Create.js
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './bootstrap.min.css';
import array from './product';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
  
function Create() {
  
    // Making usestate for setting and
    // fetching a value in jsx
    const [category, setcategory] = useState('');
    const [price, setprice] = useState('');
    const [expiry, setexpitry] = useState('');
    const [description, setdesciption] = useState('');
    const [isspecial, setIsSpecial] = useState(false);

    
  
    // Using useNavigation for redirecting to pages
    let history = useNavigate();
  
    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault();  // Prevent reload
  
        const ids = uuid() // Creating unique id
        let uni = ids.slice(0, 8) // Slicing unique id
  
        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = category, b = price, c = expiry, d =description, s = isspecial
        
        array.push({ id: uni, Category: a, Price: b, ExpiryDate : c, Description:d, IsSpecial : s, })
  
        // Redirecting to home page after creation done
        history('/')
    }

    const handleIsSpecial = () => {
        setIsSpecial(!isspecial);
      };
  
    return (
        <div >
            <Form className="d-grid gap-2" 
                style={{ margin: '15rem' }}>
  
                <Form.Group className="mb-3" 
                    controlId="formCategory">
                    <Form.Control onChange=
                        {e => setcategory(e.target.value)}
                        type="text"
                        placeholder="Enter categoty" required />
                </Form.Group>
  
                {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
                <Form.Group className="mb-3" 
                    controlId="formPrice">
                    <Form.Control onChange=
                        {e => setprice(e.target.value)}
                        type="text"
                        placeholder="Price" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formExpiry">
                    <Form.Control onChange=
                        {e => setexpitry(e.target.value)}
                        type="text"
                        placeholder="Expiry" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formDesciption">
                    <Form.Control onChange=
                        {e => setdesciption(e.target.value)}
                        type="text"
                        placeholder="Description" required />
                </Form.Group>

                <Form.Group className="" 
                    controlId="formSpecial">
                    <Form.Check onChange={handleIsSpecial}
                        type="checkbox" checked={setIsSpecial}  
                         />
                </Form.Group>
                <p>Is Special? {isspecial.toString()}</p>
                {/* handing a onclick event in button for
                    firing a function */}

                    <table>
                        <tr>
                            <td>
                            <Button
                    onClick={e => handelSubmit(e)}
                    variant="primary" type="submit">
                    Submit
                </Button>
                            </td>
                            <td>
 {/* Redirecting back to home page */}
 <Link className="d-grid gap-2" to='/'>
                    <Button variant="info" size="">
                        Home
                    </Button>
                    </Link>
                            </td>
                        </tr>
                    </table>
                
                 
               
               
            </Form>
        </div>
    )
}
  
export default Create