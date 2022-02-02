import React from "react";
import 'materialize-css';
import { Navbar, NavItem, Icon, } from 'react-materialize';
import '../App.css'
import Hawa from '../images/nav-icon.png'

const NavBar = () => {
  

  return (
<div class="navbar-fixed">
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo left" href="#"><h4>H.</h4></a>}
      id="mobile-nav"
      className="black"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem onClick={function noRefCheck() { }}>
      </NavItem>
      <NavItem href="/">
        Home
    </NavItem>
    <NavItem href="/work">
        My Work
    </NavItem>
      <NavItem href="/aboutme">
        About Me
    </NavItem>
    <NavItem href="/resume">
        Resume
    </NavItem>
      
      
    </Navbar>
    </div>
  );
}

export default NavBar;