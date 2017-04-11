import React from 'react';
import { connect } from 'react-redux';
import {
	removeTodo,
	checkDone
} from '../Actions';

import TodoItem from '../components/TodoItem';

class TodoList extends React.Component{

	render(){

		return (
			<ul>
				{
					this.props.todos.map( todo => <TodoItem key={todo.id} item={todo} {...this.props} />)
				}
			</ul>
		)
	}
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: (id) => dispatch(removeTodo(id)),
    checkDone: (id) => dispatch(checkDone(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);