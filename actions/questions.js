import { addAnswerToUser, addQuestionToUser } from './users'
import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

function addAnswerToQuestion({ authedUser, qid, answer }){
	return {
		type:ADD_ANSWER_TO_QUESTION,
		authedUser,
		qid,
		answer
	}
}

export function handleSaveQuestionAnswer(authedUser, qid, answer){
	console.log('dispaching question answer')
	return (dispatch) => {
		dispatch(addAnswerToUser(authedUser, qid, answer))
		dispatch(addAnswerToQuestion(authedUser, qid, answer))

		return saveQuestionAnswer(authedUser, qid, answer)
				.catch((e) => alert('Error has accured when try to save question answer!', e))
	}
}

function addQuestion(question){
	return {
		type: ADD_QUESTION,
		question
	}
}

export function handleSaveQuestion({ optionOneText, optionTwoText }){
	return (dispatch, getState) => {
		const {authedUser} = getState();

	     return saveQuestion({ 
	     		optionOneText, 
	     		optionTwoText, 
	     		author: authedUser 
	     	})
		   .then(question => {
		   	  dispatch(addQuestion(question));
		   	  dispatch(addQuestionToUser({
		   	  	authedUser,
		   	  	qid: question.id
		   	  }))
		   })
	}
}
	