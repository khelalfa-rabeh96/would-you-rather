import React from 'react'

const DashboardController = (props) => {
	const {onChangeCatg} = props;
	

	return(
		<div className="dashboard-controller ">
			  	  <button 
			  	  	href="#" 
			  	  	className="main-color active controller-tab"
			  	  	onClick={(e) => onChangeCatg('unanswred')}
			  	  	>Unanswered Questions</button>	
	  				<button 
	  					href="#" 
	  					className="main-color controller-tab"
	  					onClick={(e) =>  onChangeCatg('answred')}
  					>Answered Questions</button>
		</div>
		)
}
export default DashboardController;