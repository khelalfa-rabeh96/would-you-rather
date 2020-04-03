import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

const Dashboard = (props) => {
	const [currentCatg, setCurrentCatg] = useState('unanswred')
	const [currentList, setCurrentList] = useState([])
	const { answeredQstIds, unanswredQstIds } = props;

	useEffect(() => {
		const list = currentCatg === 'unanswred' ? unanswredQstIds : answeredQstIds;
		setCurrentList(list)	
	})
	console.log('props: ', props)
	return(
		<div className="dashboard">
			<h3>The Current List is : {currentCatg} </h3>
			<ul>
				{currentList.map(q => (<li>{q}</li>))}
			</ul>

			
		</div>
		)
}

function mapStateToProps({users, questions, authedUser }){
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

