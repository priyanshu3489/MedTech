import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = (props) => {
  const [credentials, setCredentials] = useState({ mobileno: "", password: "" })
  let history = useHistory();

  // call the login api and take all credential
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/authpatient/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ mobileno: credentials.mobileno, password: credentials.password }),
    });
    const json = await response.json()
    console.log(json)
    if (json.success) {
      // save and redirect
      localStorage.setItem('token', json.authtoken);
      // props.showAlert("Logged in Successfully", "success")
      history.push("/");

    }
    else {
      // props.showAlert("Invalid Details", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <div className="row my-3">
      <Form className="mx-auto col-10 col-md-8 col-lg-4 " onSubmit={handleSubmit}>
        <h2 className='mx-auto col-10 col-md-8 col-lg-4 my-5'>Login</h2>
        <Form.Group className="mb-3" >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" className="form-control" value={credentials.mobileno} onChange={onChange} id="mobileno" name="mobileno"  placeholder="Enter Mobile No." />
          <Form.Text className="text-muted">
            Please Enter Register Mobile Number.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Password" />
        </Form.Group>
        <Button className="mx-auto col-10 col-md-8 col-lg-4" variant="primary" type="login">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login
