const initialState = {
	categories: [],
	category: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default categories = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CATEGORIES_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_CATEGORIES_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_CATEGORIES_FULFILLED':
			return {
				...state,
				isLoading: false,
				categories: action.payload.data
			}

		case 'CREATE_CATEGORIES_PENDING':
			break;
		case 'CREATE_CATEGORIES_REJECTED':
			break;
		case 'CREATE_CATEGORIES_FULFILLED':
			break;

		case 'UPDATE_CATEGORIES_PENDING':
			break;
		case 'UPDATE_CATEGORIES_REJECTED':
			break;
		case 'UPDATE_CATEGORIES_FULFILLED':
			break;

		case 'DELETE_CATEGORIES_PENDING':
			break;
		case 'DELETE_CATEGORIES_REJECTED':
			break;
		case 'DELETE_CATEGORIES_FULFILLED':
			break;

		default: 
			return state;
	}
}