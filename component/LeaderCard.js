import React from 'react';
import { PropTypes } from 'prop-types'
const LeaderCard = (props) => {
	const { leader, order } = props;
	let svgClassName;

	// Defin the award color (gold,.. etc)
	switch(order){
		case 1:
			svgClassName = 'bi bi-award first';
			break;
		case 2:
			svgClassName = 'bi bi-award second';
			break;
		default:
			svgClassName = 'bi bi-award';
			break;
	}	

	return (
		<li className="user-card main-border" >
      			<div className="card-body">
      				<div className="card-avatar">
				  		<img src={leader.avatarURL} alt="user avatar" 	className="avatar"/>
				    </div>
				    <div className="score-info">
			  			<p className="h6 leader-name">{leader.name}</p>
			  			<div>
			  				<span>Answered Questions</span>
			  				<span className="aq-score">{leader.answeredQuestions}</span>
			  				<div className="clearfix"></div>
			  			</div>
			  			<hr/>
			  			<div>
			  				<span>Created Questions</span>
			  				<span className="cq-score">{leader.createdQuestions}</span>
			  				<div className="clearfix"></div>
			  			</div>
			  		</div>
			  		<div className="total-score main-border">
			  			<h6 className="text-center">Score</h6>
			  			<div className="text-center"><span className="total-score-count">{leader.score}</span></div>
			  		</div>
      			</div>
      			<div className="triangle"></div>
      			<div className="award">
  					<svg className={svgClassName} width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						  <path fillRule="evenodd" d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z" clipRule="evenodd"/>
						  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
					</svg>
      			</div>
  		</li>
	)
}

LeaderCard.propTypes = {
	leader: PropTypes.object.isRequired
}

export default LeaderCard;