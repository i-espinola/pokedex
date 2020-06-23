import styled from 'styled-components';

const FooterStyled = styled.footer`
  color: #747476;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

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
