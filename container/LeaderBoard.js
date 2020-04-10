import React from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

const LeaderBoard = (props) => {
	return(
		<ul className="leader-board">
		{props.leaders.map(l => (
			<li key={l.id} 
				style={{
					padding:5+"px",
					border:"1px solid #dedede", 
					marginBottom: 10+"px"
				}}>

			  <p>user name: {l.name}</p>
			  <p>user score: {l.score}</p>
			</li>

			))}
		</ul>
	)
}

function mapStateToProps({users}){

	// return a list of user and his score
	const usersScore = Object.values(users).map(user => {
		const createdQuestions = user.questions.length;
		const answeredQuestions = Object.keys(user.answers).length;
		const score = createdQuestions + answeredQuestions;

		return {
			avatarUrl: user.avatarUrl,
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