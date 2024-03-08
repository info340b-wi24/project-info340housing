import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function SearchCom({ userInput, setUserInput }) {
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', userInput);
    };

    const handleReset = () => {
        setUserInput('');
    };

    return (
        <div className="search-bar">
            <SearchItem
                userInput={userInput}
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
                handleReset={handleReset}
            />
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
            <Button variant="danger" onClick={handleReset}>Clear</Button>
        </Form>
    );
}