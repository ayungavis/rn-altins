const initialState = {
	religions: [],
	religion: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default religions = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_RELIGIONS_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_RELIGIONS_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_RELIGIONS_FULFILLED':
			return {
				...state,
				isLoading: false,
				religions: action.payload.data
			}

		case 'CREATE_RELIGIONS_PENDING':
			break;
		case 'CREATE_RELIGIONS_REJECTED':
			break;
		case 'CREATE_RELIGIONS_FULFILLED':
			break;

		case 'UPDATE_RELIGIONS_PENDING':
			break;
		case 'UPDATE_RELIGIONS_REJECTED':
			break;
		case 'UPDATE_RELIGIONS_FULFILLED':
			break;

		case 'DELETE_RELIGIONS_PENDING':
			break;
		case 'DELETE_RELIGIONS_REJECTED':
			break;
		case 'DELETE_RELIGIONS_FULFILLED':
			break;

		default: 
			return state;
	}
}