'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SearchResult = React.createClass({
	propTypes:{
		resultArticles: React.PropTypes.array.isRequired
	},
	render(){
		function createResultRow(result){
			return(
				<tr key={result.id}>
					<td><Link to="detailArticle" params={{resultArticleId:result.id}}>{result.title}</Link></td>
					<td>{article.content}</td>
				</tr>
			);
		}
		return(
				<div>
					<table className="table">
						<thead>
							<th></th>
							<th>ID</th>
							<th>Name</th>
						</thead>
						<tbody>
							{this.props.resultArticles.map(createResultRow,this)}
						</tbody>
					</table>
				</div>
			);
	}
});

module.exports = SearchResult;
