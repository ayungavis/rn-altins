import { combineReducers } from 'redux';

import auth from './auth';
import academics from './academics';
import categories from './categories';
import cities from './cities';
import contacts from './contacts';
import events from './events';
import jobs from './jobs';
import news from './news';
import profiles from './profiles';
import provinces from './provinces';
import religions from './religions';
import users from './users';

const appReducer = combineReducers({
	auth,
	academics,
	categories,
	cities,
	contacts,
	events,
	jobs,
	news,
	profiles,
	provinces,
	religions,
	users
})

export default appReducer