import { RECEIVE_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from '../actions/users'

export default function users(state = {}, action){
	const { authedUser, qid } = action;
	switch(action.type){
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			}
		case ADD_ANSWER_TO_USER:
			const { answer} = action;
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			}
		case ADD_QUESTION_TO_USER :

			return {
				...state,
				[authedUser]:{
					...state[authedUser],
					questions: state[authedUser].questions.concat(qid)

				}	
			}
		default:
			return state
	}
}