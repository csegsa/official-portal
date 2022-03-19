import React from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";


function Header() {
    const [isNavOpen, setIsNavOpen] = React.useState(true);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    return (
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={toggleNav} />
                <NavbarBrand className="mr-auto" href="/">
                    <img src="https://www.tamu.edu/assets/images/TAM-Logo-white.png" alt="CSEGSA"

                        height="40" width="70" /> CSEGSA
                </NavbarBrand>
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                <span className="fa fa-home fa-lg" />Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/events">
                                <span className="fa fa-info fa-lg" /> Events
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/jobpostings">
                                <span className="fa fa-info fa-lg" /> Resources
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-list fa-lg" />Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default Header;