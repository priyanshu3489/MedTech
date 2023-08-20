import React, {useState} from 'react'
import { Button, Form, ButtonGroup, ToggleButton  } from 'react-bootstrap';
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
        <DatePicker className='mb-3'selected={selectedDate} onChange={(date) => setselectedDate(date)} dateFormat = "dd-MM-yyyy"/>
        

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
        <Form.Group>

        </Form.Group>

        {/* email */}
        <Form.Group>

        </Form.Group>

        {/* address */}
        <Form.Group>

        </Form.Group>

        {/* city */}
        <Form.Group>

        </Form.Group>

        {/* state */}

        <Form.Group>

        </Form.Group>

        {/* BloodGroup */}
        <Form.Group>

        </Form.Group>

        {/* Weight */}
        <Form.Group>

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
