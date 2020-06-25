import { ADD_TODO, TOGGLE_TODO } from './type';

const initialState = [{
  text: 'exercitationem eaque sapiente',
  completed: false,
}, {
  text: 'perferendis rerum quibusdam',
  completed: false,
}, {
  text: 'repellendus esse quas',
  completed: true,
}, {
  text: 'sed dolorem numquam',
  completed: true,
}];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false,
      }];

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {
            text: todo.text,
            completed: !todo.completed,
          }
        }

        return todo;
      });

    default:
      return state;
  }
}