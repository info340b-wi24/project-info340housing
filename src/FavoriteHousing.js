import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FavoriteHousing() {
    const [savedData, setSavedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const database = getDatabase();
        const notesRef = ref(database, 'notes');

        const fetchData = () => {
            onValue(notesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                    setSavedData(dataArray);
                    setLoading(false);
                } else {
                    setSavedData([]);
                    setLoading(false);
                }
            }, (error) => {
                setError(error.message);
                setLoading(false);
            });
        };

        fetchData();

        return () => {
        };
        
    }, []);

    let savedDataCards = savedData.map((item, index) => (
        <Col key={index}>
            <Card className='mx-2 my-2 h-100'>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.notes}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ));

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="saved_row">
            <h2 className="saved_favorite">Favorites ❤️</h2>
            <div className="saved_housing_container">
                <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
                    {savedDataCards}
                </Row>
            </div>
        </section>
    );
}

export default FavoriteHousing;
