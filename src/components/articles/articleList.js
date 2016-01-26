"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var ArticleActions = require('../../actions/articleActions');
var ArticleListHeader = require('./articleListHeader');
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

	indexArticle(id,event){
		event.preventDefault();
		ArticleActions.indexArticle(id);
		toastr.success('Article index');
	},

	render(){
		function createArticleRow(article){
			return(
				<tr key={article.id}>
					<td><a href="#" onClick={this.deleteArticle.bind(this,article.id)}>Delete</a></td>
					<td><a href="#" onClick={this.indexArticle.bind(this,article.id)}>Index</a></td>
					<td><Link to="manageArticle" params={{articleId:article.id}}>{article.title}</Link></td>
					<td>{article.author}</td>
					<td>{article.description}</td>
					<td>{article.publicationDate}</td>
					<td>{article.category}</td>
					<td><a href={article.fullContentUri} target="_blank">{article.fullContentUri}</a></td>
				</tr>
			);
		}
		if(this.props.articles != undefined){

			return(
					<div>
						<table className="table table-bordered table-responsive">
							<ArticleListHeader />
							<tbody>
								{this.props.articles.map(createArticleRow,this)}
							</tbody>
						</table>
					</div>
				);
		}else{
			return(
					<div>
						<table className="table table-bordered">
							<ArticleListHeader />
						</table>
					</div>
				);
		}
	}
});

module.exports = ArticleList;