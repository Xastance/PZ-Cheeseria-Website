import { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, // Add this import for NavLink
} from 'reactstrap';
import { Book, Gift } from 'react-bootstrap-icons'; // Add this import for the icons
import Logo from '../assets/logo/cheese-logo.png';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand tag={RRNavLink} to="/" className="d-flex align-items-center">
                    <img src={Logo} alt="logo" className="rounded" width="30" height="30" />
                    <span className="ms-2 pb-1">PZ Cheeseria</span>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        {/* Cheese Recipes */}
                        <NavItem>
                            <NavLink className="link-light" tag={RRNavLink} to="/recipes">
                                <Book className="m-1" size={20} />  {/* Recipes icon */}
                                Cheese Recipes
                            </NavLink>
                        </NavItem>

                        {/* Cheese Gifts */}
                        <NavItem>
                            <NavLink className="link-light" tag={RRNavLink} to="/gifts">
                                <Gift className="m-1" size={20} />  {/* Gifts icon */}
                                Cheese Gifts
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
