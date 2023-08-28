import React from 'react'
import { Box, Container, Header, Subheader, List, Desc, Dmr } from './HomeStyles';

const Home = () => {

  return (
    <Box>
      <Container>
        <Header>
          <b>Welcome to MedTech,</b>
        </Header>
        <Subheader>
          Health Monitoring System
        </Subheader>

        <h6><p>Your All-in-One Solution for Steamlized Healthcare Management. Discover A new era of Digital Medical Records(DMR), Seamless online Appointment, Efficient Hospital chaining and Hassle-free Online Billing. Revolutionize the way you Experience Healthcare with MedTech.</p>
        </h6>

        <List>
          <li>Digital Medical Records</li>
          <li>Online Appointment</li>
          <li>Medicine Reminder</li>
          <li>Hospital/Clinic Chaining</li>
        </List>
      </Container>

      <Desc>
        <center>Telemedical plateform form Patients, Hospitals and Doctors</center>
      </Desc>
      
    </Box>







  )
}

export default Home
