import React from 'react';
import './style.scss';
import NavBar from 'app/components/NavBar'

const navLogo = <a href="#" ><span className="logo" /></a>

// const navTheme = {
//   mainColor: '#52b788',
//   menuBgColor: '#edf7f3'
// }

const topLinks = <div className="button_group">
  <a className="lg_button" href="#">Login</a>
  <a className="lg_button primary" href="#">Sign Up</a>
</div>

const leftLinks = <>
  <a href='#'>Home</a>
  <a href='#'>RPG</a>
  <a href='#'>Arcade</a>
  <a href='#'>Brain Games</a>
</>

const rightLinks = <>
  <a href='#'>Support</a>
  <a href='#'>Contact Us</a>
</>

export const Header = () => {
  return (
    <NavBar
      className="header"
      menuClassName="navbar--menu"
      brand={navLogo}
      // theme={navTheme}
      topLinks={topLinks}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
    />
    // <div className={styles.header}>
    //   {/* <div className={styles.header_logo}></div> */}
    //   <div className={styles.header_menu}>
    //     <div className={styles.header_menu_button_group}></div>
    //     <div className={styles.header_menu_list}></div>
    //   </div>
    // </div>
  );
};
