import React from 'react';
import {connect}  from 'react-redux';
import PropTypes from 'prop-types'
import PollResults from '../component/PollResults'
import PollQuestion from './PollQuestion'

const PollDetail = (props) => { 

	// If the question id in the path
	// Doesn't exist diplay error message
	if(props.trueId === false){
		return (
			<div class="alert alert-primary" role="alert">
			 404 Error Question Not Found!
			</div>
		)
	// Else 
	// Return the appropriate component 
	// If the authed User has answered that poll
	// Than return the resultes  of that poll
	// Else return the form to submit his answer
	}else{

		const {questionId, pollStatus, author} = props
		return(
			<div className="poll-detail">
				{ pollStatus === 'answred' ?
				  <PollResults questionId={questionId} author={author}/>
				  :
				  <PollQuestion questionId={questionId} author={author}/>
				  
				}
			</div>
		)
	}


	
}

function mapStateToProps({authedUser, users,questions}, props){
	const { questionId } = props.match.params;
	const trueId = Object.keys(questions).includes(questionId);

	// Check if exist a  question with 
	//the question id that provided in the path
	if(trueId){
		const aUser = users[authedUser];
		const question = questions[questionId];
		const author = users[question.author];

		// check if the authed user has answered that question 
		// And return the appropriate response 
		const pollStatus = Object.keys(aUser.answers).includes(questionId) ? 'answred' : 'unanswred';
		
		return {
			pollStatus,
			author,
			questionId,
			trueId
		}
	}else{
		return{
			trueId
		}
	}
	

}

PollDetail.propTypes = {
	questionId: PropTypes.string.isRequired,
	pollStatus: PropTypes.string.isRequired,
	author: PropTypes.object.isRequired,
	trueId: PropTypes.bool.isRequired
}
export default connect(mapStateToProps)(PollDetail)