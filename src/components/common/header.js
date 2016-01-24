'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render(){
		return(
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<Link to="app" className="navbar-brand">
						</Link>
						<ul className="nav navbar-nav">
							<li><Link to="app">Home</Link></li>
							<li><Link to="about">About</Link></li>
							<li><Link to="articles">Article</Link></li>
							<li><Link to="search">Search</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li className="btn btn-default btn-xs"><Link to="app">Signup</Link></li>
							<li className="btn btn-default"><Link to="app">Login</Link></li>
						</ul>
					</div>
				</nav>
			);
	}
});


module.exports = Header;
