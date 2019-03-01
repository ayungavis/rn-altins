const initialState = {
	contacts: [],
	contact: {},
	isLoading: false,
	isError: false,
	isSuccess: false
}

export default contacts = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONTACTS_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_CONTACTS_REJECTED':
			return {
				...state,
				isLoading: false
			}
		case 'GET_CONTACTS_FULFILLED':
			return {
				...state,
				isLoading: false,
				contacts: action.payload.data
			}

		case 'CREATE_CONTACTS_PENDING':
			break;
		case 'CREATE_CONTACTS_REJECTED':
			break;
		case 'CREATE_CONTACTS_FULFILLED':
			break;

		case 'UPDATE_CONTACTS_PENDING':
			break;
		case 'UPDATE_CONTACTS_REJECTED':
			break;
		case 'UPDATE_CONTACTS_FULFILLED':
			break;

		case 'DELETE_CONTACTS_PENDING':
			break;
		case 'DELETE_CONTACTS_REJECTED':
			break;
		case 'DELETE_CONTACTS_FULFILLED':
			break;

		default: 
			return state;
	}
}