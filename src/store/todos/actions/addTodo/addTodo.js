import { ADD_TODO } from '../../type';

export default (text) => ({
  type: ADD_TODO,
  text,
});
