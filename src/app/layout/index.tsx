import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../assets/styled/layouts/LayoutStyled';
import GlobalStyle from '../assets/styled/GlobalStyle';

interface IProps {
  header?: boolean;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  footer?: boolean;
}

const Main = (props: IProps) => {
  const { header, title, subtitle, children, footer } = props;

  const descriptionPage = () => (
    <Description>
      {title ? <h1>{title}</h1> : null}
      {subtitle ? <span className="subtitle">{subtitle}</span> : null}
    </Description>
  );

  return (
    <>
      <GlobalStyle />
      {header ? <Header /> : null}
      <section>
        {title || subtitle ? descriptionPage() : null}
        {children}
      </section>
      {footer ? <Footer /> : null}
    </>
  );
};

Main.defaultProps = {
  header: true,
  footer: true,
};

export default Main;
