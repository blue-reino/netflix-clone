import logo from '../images/netflix-logo.png';

import profileIcon from '../images/profile-icon.jpg';

import '../Header.css'





import { useRef, useEffect, useState } from "react";



const Header = () => {

    const [navbar, setNavBar] = useState(false);

    const changeBackground = () => {

      if (window.scrollY >= 70) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }

    };

    window.addEventListener('scroll', changeBackground);


    return (

      <header className={navbar ? 'header active' : 'header'}>

        <a href="#" className="logo"><img src={logo} width="15%" /></a>

        <div className="header_Nav">

          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>


          {/* <i className="ri-account-circle-fill"></i> */}
        </div>

        <div className="user-icons">

          <i className="ri-search-line"></i>
          <a className="nav-kids" href="#">Kids</a>
          <i className="ri-notification-2-line"></i>
          <a href="#"><img src={profileIcon} /></a>




        </div>



        {/* <div class="bx bx-menu" id="menu-icon"></div> */}

      </header>

    );
  }


  export default Header;