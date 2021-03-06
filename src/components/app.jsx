import React from 'react';
import CityList from '../containers/CityList';
import ActiveCity from '../containers/ActiveCity';

const App = () => {
  return (
    <div className="row">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
