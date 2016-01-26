'use strict';

var React = require('react');

var ArticleListHeader = React.createClass({
	render(){
		return(
				<thead>
					<th></th>
					<th></th>
					<th>Title</th>
					<th>Author</th>
					<th>Description</th>
					<th>Published On</th>
					<th>Category</th>
					<th>Public URL</th>
				</thead>
			);
	}
});

module.exports = ArticleListHeader;