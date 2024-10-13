import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Label, FormGroup, Form, FormText } from 'reactstrap';

const CalculatorModal = ({ isOpen, toggle, pricePerKg }) => {
    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState('grams');
    const [totalCost, setTotalCost] = useState(0);

    // Calculate the total cost based on the quantity and unit
    const handleCalculate = () => {
        let cost = 0;
        if (unit === 'grams') {
            cost = (quantity / 1000) * pricePerKg;
        } else if (unit === 'kg') {
            cost = quantity * pricePerKg;
        }
        setTotalCost(cost.toFixed(2));
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} className="calculator-modal">
            <ModalHeader toggle={toggle} className="bg-secondary text-white">
                Calculate Cost
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="quantityInput">Enter quantity:</Label>
                        <Input
                            type="number"
                            id="quantityInput"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder={`Enter quantity in ${unit}`}
                        />
                        <FormText color="muted">
                            Enter the amount of cheese you want to buy.
                        </FormText>
                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <legend>Choose Unit</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="unit"
                                    value="grams"
                                    checked={unit === 'grams'}
                                    onChange={handleUnitChange}
                                />
                                Grams
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="unit"
                                    value="kg"
                                    checked={unit === 'kg'}
                                    onChange={handleUnitChange}
                                />
                                Kilograms
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    <p className="mt-3 text-center">
                        <strong>Total Cost: </strong>${totalCost}
                    </p>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button outline  color="success" onClick={handleCalculate}>
                    Calculate
                </Button>
                <Button outline color="danger" onClick={toggle}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CalculatorModal;
