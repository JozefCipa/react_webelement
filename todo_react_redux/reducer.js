const reducer = (state = [], action) => {

	switch(action.type){

		case 'ADD_TODO': 
			return [
				...state,
				{
					id: Math.random(),
					status: '',
					text: action.text
				}
			]	;
			break;

		case 'REMOVE_TODO':
			return state.filter( item => item.id !== action.id)
			break;

		case 'CHECK_DONE':

			return state.map( item => {
				if(item.id === action.id){
					item.status = 'done';
				}
				
				return item;
			});
			break;

		default:
			return state;
	}

}

export default reducer;