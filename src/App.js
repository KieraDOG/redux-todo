import React from 'react';
import styled from 'styled-components';
import ItemList from './components/ItemList';
import DateTimeHeader from './components/DateTimeHeader';
import FilterHeader from './components/FilterHeader';
import AddItem from './components/AddItem';

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto;
  background: white;
  border-radius: 24px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  padding: 36px;
`;

function App() {
  return (
    <Container>
      <DateTimeHeader />
      <FilterHeader />
      <ItemList />
      <AddItem />
    </Container>
  );
}

export default App;
