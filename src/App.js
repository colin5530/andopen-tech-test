import React from 'react';
import FilterBar from './components/FilterBar';
import ChartContainer from './components/ChartContainer';
import TableContainer from './components/TableContainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <FilterBar />
      <ChartContainer />
      <TableContainer />
    </div>
  );
}

export default App;
