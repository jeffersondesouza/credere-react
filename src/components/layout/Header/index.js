import React from 'react';

import './style/Header.scss';

const Header = () => (
  <header className="header">
    <figure className="header__brand">
      <img className="header__brand-img" srcSet="src/assets/img/credere-logo.png" alt="credere logo" />
    </figure>
  </header>
);

export default Header;