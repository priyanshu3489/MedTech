import React, { useState } from 'react'
import { Button, Form, ButtonGroup, ToggleButton } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Male', value: '1' },
    { name: 'Female', value: '2' },
    { name: 'Other', value: '3' },
  ];


  const [selectedDate, setselectedDate] = useState(new Date());

  return (
    <div className="row my-3">
      <Form className="mx-auto ">
        <h2 className='mx-auto '>Registration</h2>

        {/* first name */}
        <Form.Group className="mb-3" controlId="ControlTextarea">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name." />
        </Form.Group>

        {/* last name */}
        <Form.Group className="mb-3" controlId="ControlTextarea">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name." />
        </Form.Group>

        {/* Gender */}
        <Form.Label>Gender</Form.Label>
        <Form.Group className="mb-3" >
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={`idx % {onclick}` ? 'outline-dark' : 'outline'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Form.Group>

        {/* Birthdate */}
        <Form.Group>
          <Form.Label>BirthDate</Form.Label>
        </Form.Group>
        {/* <input className='mb-3' type="date" onChange={e=>setDate(e.target.value)}/> */}
        <DatePicker className='mb-3' selected={selectedDate} onChange={(date) => setselectedDate(date)} dateFormat="dd-MM-yyyy" />

        {/* mobileno */}
        <Form.Group className="mb-3" controlId="mobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Mobile No." />
          <Form.Text className="text-muted">
            Please Enter Valid Mobile Number.
          </Form.Text>
        </Form.Group>

        {/* password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* comform password */}
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="cpassword" placeholder="Password" />
        </Form.Group>

        {/* email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {/* address */}
        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>

        {/* city */}
        <Form.Group className="mb-3" controlId="ControlTextarea2">
          <Form.Label>City</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>

        {/* state */}
        <Form.Group className="mb-3" controlId="ControlDropdown1">
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
        </Form.Group>

        {/* BloodGroup */}
        <Form.Group className="mb-3" controlId="ControlDropdown2">
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
        </Form.Group>

        {/* Weight */}
        <Form.Group className="mb-3" controlId="weigth">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="number" placeholder="Enter your current weight" />
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
        <Button className="mx-auto col-10 col-md-8 col-lg-4" variant="primary" type="login">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Signup
