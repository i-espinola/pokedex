import styled from 'styled-components';

const BoardStyled = styled.div`
  & .board {
    border: none;
    width: 200px;
    margin-top: 16px;
    border-radius: 10px;
    background: #9e9e9e;
    transition: all 0.5s ease;
    box-shadow: 0px 10px 20px #b5b9c4;

    &:hover {
      box-shadow: none;
      transform: scale(0.99);
    }

    & .board-name {
      font-family: 'SF-Pro-Display-bold', sans-serif;

      & .ant-card-meta-title {
        font-size: 26px;
        line-height: 31px;
        text-transform: capitalize;
        color: #fff;
      }

      & .ant-card-meta-description {
        font-size: 12px;
        line-height: 14px;
        color: rgba(23, 23, 27, 0.6);
      }
    }
  }
`;

export default BoardStyled;
