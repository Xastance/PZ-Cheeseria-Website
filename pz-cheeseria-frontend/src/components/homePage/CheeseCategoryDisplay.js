import React from 'react';
import { Row, Col } from 'reactstrap';
import CheeseCard from './CheeseCard';

// Helper function to group cheeses by category (like country, type, etc.)
const groupCheesesByCategory = (cheeses, category) => {
    return cheeses.reduce((grouped, cheese) => {
        const categoryValue = cheese[category] || 'Unknown';
        if (!grouped[categoryValue]) {
            grouped[categoryValue] = [];
        }
        grouped[categoryValue].push(cheese);
        return grouped;
    }, {});
};

// Display cheeses grouped by a specific category
const CheeseCategoryDisplay = ({ cheeses, category }) => {
    
    const groupedCheeses = groupCheesesByCategory(cheeses, category);
    
    const sortedCategoryKeys = Object.keys(groupedCheeses).sort();

    return (
        <div>
            {sortedCategoryKeys.map((group) => (
                <div key={group} className="mb-5">
                    <h3 className="text-center mt-4 mb-3 pb-2 border-bottom border-3 border-warning fw-bold">{group}</h3>
                    <Row className="justify-content-center">
                        {groupedCheeses[group]
                            .sort((a, b) => a.type.localeCompare(b.type))
                            .map((cheese) => (
                                <Col key={cheese.id} xs="12" sm="6" md="4" lg="3" className="d-flex justify-content-center mb-4">
                                    <CheeseCard cheese={cheese} />
                                </Col>
                            ))}
                    </Row>
                </div>
            ))}
        </div>
    );
};

export default CheeseCategoryDisplay;
