import logo from '../images/netflix-logo.png';

import profileIcon from '../images/profile-icon.jpg';

import '../Header.css'

import { useRef, useEffect, useState, Children } from "react";

import {Link, useMatch, useResolvedPath} from "react-router-dom"

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

      <CustomLink to="/" className="logo"><img src={logo} width="15%" /></CustomLink>

      <div className="header_Nav">

        
        <CustomLink to="/">Home</CustomLink>
        <Link to="#">TV Shows</Link>
        <CustomLink to="/AllMovies">Movies</CustomLink>
        
        <Link to="#">New & Popular</Link>
        <Link to="#">My List</Link>
        <Link to="#">Browse by Languages</Link>


        {/* <i className="ri-account-circle-fill"></i> */}
      </div>

      <div className="user-icons">

        <i className="ri-search-line"></i>
        <Link className="nav-kids" to="#">Kids</Link>
        <i className="ri-notification-2-line"></i>
        <Link to="#"><img src={profileIcon} /></Link>




      </div>



      {/* <div class="bx bx-menu" id="menu-icon"></div> */}

    </header>

  );
}

function CustomLink({to, children,  ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link className = {isActive ? "active" : ""} to={to} {...props}>{children}</Link>
  )
}

export default Header;