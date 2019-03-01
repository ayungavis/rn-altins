const initialState = {
	academics: [],
	academic: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default academics = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ACADEMICS_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_ACADEMICS_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_ACADEMICS_FULFILLED':
			return {
				...state,
				isLoading: false,
				academics: action.payload.data
			}

		case 'CREATE_ACADEMICS_PENDING':
			break;
		case 'CREATE_ACADEMICS_REJECTED':
			break;
		case 'CREATE_ACADEMICS_FULFILLED':
			break;

		case 'UPDATE_ACADEMICS_PENDING':
			break;
		case 'UPDATE_ACADEMICS_REJECTED':
			break;
		case 'UPDATE_ACADEMICS_FULFILLED':
			break;

		case 'DELETE_ACADEMICS_PENDING':
			break;
		case 'DELETE_ACADEMICS_REJECTED':
			break;
		case 'DELETE_ACADEMICS_FULFILLED':
			break;

		default: 
			return state;
	}
}