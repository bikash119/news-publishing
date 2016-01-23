'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render(){
		return(
				<div className="jumbotron">
					<h1> ABC News Administration </h1>
					<p> ABC News Administration webapp build with React , React Router and Flux.</p>
				</div>
			);
	}
});

module.exports=Home;