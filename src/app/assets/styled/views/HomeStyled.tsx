import styled from 'styled-components';

export const Paginate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    &.ant-pagination-item {
      &:focus,
      &:hover {
        border-color: #9e9e9e;

        & a {
          color: #9e9e9e;
        }
      }

      &.ant-pagination-item-active {
        font-weight: 500;
        background: #9e9e9e;
        border-color: #9e9e9e;

        & a {
          color: #ffffff;
        }
      }
    }
  }
`;

export const Input = styled.div`
  & span {
    background: #f2f2f2;
    border-radius: 10px;
    border: none;
    height: 60px;

    &.ant-input-affix-wrapper-focused {
      border-color: transparent;
      border-right-width: 0px;
      outline: 0;
      -webkit-box-shadow: none;
      box-shadow: inset 0 0 5px 1px #bebebe;
      transition: all 0.5s ease;
      transform: scale(0.995);
    }

    & span {
      margin: 15px;
      height: auto;
    }

    & input {
      background: #f2f2f2;
      color: #747476;
      padding-left: 20px;

      &::placeholder {
        color: #747476;
      }

      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #747476;
      }

      &::-moz-placeholder {
        /* Firefox 19+ */
        color: #747476;
      }

      &:-ms-input-placeholder {
        /* IE 10+ */
        color: #747476;
      }

      &:-moz-placeholder {
        /* Firefox 18- */
        color: #747476;
      }
    }
  }
`;

export const Items = styled.div`
  margin: 45px 0;

  & .ant-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
