import styled from 'styled-components';

export const InfoHead = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 2rem;

  & div {
    margin: 0 10px;
  }

  & img {
    background: #fff;
    border-radius: 50%;
    box-shadow: 2px 2px 10px #b5b9c4;
  }

  & h1 {
    font-family: 'SF-Pro-Display-bold', sans-serif;
    text-transform: capitalize;
    font-size: 5rem;
    line-height: 5.5rem;
    margin: 0;
    color: #17171b;
    text-align: center;
  }

  & small {
    font-size: 16px;
    line-height: 19px;
    color: rgba(23, 23, 27, 0.6);
  }

  & dd {
    background: #747476;
    color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    + dd {
      margin: 0 5px;
    }
  }
`;

export const Back = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin-bottom: 1rem;

  & button {
  }
`;

export const CardPokedex = styled.div`
  & p {
    margin-bottom: 0;
    margin-top: 2rem;
    text-transform: capitalize;
  }

  & ul {
    padding: 0;
    list-style: none;
  }

  & span {
    font-size: 2rem;
    color: #000;
  }
`;

export const Page = styled.div`
  display: table;
  margin: 0 auto;
`;
