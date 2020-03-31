import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'

const  App = (props) => {
  useEffect(() => {
  	props.dispatch(handleInitialData())
  })

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default connect()(App);