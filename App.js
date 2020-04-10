import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { handleInitialData } from './actions/shared'
import Dashboard from './container/Dashboard'
import PollDetail from './container/PollDetail'
import NewPoll from './container/NewPoll'
import LeaderBoard from './container/LeaderBoard'
import NavBar from './component/NavBar'
const  App = (props) => {
  useEffect(() => {
  	props.dispatch(handleInitialData())
  })

  return (
   <Router> 
   <div className="App">
   		{ props.loading ?
   	  	  	null 
   	  	  	:  	  	  
   	  	  	<Fragment> 
   	  	  		 <NavBar authedUser={props.authedUser}/>
  	   	  	  	 <div className="main-container">
  	   	  	  	 	<Route path='/' exact component={Dashboard} />
                  	<Route path='/questions/:questionId' component={PollDetail} />
                 	<Route path='/add' component={NewPoll} />
                 	<Route path='/leaderboard' component={LeaderBoard} />
		  	    </div>
   	  	  	</Fragment>

	   	  	  }
   	 

       </div>
   </Router>
  );
}

function mapStateToProps({authedUser, users}){
	return {
		loading: authedUser === null,
		authedUser: users[authedUser]
	}
}

App.propTypes = {
	loading: PropTypes.bool.isRequired,
	authedUser: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(App);