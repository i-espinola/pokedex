import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import BrandStyle from '../../assets/styled/components/BrandStyled';

const Logotype: FC = () => (
  <Link to="/">
    <BrandStyle>
      <h2 className="brand">Pokédex</h2>
    </BrandStyle>
  </Link>
);

export default Logotype;
