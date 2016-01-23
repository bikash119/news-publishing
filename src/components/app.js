'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render(){
		return(
				<div>
					<Header/>
					<div className="fluid-container">
						<RouteHandler/>
					</div>
				</div>
			);
	}
});

module.exports=App;