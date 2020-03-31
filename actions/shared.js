import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'rabah_khelalfa'

export function handleInitialData() {
	return (dispatch) => {
		return getInitialData()
			.then(({users, questions}) => {
				dispatch(receiveUsers(users));
				dispatch(receiveQuestions(questions));
				dispatch(setAuthedUser(AUTHED_ID))
			})
	}
}