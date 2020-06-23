import styled from 'styled-components';
import pokeballImg from '../img/pokeball.svg';

const MainStyle = styled.main`
  font-family: 'SF-Pro-Display', sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: left;
  line-height: 1.5;
  color: #747476;
  font-size: 1rem;
  margin: 0;
  background: url(${pokeballImg}) no-repeat 50% 0%;
  background-size: auto;

  & section {
    height: auto;
    width: 100vw;
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export default MainStyle;
