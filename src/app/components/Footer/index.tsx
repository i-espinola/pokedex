import React, { FC } from 'react';
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
            <a href="https://github.com/i-espinola" target="blank">
              <img src={IconGithub} alt="github.com/i-espinola" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/iespinola/" target="blank">
              <img src={IconLinkedin} alt="in/iespinola" />
            </a>
          </li>
        </ul>
      </div>
    </FooterStyle>
  );
};

export default Footer;
