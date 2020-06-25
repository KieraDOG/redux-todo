import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Label = styled.div`
  color: rgba(0, 0, 0, 0.5);
`;

const Item = styled.button`
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  flex: 1;

  &:hover {
    ${Label} {
      color: #55aef1;
    }
  }
`;

const Created = styled(Item)`
`;

const Completed = styled(Item)`
  text-align: right;
`;

const Count = styled.div`
  font-size: 1.25rem;
`;

const Highlight = styled.div`
  width: 50px;
  height: 4px;
  margin-top: 8px;
  border-radius: 0.5px;
  background: #55aef1;
`;

const FilterHeader = () => (
  <Layout>
    <Created>
      <Count>06</Count>
      <Label>Created tasks</Label>
      <Highlight />
    </Created>
    <Completed>
      <Count>03</Count>
      <Label>Completed tasks</Label>
    </Completed>
  </Layout>
);

export default FilterHeader;
