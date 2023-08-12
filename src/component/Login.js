import React from 'react'
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="row my-3">
      <Form className="mx-auto col-10 col-md-8 col-lg-4 ">
        <h2 className='mx-auto col-10 col-md-8 col-lg-4 my-5'>Login</h2>
        <Form.Group className="mb-3" controlId="mobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Mobile No." />
          <Form.Text className="text-muted">
            Please Enter Register Mobile Number.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="mx-auto col-10 col-md-8 col-lg-4" variant="primary" type="login">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login
