import React, { useState } from 'react'
import { Button, Form, ButtonGroup, ToggleButton } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ fname: "", lname: "", gender: "", birthdate: "", mobileno: "", password: "", cpassword: "", email: "", address: "", city: "", state: "", bloodgroup: "", weight: "" })

  let history = useHistory();

  // call create user api and take all credential
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, gender, birthdate, mobileno, password, email, address, city, state, bloodgroup, weight } = credentials;
    const response = await fetch("http://localhost:5000/api/authpatient/createpatient", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ fname, lname, gender, birthdate, mobileno, password, email, address, city, state, bloodgroup, weight }),
    });


    const json = await response.json()
    console.log(json)
    if (json.success) {
      // save and redirect
      localStorage.setItem('token', json.authtoken);
      history.push("/login");
      // props.showAlert("Account Created Successfully", "success")
    }
    else {
      // props.showAlert("Invalid Credential", "danger")
    }
  }


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'gender', value: 'Male' },
    { name: 'gender', value: 'Female' },
    { name: 'gender', value: 'Other' },
  ];
  const [selectedDate, setselectedDate] = useState(new Date());

  return (
    <div className="row my-3">
      <Form className="mx-auto mx-auto col-10 col-md-8 col-lg-8" onSubmit={handleSubmit}>
        <h2 className='mx-auto mx-auto col-10 col-md-8 col-lg-3'>Registration</h2>

        {/* first name */}
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" className="form-control" id="fname" name="fname" onChange={onChange} placeholder="Enter First Name." />
        </Form.Group>

        {/* last name */}
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" className="form-control" id="lname" name="lname" onChange={onChange} placeholder="Enter Last Name." />
        </Form.Group>

        {/* Gender */}
        <Form.Group className="mb-3" >
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" className="form-control" id="gender" name="gender" onChange={onChange}  placeholder="Enter Gender" />
        </Form.Group>
        {/* <Form.Label>Gender</Form.Label>
        <Form.Group className="mb-3" >
          {radioValue}
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={`idx % {onclick}` ? 'outline-dark' : 'outline'}
                name={`radio-${idx}`}
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value) }
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Form.Group> */}

        {/* Birthdate */}
        <Form.Group>
          <Form.Label>BirthDate</Form.Label>
          <Form.Control type="date" className="form-control" id="birthdate" name="birthdate" onChange={onChange} />
        </Form.Group>
        {/* <input className='mb-3' type="date" onChange={e=>setDate(e.target.value)}/> */}
        {/* <DatePicker className='mb-3' selected={selectedDate} onChange={(date) => setselectedDate(date)} 
        dateFormat="yyyy-MM-dd" /> */}

        {/* mobileno */}
        <Form.Group className="mb-3" >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" className="form-control" id="mobileno" name="mobileno" onChange={onChange}  placeholder="Enter Mobile No." />
          <Form.Text className="text-muted">
            Please Enter Valid Mobile Number.
          </Form.Text>
        </Form.Group>

        {/* password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" className="form-control" id="password" name="password" minLength={5} onChange={onChange}  placeholder="Password" />
        </Form.Group>

        {/* comform password */}
        <Form.Group className="mb-3" >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="cpassword" className="form-control" id="cpassword" minLength={5} name="cpassword" onChange={onChange} placeholder="Password" />
        </Form.Group>

        {/* email */}
        <Form.Group className="mb-3" >
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" className="form-control" id="email" name="email" onChange={onChange} placeholder="Enter email" />
        </Form.Group>

        {/* address */}
        <Form.Group className="mb-3" >
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" className="form-control" id="address" name="address" onChange={onChange}  rows={2} placeholder="Enter Your Current Address" />
        </Form.Group>

        {/* city */}
        <Form.Group className="mb-3" >
          <Form.Label>City</Form.Label>
          <Form.Control type='text' className="form-control" id="city" name="city" onChange={onChange}  placeholder="Enter Your City" />
        </Form.Group>

        {/* state */}
        <Form.Group className="mb-3" >
          <Form.Label>State</Form.Label>
          <Form.Control type='text' className="form-control" id="state" name="state" onChange={onChange}  placeholder="Enter Your State" />
        </Form.Group>
        {/* <Form.Group className="mb-3" >
          <Form.Label>State</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Your State</option>
            <option value="1">Andhra Pradesh</option>
            <option value="2">Arunachal Pradesh</option>
            <option value="3">Assam</option>
            <option value="4">Bihar</option>
            <option value="5">Chhattisgrah</option>
            <option value="6">Goa</option>
            <option value="7">Gujarat</option>
            <option value="8">Haryana</option>
            <option value="9">Himachal Pradesh</option>
            <option value="10">Jharkhand</option>
            <option value="11">Karnataka</option>
            <option value="12">Kerala</option>
            <option value="13">Madhya Pradesh</option>
            <option value="14">Maharashtra</option>
            <option value="15">Manipur</option>
            <option value="16">Meghalaya</option>
            <option value="17">Mizoram</option>
            <option value="18">Nagaland</option>
            <option value="19">Odisha</option>
            <option value="20">Punjab</option>
            <option value="21">Rajasthan</option>
            <option value="22">Sikkim</option>
            <option value="23">TamilNadu</option>
            <option value="24">Telangana</option>
            <option value="25">Tripura</option>
            <option value="26">Uttarakhad</option>
            <option value="27">Uttar Pradesh</option>
            <option value="29">Andaman & Nicobar Island</option>
            <option value="30">Chandigrah</option>
            <option value="31">Dadra and Nagar Haveli and Daman & Diu</option>
            <option value="32">Jammu & Kashmir</option>
            <option value="33">Ladakh</option>
            <option value="34">Lakshadweep</option>
            <option value="35">Puducherry</option>
          </Form.Select>
        </Form.Group> */}

        {/* BloodGroup */}
        <Form.Group className="mb-3" >
          <Form.Label>Bloodgroup</Form.Label>
          <Form.Control type='text' className="form-control" id="bloodgroup" name="bloodgroup" onChange={onChange}  placeholder="Enter Your City" />
        </Form.Group>
        {/* <Form.Group className="mb-3" >
          <Form.Label>BloodGroup</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Your Bloodgroup</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="3">B+</option>
            <option value="4">B-</option>
            <option value="5">AB+</option>
            <option value="6">AB-</option>
            <option value="7">O+</option>
            <option value="8">O-</option>
          </Form.Select>
        </Form.Group> */}

        {/* Weight */}
        <Form.Group className="mb-3" >
          <Form.Label>Weight</Form.Label>
          <Form.Control type="number"  className="form-control" id="weight" name="weight" onChange={onChange}  placeholder="Enter your current weight" />
        </Form.Group>

        {/* BloodSuger */}
        <Form.Group>

        </Form.Group>

        {/* BloodPressure */}
        <Form.Group>

        </Form.Group>

        {/* eyespower */}
        <Form.Group>

        </Form.Group>

        {/* handicap */}
        <Form.Group>

        </Form.Group>

        {/* Insurance */}
        <Form.Group>

        </Form.Group>

        {/* Photo Upload */}
        {/* <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Your Photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group> */}

        <Button className="mx-auto col-5 col-md-8 col-lg-3" variant="primary" type="register" >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup
