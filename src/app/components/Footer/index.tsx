import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import IconGithub from '../../assets/img/github.svg';
import IconLinkedin from '../../assets/img/linkedin.svg';

import FooterStyle from '../../assets/styled/components/FooterStyled';

const Footer: FC = () => {
  return (
    <FooterStyle>
      <div>
        <p>
          Powered by <b>Ivan Espínola</b> |
        </p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="https://github.com/i-espinola" target="blank">
              <img src={IconGithub} alt="github.com/i-espinola" />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/iespinola/" target="blank">
              <img src={IconLinkedin} alt="in/iespinola" />
            </Link>
          </li>
        </ul>
      </div>
    </FooterStyle>
  );
};

export default Footer;
