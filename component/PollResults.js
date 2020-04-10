import React from 'react'
import PropTypes from 'prop-types'
import OptionResults from '../container/OptionResults';

const PollResutls = (props) => {
	const { author , questionId} = props
	return(
	      <div className="poll-results">
	      	 <div className="user-card main-border">
				<h5 className="card-header main-color">{author.name} asks:</h5>

				<div className="card-body">
				  <div className="card-avatar">
				  	<img src={author.avatarURL} 
				  		 alt="user avatar" 	
				  		 className="big-avatar"/>
				  </div>

				  <div className="card-info">
				  	<h3 className="main-color">Results</h3>
				  	 <OptionResults option={"optionOne"} questionId={questionId} />
				  	 <OptionResults option={"optionTwo"} questionId={questionId} />	
				  </div>	
				  <div className="clearfix"></div>
				</div>
			  </div>
	      </div>
		)
}


PollResutls.propTypes = {
	author: PropTypes.object.isRequired,
	questionId: PropTypes.string.isRequired,
}

export default PollResutls