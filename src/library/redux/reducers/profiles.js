const initialState = {
	profiles: [],
	profile: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default profiles = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PROFILES_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_PROFILES_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_PROFILES_FULFILLED':
			return {
				...state,
				isLoading: false,
				profiles: action.payload.data
			}

		case 'CREATE_PROFILES_PENDING':
			break;
		case 'CREATE_PROFILES_REJECTED':
			break;
		case 'CREATE_PROFILES_FULFILLED':
			break;

		case 'UPDATE_PROFILES_PENDING':
			break;
		case 'UPDATE_PROFILES_REJECTED':
			break;
		case 'UPDATE_PROFILES_FULFILLED':
			break;

		case 'DELETE_PROFILES_PENDING':
			break;
		case 'DELETE_PROFILES_REJECTED':
			break;
		case 'DELETE_PROFILES_FULFILLED':
			break;

		default: 
			return state;
	}
}