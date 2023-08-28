import styled from 'styled-components';
var mediaQuery = require('css-mediaquery');

export const Box = styled.div`
  bottom: 0;
  margin: -50px 0px 0px 0px;
`;

export const Container = styled.div`
  position: relative;
  background: rgb(13 110 253 / 25%);
  padding: 60px 10px;
  padding-left: 90px;
  color: black;
  @media (max-width: 1000px) {
    padding: 60px 10px;
    padding-left: 30px;
    }
`;

export const Header = styled.div`
  font-size: 48px;
  font-decoration: Bold;
  @media (max-width: 1000px) {
    font-size: 25px;
    font-decoration: Bold;
    }
`;
export const Subheader = styled.div`
  font-size: 24px;
  margin-top: -20px;
  margin-bottom: 20px;
  margin-left: 5px;
  @media (max-width: 1000px) {

    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 20px;
    margin-left: 3px;
    }
`;

export const List = styled.div`
  font-size: 20px;
  @media (max-width: 1000px) {

    font-size: 12px;
    }
`;
export const Info = styled.div`
  font-size: 18px;
  line-height: 25px;
  @media (max-width: 1000px) {
    font-size: 12px;
    line-height: 14px;
    }
`;
export const Desc = styled.div`
  font-size: 30px;
  margin: 30px;
  font-family: Arial,Helvetica,Sans-serif;
  @media (max-width: 1000px) {
    margin: 15px;
    font-size: 20px;
    line-height: 25px;
    font-family: Arial,Helvetica,Sans-serif;
    }
`;

export const Heading = styled.div`
  font-size: 25px;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;
export const Inline = styled.div`
  height: 350px;
  @media (max-width: 1000px) {
    height: 420px;
  }
`;

export const R = styled.div`
  height: 300px;
  width: 300px;
  margin: 30px;
  margin-left: 100px;
  background: rgb(13 110 253 / 25%);

  @media (max-width: 1000px) {
    height: 250px;
    width: 250px;
    margin: 20px 70px 20px 70px;
    background: rgb(13 110 253 / 25%);
    }
`;

export const RInfo = styled.div`
  font-size: 20px;
  margin-left: 500px;
  margin-top: -340px;
  position: relative;
  @media (max-width: 1000px) {
  font-size: 15px;
  line-height: 25px;
  margin: 0px 0px 10px 20px;
  position: flex;
  }
`;

export const L = styled.div`
  height: 300px;
  width: 300px;
  margin: 30px;
  margin-left: 900px;
  background: rgb(13 110 253 / 25%);

  @media (max-width: 1000px) {
    height: 250px;
    width: 250px;
    margin: 20px 70px 20px 70px;
    background: rgb(13 110 253 / 25%);
    }
`;

export const LInfo = styled.div`
  font-size: 20px;
  width: 750px;
  margin-left: 100px;
  margin-top: -340px;
  margin-bottom: 400px;
  position: relative;
  @media (max-width: 1000px) {
    font-size: 15px;
    width: 375px;
    line-height: 25px;
    margin: 0px 0px 10px 20px;
    position: flex;
  }
`;

// export const DmrH = styled.div`

//   @media (max-width: 1000px) {

//   }
// `;