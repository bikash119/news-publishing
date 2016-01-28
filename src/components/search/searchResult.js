'use strict';

var React = require('react');
var Router = require('react-router');
var SearchStore = require('../../stores/searchStore');
var Link = Router.Link;

var SearchResult = React.createClass({
	propTypes:{
		resultArticles: React.PropTypes.array.isRequired
	},

	componentWillMount(){
		var searchResults = this.props.resultArticles;
		if(searchResults){
			this.setState({resultArticles:SearchStore.getSearchResults()});
		}
	},
	render(){
		console.log("Articles :: "+this.props.resultArticles);
		function createResultRow(result){
			return(
				<tr key={result.id}>
					<td><Link to="detailArticle" params={{resultArticleId:result.id}}>{result.title}</Link></td>
					<td>{result.content}</td>
				</tr>
			);
		}
		return(
				<div>
x				</div>
			);
	}
});

module.exports = SearchResult;
