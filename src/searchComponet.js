import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function SearchCom({ userInput, setUserInput }) {
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSearch = () => {
        // Handle search logic here, if needed
        console.log('Searching for:', userInput);
    };

    const handleReset = () => {
        setUserInput('');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <div className="card p-3 py-4">
                        <SearchItem
                            userInput={userInput}
                            handleInputChange={handleInputChange}
                            handleSearch={handleSearch}
                            handleReset={handleReset}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SearchItem({ userInput, handleInputChange, handleSearch, handleReset }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="searchInput">
                <Form.Control
                    type="text"
                    placeholder="Search by apartment name..."
                    value={userInput}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>Search</Button>{' '}
            <Button variant="danger" onClick={handleReset}>To Clear</Button>
        </Form>
    );
}