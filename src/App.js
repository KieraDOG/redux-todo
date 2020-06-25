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
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin: 24px;
  padding: 24px;
  border-radius: 4px;

  @media screen and (min-width: 1024px) {
    margin: 100px auto;
    padding: 36px;
    border-radius: 24px;
  }
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
