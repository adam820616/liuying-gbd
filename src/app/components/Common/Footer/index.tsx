import React from 'react';
import './style.scss';
import logo from 'assets/images/logo_footer.svg'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo_footer"><img width="88" src={logo} /></div>
      <div></div>
    </div>
  );
};
