import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Dashboard from './container/Dashboard'

const  App = (props) => {
  useEffect(() => {
  	props.dispatch(handleInitialData())
  })

  return (
    <div className="App">
	  { props.loading ?
	  	null 
	  	: 
	  	<Dashboard  />
	  }
    </div>
  );
}

function mapStateToProps({authedUser}){
	return {
		loading: authedUser === null
	}
}
export default connect(mapStateToProps)(App);