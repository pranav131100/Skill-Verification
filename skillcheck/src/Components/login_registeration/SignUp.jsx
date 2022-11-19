import React,{useState} from 'react'
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';
import './SignIn.css'



const SignUp = (props) => {

    

    return (
        <>
             <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form>
          <div className="form-item">
            <label htmlFor="name" />
            <input type="text" name="name" required="required" placeholder="Name" />
          </div>
          <div className="form-item">
            <label htmlFor="location" />
            <input type="text" name="location" required="required" placeholder="Location" />
          </div>
          <div className="form-item">
            <label htmlFor="description" />
            <input type="text" name="description" required="required" placeholder="Description" />
          </div>
          <div className="form-item">
          <label htmlFor="role" />
          <select class="form-select" id = "role" aria-label="Default select example">
  <option selected>Select Role</option>
  <option value="organization">Organization</option>
          <option value="individual">Individual</option>
</select>
          </div>
          <div className="button-panel">
            <input type="submit" className="button" title="Register" defaultValue="Register" />
          </div>
        </form>
        {/* <div className="form-footer">
          <p><a href="#">Already have an account</a></p>
          <p><a href="#">Forgot password?</a></p>
        </div> */}
      </div>
        </>
    )
}



export default SignUp;
