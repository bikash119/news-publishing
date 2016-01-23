'use strict';

var React= require('react');
var Router = require('react-router');
var ArticleList = require('./articleList');
var Link = Router.Link;

var ArticleStore = require('../../stores/articleStore');

var ArticlePage = React.createClass({

	getInitialState(){
		return {
			articles:ArticleStore.getAllArticles()
		};
	},

	_onChange(){
		this.setState({ articles:ArticleStore.getAllArticles() });
	},

	componentWillMount(){
		ArticleStore.addChangeListener(this._onChange);
	},

	componentWillUnmount(){
		ArticleStore.removeChangeListener(this._onChange);
	},
	render(){
		return(
			<div>
				<h1>Articles</h1>
				<Link to="addArticle" className="btn btn-default btn-primary">Add Article</Link>
				<ArticleList articles={this.state.articles}/>
			</div>
		);
	}
});

module.exports= ArticlePage;
