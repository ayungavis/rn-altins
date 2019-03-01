const initialState = {
	news: [],
	new_item: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default news = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_NEWS_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_NEWS_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_NEWS_FULFILLED':
			return {
				...state,
				isLoading: false,
				news: action.payload.data
			}

		case 'CREATE_NEWS_PENDING':
			break;
		case 'CREATE_NEWS_REJECTED':
			break;
		case 'CREATE_NEWS_FULFILLED':
			break;

		case 'UPDATE_NEWS_PENDING':
			break;
		case 'UPDATE_NEWS_REJECTED':
			break;
		case 'UPDATE_NEWS_FULFILLED':
			break;

		case 'DELETE_NEWS_PENDING':
			break;
		case 'DELETE_NEWS_REJECTED':
			break;
		case 'DELETE_NEWS_FULFILLED':
			break;

		default: 
			return state;
	}
}