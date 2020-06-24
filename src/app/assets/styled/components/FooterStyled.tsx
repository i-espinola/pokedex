import styled from 'styled-components';

const FooterStyled = styled.footer`
  color: #747476;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #f2f2f2;
  padding-top: 10px;

  & div {
    p {
      font-size: 16px;
      line-height: 19px;
      margin: 0;

      b {
        letter-spacing: 0.5px;
      }
    }
    ul {
      display: inline-flex;
      list-style: none;
      padding: 0;
      margin: 0;

      img {
        width: 20px;
        height: auto;
        margin: 0 5px;
      }
    }
  }
`;

export default FooterStyled;
