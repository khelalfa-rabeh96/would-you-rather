import React from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import LeaderCard from '../component/LeaderCard'

const LeaderBoard = (props) => {
	return(
		<div className="leader-board">
			<ul className="leader-board">
				{props.leaders.map((l, index) => (
					<LeaderCard leader={l} order={index+1} key={l.id}/>
				))}
			</ul>
		</div>
	)
}

function mapStateToProps({users}){

	// return a list of user and his score
	const usersScore = Object.values(users).map((user) => {
		const createdQuestions = user.questions.length;
		const answeredQuestions = Object.keys(user.answers).length;
		const score = createdQuestions + answeredQuestions;

		// each user has the neccessar info 
		// that need to be displayed in the leader card
		return {
			id: user.id,
			avatarURL: user.avatarURL,
			name:user.name,
			createdQuestions,
			answeredQuestions,
			score
		}

	});

	// return the first 3 users , sorted by score 
	const leaders = usersScore.sort((a, b) => (b.score - a.score)).slice(0, 3);
	return {
		leaders,
	}
}

LeaderBoard.propTypes = {
	leaders: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(LeaderBoard)