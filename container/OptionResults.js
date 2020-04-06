import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const OptionResults = (props) => {
	const {question, authedUser, option} = props;
	
	// Count the votes for the question 
	//(option1 + option2) votes
	const allVotes = question.optionOne.votes.length + question.optionTwo.votes.length
	// Number who votes on the current option
	const optionVotes = question[option].votes.length;
	const persentage = (optionVotes * 100) / allVotes 
	
	// Check if this option's votes include authed user
	const authedUserIncluded = question[option].votes.includes(authedUser) 

	console.log("authedUserIncluded: "+ authedUserIncluded)

	return(
		<div className={`option ${authedUserIncluded ? 'my-vote' : ''}`}>
	  		<p>Would you rather {question[option].text}?</p>
	  		<div className="progress" style={{height:23+'px'}}>
			  <div className="progress-bar" role="progressbar" 
			  		style={{width: persentage +'%'}} 
			  		aria-valuenow={persentage}
			  		aria-valuemin="0" 
			  		aria-valuemax="100">{persentage} %</div>
			</div>
			<span>{optionVotes} from {allVotes} votes </span> 
	  	</div>
		)
}

function mapStateToProps({ questions, authedUser}, {questionId, option}){
	const question = questions[questionId]
	
	return {
		question,
		authedUser,
		option
	}
}

OptionResults.propTypes = {
	question: PropTypes.object.isRequired,
	authedUser: PropTypes.string.isRequired,
	option: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(OptionResults);