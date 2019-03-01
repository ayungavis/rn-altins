const initialState = {
	users: [],
	user: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default users = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_USERS_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_USERS_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_USERS_FULFILLED':
			return {
				...state,
				isLoading: false,
				users: action.payload.data
			}

		case 'CREATE_USERS_PENDING':
			break;
		case 'CREATE_USERS_REJECTED':
			break;
		case 'CREATE_USERS_FULFILLED':
			break;

		case 'UPDATE_USERS_PENDING':
			break;
		case 'UPDATE_USERS_REJECTED':
			break;
		case 'UPDATE_USERS_FULFILLED':
			break;

		case 'DELETE_USERS_PENDING':
			break;
		case 'DELETE_USERS_REJECTED':
			break;
		case 'DELETE_USERS_FULFILLED':
			break;

		default: 
			return state;
	}
}