import React from 'react'

const DashboardController = (props) => {
	const {onChangeCatg} = props;
	

	return(
		<div className="dashboard-controller ">
			  	  <button 
			  	  	className="main-color active controller-tab"
			  	  	onClick={(e) => onChangeCatg('unanswred')}
			  	  	>Unanswered Questions</button>	
	  				<button 
	  					className="main-color controller-tab"
	  					onClick={(e) =>  onChangeCatg('answred')}
  					>Answered Questions</button>
  					<div className="clearfix"></div>
		</div>
		)
}
export default DashboardController;