const initialState = {
	events: [],
	event: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default events = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_EVENTS_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_EVENTS_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_EVENTS_FULFILLED':
			return {
				...state,
				isLoading: false,
				events: action.payload.data
			}

		case 'CREATE_EVENTS_PENDING':
			break;
		case 'CREATE_EVENTS_REJECTED':
			break;
		case 'CREATE_EVENTS_FULFILLED':
			break;

		case 'UPDATE_EVENTS_PENDING':
			break;
		case 'UPDATE_EVENTS_REJECTED':
			break;
		case 'UPDATE_EVENTS_FULFILLED':
			break;

		case 'DELETE_EVENTS_PENDING':
			break;
		case 'DELETE_EVENTS_REJECTED':
			break;
		case 'DELETE_EVENTS_FULFILLED':
			break;

		default: 
			return state;
	}
}