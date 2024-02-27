import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HouseLists from './HouseList'; // Adjust the import according to your file structure
import { InfoDescr } from './HousingInfo'; // Make sure the import matches the export

export default function App() {
    return (
        <div>
            {/* NavBar component can be added here if you have one */}
            <Routes>
                <Route path="/HouseList" element={<HouseLists />} />
                <Route index element={<HouseLists />} />
                <Route path="/HousingInfo/:id" element={<InfoDescr />} />
            </Routes>
            <footer>
                <p>&copy; 2024 DubsHousing, Inc.</p>
            </footer>
        </div>
    );
}
