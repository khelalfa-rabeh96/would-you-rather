import React from 'react';
import {connect}  from 'react-redux';
import PropTypes from 'prop-types'
import PollResults from '../component/PollResults'
import PollQuestion from './PollQuestion'

const PollDetail = (props) => { 
	const {questionId, pollStatus, author} = props

	// Return the appropriate component 
	// If the authed User has answered that poll
	// Than return the resultes  of that poll
	// Else return the form to submit his answer
	return(
		<div className="dashboard-detail">
			{ pollStatus === 'answred' ?
			  <PollResults questionId={questionId} author={author}/>
			  :
			  <PollQuestion questionId={questionId} author={author}/>
			  
			}
		</div>
		)
}

function mapStateToProps({authedUser, users,questions}, {questionId}){
	const aUser = users[authedUser];
	const question = questions[questionId];
	const author = users[question.author];

	// check if the authed user has answered that question 
	// And return the appropriate response 
	const pollStatus = Object.keys(aUser.answers).includes(questionId) ? 'answred' : 'unanswred';
	
	return {
		pollStatus,
		author,
		questionId
	}

}

PollDetail.propTypes = {
	questionId: PropTypes.string.isRequired,
	pollStatus: PropTypes.string.isRequired,
	author: PropTypes.object.isRequired,
}
export default connect(mapStateToProps)(PollDetail)