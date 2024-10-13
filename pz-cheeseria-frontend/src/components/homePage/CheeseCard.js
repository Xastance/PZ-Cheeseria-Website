import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Calculator } from 'react-bootstrap-icons';
import CalculatorModal from '../modals/CalculatorModal';

import brokenImage from '../../assets/broken-image.png';

const CheeseCard = ({ cheese }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    // Prevent the click on the calculator from triggering the link
    const handleCalculatorClick = (event) => {
        event.stopPropagation(); // Prevent link navigation
        event.preventDefault();  // Prevent link default behavior
        toggleModal();
    };

    const getImageSrc = (imageUrl) => {
        try {
            return require(`../../assets/cheese/${cheese.image_url}`);
        } catch (error) {
            console.error(`Image not found: ${imageUrl}. Using default image.`);
            return brokenImage;
        }
    };

    return (
        <>
            <Link to={`/cheese/${cheese.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="m-3 shadow-sm" style={{ minWidth: '250px', maxWidth: '300px' }}>
                    <CardImg 
                        width="100%"                    
                        src={getImageSrc(cheese.image_url)} 
                        alt={cheese.type} 
                        className="img-fluid mx-auto d-block rounded shadow" 
                        style={{ maxWidth: '100%', minHeight:'200px', maxHeight: '200px', objectFit: 'scale-down' }}
                        />
                    {console.log(process.env.PUBLIC_URL + '/assets/cheese/Cheddar.jpg')}
                    <CardBody>
                        <CardTitle tag="h5">{cheese.type}</CardTitle>
                        <CardText>
                            <strong>Country:</strong> {cheese.country_of_origin} <br />
                            <strong>Price per Kg:</strong> ${cheese.price_per_kilo}{' '}
                            <Calculator
                                onClick={handleCalculatorClick}
                                style={{ cursor: 'pointer' }}
                                size={20}
                                color="gray"
                                className="ms-2"
                            />
                            <br />
                            <strong className="text-nowrap">Flavour:</strong> {cheese.flavour} <br />
                        </CardText>
                        <CardText className="cheese-description">
                            {cheese.description}
                        </CardText>
                    </CardBody>
                </Card>
            </Link>

            {/* Calculator Modal */}
            <CalculatorModal
                isOpen={modalOpen}
                toggle={toggleModal}
                pricePerKg={cheese.price_per_kilo}
            />
        </>
    );
};

export default CheeseCard;
