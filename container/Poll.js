import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Poll = (props) => {
	const {author, question} = props
	return(
		<li className="user-card main-border" >
		   <h5 className="card-header main-color">{author.name} asks:</h5>
		   <div className="card-body">
			  <div className="card-avatar">
			  	<img src={author.avatarURL} alt="user avatar" className="avatar"/>
			  </div>

			  <div className="card-info">
			  	<p className="main-color">Would you rather</p>
			  	<p>...{question.optionOne.text.substr(0,17)}..</p>
			  	<Link to={`/questions/${question.id}`} className="view-poll">View Poll</Link>
			  </div>	
			  <div className="clearfix"></div>
			</div>
		</li>
		)
}

function mapStateToProps({questions, users}, {questionId}){
	const question = questions[questionId];
	const author = users[question.author];
	return{
		author,
		question
	}
}
export default connect(mapStateToProps)(Poll)