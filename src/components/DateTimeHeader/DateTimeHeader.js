import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  margin-bottom: 36px;
  font-size: 1.5rem;
`;

const Day = styled.div`
  font-weight: 600;
`;

const Date = styled.div`
  margin-left: 12px;
`;

const Item = ({
  text,
  completed,
  onClick,
}) => (
  <Layout> 
    <Day>Monday,</Day> 
    <Date>3 Dec</Date>
  </Layout>
);

export default Item;
