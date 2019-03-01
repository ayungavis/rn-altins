const initialState = {
	provinces: [],
	province: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default provinces = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PROVINCES_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_PROVINCES_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_PROVINCES_FULFILLED':
			return {
				...state,
				isLoading: false,
				provinces: action.payload.data
			}

		case 'CREATE_PROVINCES_PENDING':
			break;
		case 'CREATE_PROVINCES_REJECTED':
			break;
		case 'CREATE_PROVINCES_FULFILLED':
			break;

		case 'UPDATE_PROVINCES_PENDING':
			break;
		case 'UPDATE_PROVINCES_REJECTED':
			break;
		case 'UPDATE_PROVINCES_FULFILLED':
			break;

		case 'DELETE_PROVINCES_PENDING':
			break;
		case 'DELETE_PROVINCES_REJECTED':
			break;
		case 'DELETE_PROVINCES_FULFILLED':
			break;

		default: 
			return state;
	}
}