import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {handleSaveQuestion} from '../actions/questions'

const NewPoll = (props) => {
	const [optionOne, setOptionOne] = useState('')
	const [optionTwo, setOptionTwo] = useState('')
	const [toHome, setToHome] = useState(false)

	const handleSubmit = (e) => {
		const { authedUser, dispatch } = props;
		e.preventDefault();
		dispatch(handleSaveQuestion({
			optionOneText:optionOne,
			optionTwoText: optionTwo,
			authedUser,
		}))

		setToHome(true)
		
	}
	if(toHome === true){
			return <Redirect to="/"/>
	}
	return(
		 <div className="new-poll main-border">
		   <h1 className="h3">Create New Question</h1>
		   <div className="new-poll-container">
		   	  <p>Complete the question</p>
		   	  <p className="h5">Would you rather...</p>
		   	 
   	  		   <form onSubmit={handleSubmit}>
   	  		 	  
   	  		 	   <div className="form-group">
				       <input className="form-control"
	  	  		   		  type="text" 
	  	  		   		  placeholder="Enter option one text"
	  	  		   		  value={optionOne}
	  	  		   		  onChange={(e) => setOptionOne(e.target.value)}/>
				   </div>
				    <div className="seperator">OR</div>
				   <div className="form-group">
				       <input className="form-control"
	  	  		   		      type="text" 
	  	  		   		 	  placeholder="Enter option one text"
	  	  		   		 	  value={optionTwo}
	  	  		   		 	  onChange={(e) => setOptionTwo(e.target.value)}/>
				   </div>

				   <div className="form-group">
				       <input className="form-control"
				       		type="submit" 
			   	  			value="Submit"/>
				   </div>
		  	  		  
	  	  		   

  	  		   </form>
		   </div>
		 </div>
		)
}

function mapStateToProps({authedUser}){
	return {
		authedUser
	}
}

NewPoll.propTypes = {
	authedUser: PropTypes.string.isRequired
}
export default connect(mapStateToProps)(NewPoll);