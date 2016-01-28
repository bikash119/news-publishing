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
		if(!searchResults){
			this.setState({resultArticles:SearchStore.getSearchResults()});
		}
	},
	render(){
		console.log("Articles :: "+this.props.resultArticles);
		function createResultPanel(result){
			return(
				<div className="panel panel-default" key={result.id}>
					<div className="panel-heading panel-primary">
						<h3 className="panel-title">{result.title}</h3>
					</div>
  					<div className="panel-body">
  						{result.description}
  					</div>
  					<div className="panel-footer">By {result.author}</div>
				</div>
			);
		}
		return(
				<div className="container">
					{this.props.resultArticles.map(createResultPanel,this)}
				</div>
			);
	}
});

module.exports = SearchResult;
