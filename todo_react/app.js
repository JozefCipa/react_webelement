import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{

	constructor(props) {
	  super(props);
	  this.state = {
	  	todos: []
	  };
	  this.input = null;
	}
	addItem(text){
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: Math.random(),
					status: '',
					text: text
				}
			]
		});
	}
	removeItem(id){
		this.setState({
			todos: this.state.todos.filter( item => item.id !== id)
		});
	}
	checkDone(id){
		this.setState({
			todos: this.state.todos.map( item => {
						if(item.id === id)
							item.status = 'done';
						
						return item;
					})
		});
	}
	render(){
		return (
			<div>
				<input type="text" ref={(input) => this.input = input}/>
				<button id="add-item" onClick={() => {
					this.addItem.bind(this, this.input.value)
					this.input.value = '';
				}}>Add</button>

				<ul id="todos-list">
					{
						this.state.todos.map( (todoItem, i) => {
							return (
								<li key={i} className={todoItem.status}>
									<span className="text" onClick={() => this.checkDone.bind(this, todoItem.id)}>{todoItem.text}</span>
									<a href="#" className="delete" onClick={() => this.removeItem.bind(this, todoItem.id)}>[X]</a>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<TodoList/>, document.getElementById('todos-list'));