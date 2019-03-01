const initialState = {
	cities: [],
	city: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default cities = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CITIES_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_CITIES_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_CITIES_FULFILLED':
			return {
				...state,
				isLoading: false,
				cities: action.payload.data
			}

		case 'CREATE_CITIES_PENDING':
			break;
		case 'CREATE_CITIES_REJECTED':
			break;
		case 'CREATE_CITIES_FULFILLED':
			break;

		case 'UPDATE_CITIES_PENDING':
			break;
		case 'UPDATE_CITIES_REJECTED':
			break;
		case 'UPDATE_CITIES_FULFILLED':
			break;

		case 'DELETE_CITIES_PENDING':
			break;
		case 'DELETE_CITIES_REJECTED':
			break;
		case 'DELETE_CITIES_FULFILLED':
			break;

		default: 
			return state;
	}
}