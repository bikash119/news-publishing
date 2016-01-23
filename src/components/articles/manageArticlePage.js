"use strict";

var React= require('react');
var Router = require('react-router');
var ArticleForm = require('./articleForm');
var ArticleActions = require('../../actions/articleActions');
var ArticleStore = require('../../stores/articleStore');
var toastr = require('toastr');

var ManageArticlePage = React.createClass({

	mixins:[
		Router.Navigation
	],

	getInitialState(){
		return{
			article:{id:'',title:'',content:''},
			errors:{},
			dirty:false
		};
	},

	componentWillMount(){
		var articleId = this.props.params.articleId;
		if(articleId){
			this.setState({article:ArticleStore.getArticleById(articleId)});
		}
	},

	setArticleState(){
		this.setState({dirty:true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.article[field] = value;
		return this.setState({article:this.state.article});
	},

	articleFormIsValid(){
		var formIsValid = true;
		this.state.errors = {}; //Clear any previous errors
		if(this.state.article.title.length <3){
			formIsValid = false;
			this.state.errors.title="First Name must be atleast 3 characters";
		}

		if(this.state.article.content.length <3){
			formIsValid = false;
			this.state.errors.content="Last Name must be atleast 3 characters";
		}

		this.setState({errors:this.state.errors});
		return formIsValid;
	},

	saveArticle(event){
		event.preventDefault();
		if(!this.articleFormIsValid()){
			return;
		}
		if(this.state.article.id){
			ArticleActions.updateArticle(this.state.article);
		}else{
			ArticleActions.createArticle(this.state.article);
		}
		this.setState({dirty:false});
		toastr.success('Article saved');
		this.transitionTo('articles');

	},
	render(){
		return(
				<ArticleForm article={this.state.article}
						onChange={this.setArticleState}
						onSave={this.saveArticle}
						errors={this.state.errors}/>
			);
	}
});
module.exports = ManageArticlePage;