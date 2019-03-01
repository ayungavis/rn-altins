const initialState = {
	jobs: [],
	job: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default jobs = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_JOBS_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_JOBS_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_JOBS_FULFILLED':
			return {
				...state,
				isLoading: false,
				jobs: action.payload.data
			}

		case 'CREATE_JOBS_PENDING':
			break;
		case 'CREATE_JOBS_REJECTED':
			break;
		case 'CREATE_JOBS_FULFILLED':
			break;

		case 'UPDATE_JOBS_PENDING':
			break;
		case 'UPDATE_JOBS_REJECTED':
			break;
		case 'UPDATE_JOBS_FULFILLED':
			break;

		case 'DELETE_JOBS_PENDING':
			break;
		case 'DELETE_JOBS_REJECTED':
			break;
		case 'DELETE_JOBS_FULFILLED':
			break;

		default: 
			return state;
	}
}