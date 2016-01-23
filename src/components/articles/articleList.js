"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var ArticleActions = require('../../actions/articleActions');
var Link = Router.Link;


var ArticleList = React.createClass({

	propTypes:{
		articles: React.PropTypes.array.isRequired
	},

	deleteArticle(id,event){
		event.preventDefault();
		ArticleActions.deleteArticle(id);
		toastr.success('Article removed');
	},

	render(){
		function createArticleRow(article){
			console.log(article);
			return(
				<tr key={article.id}>
					<td><a href="#" onClick={this.deleteArticle.bind(this,article.id)}>Delete</a></td>
					<td><Link to="manageArticle" params={{articleId:article.id}}>{article.id}</Link></td>
					<td>{article.title}</td>
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
							{this.props.articles.map(createArticleRow,this)}
						</tbody>
					</table>
				</div>
			);
	}
});

module.exports = ArticleList;