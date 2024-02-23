import { InfoDescr } from './HousingInfo.js';
import { HouseLists } from './HouseList.js';
import { Routes, Route, Navigate } from 'react-router-dom';

  export default function App(props) {
      return (
          <div>
            <NavBar/>
            <Routes>
              <Route path="home" element={<HouseLists />} />
              <Route index element={<HouseLists />} />
              <Route path=":whichJob" element={<InfoDescr />} />
            </Routes>
            <Footer /> 
          </div>
      );
  }