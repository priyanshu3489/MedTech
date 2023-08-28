import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 100px 60px;
  background: rgb(24, 49, 83);
  position: relative;
  bottom: 0;
  width: 100%;
  
`;

 // @media (max-width: 1000px) {
  //   padding: 140px 30px;
  // }
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: cyan; */
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  margin-bottom: -20px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
`;

// @media (max-width: 1000px) {
  //   grid-template-columns: repeat(auto-fill, 
  //                          minmax(200px, 1fr));
  // }
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 15px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: cyan;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;