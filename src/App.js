import React from 'react';
import FilterBar from './components/FilterBar';
import ChartContainer from './components/ChartContainer';
import TableContainer from './components/TableContainer';
import { UserDataProvider } from './userDataContext';
import "antd/dist/antd.css";
import './App.css';

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
