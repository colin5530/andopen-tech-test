import React from 'react';
import FilterBar from './components/FilterBar';
import ChartContainer from './components/ChartContainer';
import TableContainer from './components/TableContainer';
import './App.css';
import { UserDataProvider } from './userDataContext';

const App = () => {
  return (
    <UserDataProvider>
      <div className="App">
        <FilterBar />
        <ChartContainer />
        <TableContainer />
      </div>
    </UserDataProvider>
  );
}

export default App;
