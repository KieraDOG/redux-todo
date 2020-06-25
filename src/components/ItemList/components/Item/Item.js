import React from 'react';
import styled, { css } from 'styled-components';


const Label = styled.div`
  ${({ completed }) => completed && css`
    color: rgba(0, 0, 0, 0.1);
    text-decoration: line-through;
  `}
`;

const Icon = styled.div`
  margin-right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.1);

  ${({ completed }) => completed && css`
    border: 2px solid #38d7b2;
    color: #38d7b2;
  `}
`;

const Button = styled.button`
  text-align: left;
  cursor: pointer;
  outline: 0;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 1.25rem;
  background: transparent;
  margin-bottom: 12px;

  &:hover {
    ${Icon} {
      border: 2px solid #38d7b2;
    }
  }
`;

const Item = ({
  text,
  completed,
  onClick,
}) => (
  <Button onClick={onClick}> 
    <Icon completed={completed}>{completed && <>&#10003;</>}</Icon>
    <Label completed={completed}>{text}</Label>
  </Button>
);

export default Item;
