import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import toggleTodo from '../../store/todos/actions/toggleTodo';
import Item from './components/Item';

const Container = styled.div`
`;

const ItemList = ({
  todos,
  onTodoClick,
}) => (
  <Container> 
    {todos.map((item, index) => (
      <Item key={index} {...item} onClick={() => onTodoClick(index)} />
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (index) => dispatch(toggleTodo(index)),
});

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemListContainer;
