import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
background: rgba(2, 25, 95, 0.9)
`;

const Tabs = styled(NavLink)`
font-size: 20px;
color: inherit;
margin-right: 20px;
text-decoration: none;
`;

const Navbar = () => {
  return (
      <Header position="static">
          <Toolbar>
            <Tabs to='/'>Code for Inerview</Tabs>
            <Tabs to='/all'>All Users</Tabs>
            <Tabs to='/add'>Add User</Tabs>
          </Toolbar>
      </Header>
  );
};

export default Navbar;
