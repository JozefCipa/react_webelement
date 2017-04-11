import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../Actions';

class Search extends React.Component{

	render(){

		return (
			<div>
				<input type="text" ref={(input) => this.input = input}/>
					<button id="add-item" onClick={() => {
						this.props.addTodo(this.input.value);
						this.input.value = '';
					}}>Add</button>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(null, mapDispatchToProps)(Search);