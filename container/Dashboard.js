import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import DashboardController from '../component/DashboardController'

const Dashboard = (props) => {
	const [currentCatg, setCurrentCatg] = useState('unanswred')
	const [currentList, setCurrentList] = useState([])
	const { answeredQstIds, unanswredQstIds } = props;

	const updateCurrentCatg = (catg) => {
		setCurrentCatg(catg)
	}

	const updateCurrentList = (catg) => {
		// The current list is depend on the question list catgegory
		const list = currentCatg === 'unanswred' ? unanswredQstIds : answeredQstIds;
		setCurrentList(list)
	}

	useEffect(() => {
		updateCurrentList(currentCatg)	
	})


	return(
		<div className="dashboard main-border">
			<DashboardController onChangeCatg={updateCurrentCatg} />
			<div className="dashboard-body">
			  <ul className="poll-list">
					{currentList.map(q => (<Poll questionId={q} key={q}/>))}
			  </ul>
			</div>

			
		</div>
		)
}

function mapStateToProps({users, questions, authedUser }){
	// exctract the question ids for both catgegories 
	// Answred questions and Unanswred questions
	const answeredQstIds =  Object.keys(users[authedUser].answers) 
	const unanswredQstIds =  Object.keys(questions).filter(q => !answeredQstIds.includes(q));
	
	return {
		
		answeredQstIds : answeredQstIds
			.sort((a, b) => questions[b].timestamp - questions[a].timestamp  ),
		unanswredQstIds : unanswredQstIds
			.sort((a, b) => questions[b].timestamp - questions[a].timestamp  ),
		
	}
}

export default connect(mapStateToProps)(Dashboard)

