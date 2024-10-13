import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupText,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {
    Search,
    SortAlphaDown,
    Flower3,
    Grid,
    Cup,
    Cookie,
    Palette,
    ColumnsGap,
    GlobeAsiaAustralia
} from 'react-bootstrap-icons';

import HomePageCarousel from '../components/homePage/HomePageCarousel';
import CheeseCategoryDisplay from '../components/homePage/CheeseCategoryDisplay';
import CheeseCard from '../components/homePage/CheeseCard';
import logo from '../assets/logo/cheese-logo.png';

import { getAllCheeses } from '../api/cheeseApi';

function Home() {
    const [cheeses, setCheeses] = useState([]);
    const [filteredCheeses, setFilteredCheeses] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isVegetarianFilterActive, setIsVegetarianFilterActive] = useState(false); // New state for vegetarian filter

    useEffect(() => {
        // Fetch cheeses from the API
        const fetchCheeses = async () => {
            try {
                const data = await getAllCheeses();
                setCheeses(data);
                setFilteredCheeses(data);
            } catch (error) {
                console.error('Error fetching cheeses:', error);
            }
        };

        fetchCheeses();
    }, []);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Apply search filter
    const handleSearch = () => {
        let filtered = cheeses;
        if (searchQuery.trim() !== '') {
            filtered = cheeses.filter(cheese =>
                cheese.type.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (isVegetarianFilterActive) {
            filtered = filtered.filter(cheese => cheese.is_vegetarian === 1);
        }
        setFilteredCheeses(filtered);
        setSelectedCategory('');
    };

    // Filter by category and reset the view
    const handleCategoryFilter = (category) => {
        let filteredByCategory = cheeses.filter(cheese => cheese[category]);
        if (isVegetarianFilterActive) {
            filteredByCategory = filteredByCategory.filter(cheese => cheese.is_vegetarian === 1);
        }
        setFilteredCheeses(filteredByCategory);
        setSelectedCategory(category);
    };

    // Handle Vegetarian Cheeses explicitly
    const handleVegetarianFilter = () => {
        setIsVegetarianFilterActive(!isVegetarianFilterActive);
        let vegetarianCheeses = cheeses.filter(cheese => cheese.is_vegetarian === 1);
        if (selectedCategory) {
            vegetarianCheeses = vegetarianCheeses.filter(cheese => cheese[selectedCategory]);
        }
        setFilteredCheeses(vegetarianCheeses);
    };

    // Reset to all cheeses and apply Alphabetical sorting
    const handleSortAlphabetically = () => {
        const sortedCheeses = [...filteredCheeses].sort((a, b) => a.type.localeCompare(b.type));
        setFilteredCheeses(sortedCheeses);
        setSelectedCategory('');
    };

    return (
        <Container className="py-5">
            {/* Logo and Heading Section */}
            <div className="row justify-content-center mb-4">
                <div className="col-auto d-flex align-items-center">
                    <img
                        src={logo}
                        alt="logo"
                        className="rounded ms-3 shadow"
                        width="70"
                        height="70"
                        style={{ borderRadius: '50%', border: '2px solid #D6DCDA' }}
                    />
                    <h1 className="m-3 display-4 fw-bold text-dark">
                        PZ Cheeseria
                    </h1>
                    <img
                        src={logo}
                        alt="logo"
                        className="rounded ms-3 shadow"
                        width="70"
                        height="70"
                        style={{ borderRadius: '50%', border: '2px solid #D6DCDA' }}
                    />
                </div>
            </div>

            {/* Subtitle */}
            <h4 className='text-center text-secondary mb-4'>
                Delicious, hand-crafted cheeses delivered to your door.
            </h4>

            {/* Carousel Section */}
            <div className="mb-5">
                <HomePageCarousel />
            </div>

            {/* Sort/Filter Section */}
            <div className="mb-4">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col md="3" className="d-flex justify-content-center">
                        <Button className="w-100" onClick={handleSortAlphabetically}>
                            <SortAlphaDown size={25} /> Alphabetical
                        </Button>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="w-100">
                            <DropdownToggle caret className="w-100">
                                <Grid className="m-1" size={20} />
                                Cheeses by Category
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => handleCategoryFilter('country_of_origin')}>
                                    <GlobeAsiaAustralia className="m-1" size={20} />
                                    Cheese by Country
                                </DropdownItem>
                                <DropdownItem onClick={() => handleCategoryFilter('type')}>
                                    <ColumnsGap className="m-1" size={20} />
                                    Cheese by Type
                                </DropdownItem>
                                <DropdownItem onClick={() => handleCategoryFilter('made_from')}>
                                    <Cup className="m-1" size={20} />
                                    Cheese by Milk
                                </DropdownItem>
                                <DropdownItem onClick={() => handleCategoryFilter('texture')}>
                                    <Cookie className="m-1" size={20} />
                                    Cheese by Texture
                                </DropdownItem>
                                <DropdownItem onClick={() => handleCategoryFilter('color')}>
                                    <Palette className="m-1" size={20} />
                                    Cheese by Colour
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <Button className="w-100" onClick={handleVegetarianFilter}>
                            <Flower3 className="m-1" size={20} />
                            Vegetarian Cheeses
                        </Button>
                    </Col>
                    <Col md="3" className="d-flex justify-content-center">
                        <InputGroup className="w-100">
                            <Input
                                type="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Cheeses..."
                            />
                            <InputGroupText onClick={handleSearch} style={{ cursor: 'pointer' }}>
                                <Search size={20} />
                            </InputGroupText>
                        </InputGroup>
                    </Col>
                </Row>
            </div>

            {/* Cheese Cards Section */}
            {selectedCategory ? (
                <CheeseCategoryDisplay cheeses={filteredCheeses} category={selectedCategory} />
            ) : (
                <Row className="justify-content-center">
                    {filteredCheeses.length > 0 ? (
                        filteredCheeses.map((cheese, index) => (
                            <Col key={index} xs="12" sm="6" md="4" lg="3" className="d-flex justify-content-center mb-4">
                                <CheeseCard cheese={cheese} />
                            </Col>
                        ))
                    ) : (
                        <p className="text-center">No cheeses available at the moment.</p>
                    )}
                </Row>
            )}
        </Container>
    );
}

export default Home;
