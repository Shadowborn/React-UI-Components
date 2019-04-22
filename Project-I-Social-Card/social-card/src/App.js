import React from 'react';


import HeaderContainer from './components/HeaderComponents/HeaderContainer'

import './App.css';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className ="App">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
