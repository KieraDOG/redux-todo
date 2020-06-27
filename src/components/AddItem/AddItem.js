import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import addTodo from '../../store/todos/actions/addTodo';

const Container = styled.div`
  margin-top: 36px;
`;

const Toggle = styled.button`
  display: block;
  outline: 0;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #55aef1;
  color: #55aef1;

  &:hover {
    background-color: #55aef1;
    color: white;
  }
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-appearance: none;
  outline: 0;
  background: white;
  width: 100%;
  border-radius: 4px;
  height: 60px;
  padding: 0 24px;
  font-size: 1.25rem;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
`;

const Submit = styled.button`
  margin-left: 16px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 0;
  padding: 0 16px;
  background: #55aef1;
  cursor: pointer;
  color: white;
  transition: box-shadow 0.3s;
  font-size: 1.25rem;

  &:disabled {
    background: rgba(0, 0, 0, 0.3);
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
`;

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: true,
      value: '',
    };

    this.toggleShowInput = this.toggleShowInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  toggleShowInput() {
    this.setState((s) => ({
      showInput: !s.showInput,
    }));
  }

  handleInputChange(event) {
    const { target: { value } } = event;

    this.setState({
      value,
    });
  }

  handleFormSubmit(event) {
    const { onSubmit } = this.props;
    const { value } = this.state;

    event.preventDefault();

    onSubmit(value);

    this.setState({
      value: '',
      showInput: false,
    });
  }

  render() {
    const { showInput, value } = this.state;

    return (
      <Container>
        {showInput ? (
          <Form onSubmit={this.handleFormSubmit}>
            <Input value={value} onChange={this.handleInputChange} />
            <Submit disabled={!value} type="submit">Add</Submit>
          </Form>
        ): (
          <Toggle onClick={this.toggleShowInput}>+</Toggle>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(addTodo(text)),
})

const AddItemContainer = connect(null, mapDispatchToProps)(AddItem);

export default AddItemContainer;
