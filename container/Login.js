import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setAuthedUser } from '../actions/authedUser'


const Login = (props) => {

	const [selected, setSelected] = useState("")
	const { users, dispatch } = props;

	// Handle the value change in select element
	const handleChange = (e) => {
		setSelected(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(selected !== ""){
			dispatch(setAuthedUser(selected))
		}
		
	}

	return(
		<div className="main-container">
				<div className="login main-border">
			    	<div className="login-header text-center">
			    		<h3 className="h5">Welcom to the Would You Rather App!</h3>
			    		<p>Please sign in to continue</p>
			    	</div>	
			    	<div className="login-body">
			    		<div className="react-logo">
			    		  <img src="/logo192.png" alt="react logo"/>
			    		</div>
			    		<p className="text-center">Choose a Player</p>
			    		<form onSubmit={handleSubmit}>
							  <div className="form-group">
							    <select className="form-control" 
							    				id="select"
							    				value={selected} 
							    				onChange={handleChange} >
							      <option value="" disabled default>Select User</option>
								      {Object.keys(users).map(uid => {
								      	const user = users[uid];
								      	return(
								      		  <option 
								      		  	value={uid}
								      		  	key={uid}>
								      		  	{user.name}
							      		  	</option>
								      		)
								      })}
							    </select>
							  </div>
							  
							   <div className="form-group ">
							      <button type="submit" className="btn btn-block">Login</button>
							  </div>
						</form>
			    	</div>	
				</div>
		</div>

	)
}

function mapStateToProps({users}){
	return {
		users
	}
}

Login.propTypes = {
	users: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Login)