import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

// Make the authed user constant at first
// Before we create the login and choose a user
//const AUTHED_ID = 'rabah_khelalfa'

export function handleInitialData() {
	return (dispatch) => {
		return getInitialData()
			.then(({users, questions}) => {
				dispatch(receiveUsers(users));
				dispatch(receiveQuestions(questions));
			})
	}
}