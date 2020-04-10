import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
const NavBar = (props) => {
	const { authedUser } = props;
	return(
		<nav className="nav navbar">
		<div className="navbar-container">
			  <ul className="nav-list">
			  	<li className="nav-list-item">
			  		<NavLink to="/" exact activeClassName="active" className="nav-link">
			  		  Home
			  		</NavLink>
			  	</li>

			  	<li  className="nav-list-item">
			  		<NavLink to="/add" exact  activeClassName="active" className="nav-link">
			  		  New Question
			  		</NavLink>
			  	</li>

			  	<li  className="nav-list-item">
			  		<NavLink to="/leaderboard" exact activeClassName="active" className="nav-link">
			  		  Leader Board
			  		</NavLink>
			  	</li>

			  	<li  className="nav-list-item">
			  		<Link to="/login" exact  className="nav-link">
			  		  Logout
			  		</Link>
			  	</li>

			  	<li  className="nav-list-item">
			  		<div className="nav-link">
						<span>Hello {authedUser.name}</span>
						<img src={authedUser.avatarURL} alt="user avatar"/>
					</div>
			  	</li>

			  </ul>
		  </div>
		</nav>
	)
}


NavBar.propTypes = {
	authedUser: PropTypes.object.isRequired
}
export default NavBar