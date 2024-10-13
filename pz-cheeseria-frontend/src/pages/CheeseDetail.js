import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { getCheeseById } from '../api/cheeseApi';
import { Calculator } from 'react-bootstrap-icons';
import CalculatorModal from '../components/modals/CalculatorModal';

import brokenImage from '../assets/broken-image.png';

const CheeseDetail = () => {
    const { id } = useParams();
    const [cheese, setCheese] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Fetch cheese data by ID
    useEffect(() => {
        const fetchCheese = async () => {
            try {
                const data = await getCheeseById(id);
                setCheese(data);
            } catch (error) {
                console.error('Error fetching cheese:', error);
            }
        };

        fetchCheese();
    }, [id]);
    
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    
    //display image if found, else display broken image
    const getImageSrc = (imageUrl) => {
        try {
            return require(`../assets/cheese/${cheese.image_url}`);
        } catch (error) {
            console.error(`Image not found: ${imageUrl}. Using default image.`);
            return brokenImage;
        }
    };

    // should never see this fingers crossed
    if (!cheese) return <p>Loading...</p>;

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md="6" className="text-center">
                    <img 
                        src={getImageSrc(cheese.image_url)} 
                        alt={cheese.type} 
                        className="img-fluid mx-auto d-block rounded shadow" 
                        style={{ maxWidth: '100%', maxHeight: '400px' }}
                    />
                </Col>
                <Col md="6">
                    <h1>{cheese.type}</h1>
                    <p><strong>Made from:</strong> {cheese.made_from}</p>
                    <p><strong>Country of origin:</strong> {cheese.country_of_origin}</p>
                    <p><strong>Family:</strong> {cheese.family}</p>
                    <p><strong>Type:</strong> {cheese.type}</p>
                    <p><strong>Texture:</strong> {cheese.texture}</p>
                    <p><strong>Flavour:</strong> {cheese.flavour}</p>
                    <p><strong>Aroma:</strong> {cheese.aroma}</p>
                    <p>
                        <strong>Price per Kg:</strong> ${cheese.price_per_kilo}{' '}
                        <Calculator
                            onClick={toggleModal}
                            style={{ cursor: 'pointer', marginLeft: '10px' }}
                            size={20}
                            color="gray"
                        />
                    </p>
                    <p><strong>Description:</strong> {cheese.description}</p>
                    <p><strong>Vegetarian:</strong> {cheese.is_vegetarian ? 'Yes' : 'No'}</p>
                </Col>
            </Row>

            {/* Calculator Modal */}
            <CalculatorModal
                isOpen={modalOpen}
                toggle={toggleModal}
                pricePerKg={cheese.price_per_kilo}
            />
        </Container>
    );
};

export default CheeseDetail;
