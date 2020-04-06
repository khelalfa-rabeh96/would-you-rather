import React, {useState} from 'react';
import {connect}  from 'react-redux';
import PropTypes from 'prop-types'


const PollQuestion = (props) => {
	
	const {author, question} = props
	const optionOne = question.optionOne.text;
	const optionTwo = question.optionTwo.text;

	const [selectedOption, setSelectedOption] = useState(optionOne);

	const handleChange = (e) => {
		console.log(e.target.value)
		setSelectedOption(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		// Todo: handle the submit
		// Add save question answer
		// display the poll results
	}

	return(
		<div className="poll-question">
		   	<div className="user-card main-border">
			  
				<h5 className="card-header main-color">{author.name} asks:</h5>

				<div className="card-body">
				  <div className="card-avatar">
				  	<img src={author.avatarURL} alt="user avatar" className="big-avatar" />
				  </div>

				  <div className="card-info">
				  	<p className="main-color">Would you rather</p>
				  	  <form action="#" className="form" onSubmit={handleSubmit}>
				  	  	<div>
				  	  	  <input type="radio" 
			  	  	  			 id="opt-one" 
			  	  	  			 value={optionOne} 
			  	  	  			 checked={selectedOption === optionOne}
			  	  	  			 onChange={handleChange}/>
				  	  	  <label htmlFor="opt-one">{optionOne}</label>			
				  	  	</div>

				  	  	<div>
				  	  	  <input type="radio" 
				  	  	  		id="opt-two" 
				  	  	  		value={optionTwo} 
				  	  	  		checked={selectedOption === optionTwo}
			  	  	  			onChange={handleChange}/>
				  	  	  <label htmlFor="opt-two">{optionTwo}</label>			
				  	  	</div>
						<input type="submit" value="Submit" className="poll-submit" />
				  	  </form>
				  	
				  </div>	
				  <div className="clearfix"></div>
				</div>
		    </div>				
		</div>
		)
}

PollQuestion.propTypes = {
	questionId: PropTypes.string.isRequired,
	author: PropTypes.object.isRequired,
}

function mapStateToProps({users, authedUser, questions},{questionId}){
	const question = questions[questionId]

	return {
		question
	}
}

export default connect(mapStateToProps)(PollQuestion);