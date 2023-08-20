
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
                   marginTop: "-80px" }}>
        MedTech 
        <h6>Health Monitoring System</h6>
      </h1>
      
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Products</Heading>
            <FooterLink href="#">Digital Medical Record</FooterLink>
            <FooterLink href="#">Online Appointment System</FooterLink>
            <FooterLink href="#">Customize Reminder</FooterLink>
            <FooterLink href="#">Pharmacy</FooterLink>
            <FooterLink href="#">Meet My Doctor</FooterLink>
          </Column>
          <Column>
            <Heading>Support Team</Heading>
            <Footer >Priyanshu Hirpara</Footer>
            <Footer >Jaimin Dholakiya</Footer>
            <Footer >Yash Gelani</Footer>
            <Footer >Akash Kanani</Footer>
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
              <i className="fab fa-linkedIn">
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
