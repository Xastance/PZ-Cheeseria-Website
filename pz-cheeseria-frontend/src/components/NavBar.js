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
                        {/* Cheese Recipes Link: Leads to a page displaying various cheese recipes. 
                        This page could allow users to browse different recipes that use various cheeses.  
                        Possible functionalities: filter recipes by cheese type, region, difficulty, or other criteria.  
                        Users could also view recipe details, including ingredients, 
                        method, and suggestions for cheese pairings. */}
                        <NavItem>
                            <NavLink className="link-light" tag={RRNavLink} to="/recipes">
                                <Book className="m-1" size={20} />  {/* Recipes icon */}
                                Cheese Recipes
                            </NavLink>
                        </NavItem>

                        {/* Cheese Gifts Link: Leads to a page showcasing gift items or bundles 
                        related to cheeses. This page could display curated cheese gift sets, 
                        personalized gifts, or other items related to cheese.  
                        Possible functionalities: browse available gifts, filter by price or occasion, 
                        view product details,  and add items to the shopping cart or wishlist. */}
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
