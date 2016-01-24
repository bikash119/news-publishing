'use strict';

var React = require('react');
var Router = require('react-router');
var Header = require('./common/header');
var Link = Router.Link;

var Home = React.createClass({
	render(){
		return(
				<div className="container">
					<div className="jumbotron text-center">
						<h1> ABC News Administration </h1>
						<p> ABC News Administration webapp build with React , React Router and Flux.</p>
					</div>
				</div>
			);
	}
});

module.exports=Home;