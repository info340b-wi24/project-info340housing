import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HouseLists from './HouseList';
import { InfoDescr } from './HousingInfo';
import { Header, Footer } from './headerfooter';
import MapPage from './MapPage';
import SavedPage from './SavedPage';

export default function App(props) {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index element={<HouseLists />} />
          <Route path="/HousingInfo/:id" element={<InfoDescr />} />
          <Route path="/map" element={<MapPage questions={props.questions} apartments={props.apartments} />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
