
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "White", 
                   textAlign: "center", 
                   marginTop: "-90px",
                   marginBottom: "30px", }}>
        MedTech 
        <h6>Health Monitoring System</h6>
      </h1>
      
      <Container>
        <Row>
           <Column>
            <Heading>Support Team</Heading>
            <FooterLink >Priyanshu Hirpara</FooterLink>
            <FooterLink >Jaimin Dholakiya</FooterLink>
            <FooterLink >Yash Gelani</FooterLink>
            <FooterLink >Akash Kanani</FooterLink>
          </Column>
          <Column>
            <Heading>Products</Heading>
            <FooterLink href="#">Digital Medical Record</FooterLink>
            <FooterLink href="#">Online Appointment System</FooterLink>
            <FooterLink href="#">Customize Reminder</FooterLink>
            <FooterLink href="#">E-Consultancy</FooterLink>
            <FooterLink href="#">Pharmacy</FooterLink>
            <FooterLink href="#">Meet My Doctor</FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Mission</FooterLink>
          </Column>
          <Column>
            <Heading>Follow Us</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-linkedin">
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer
