'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render(){
		return(
				<div className="jumbotron">
					<h1> News Administration </h1>
					<p> News Administration webapp build with Reach , React Router and Flux.</p>
				</div>
			);
	}
});