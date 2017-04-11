import React from 'react';

export default (props) => {

	return (

		<li className={props.item.status}>
			<span className="text" onClick={() => props.checkDone(props.item.id)}>{props.item.text}</span>
			<a href="#" className="delete" onClick={() => props.removeTodo(props.item.id)}>[X]</a>
		</li>

	);
}