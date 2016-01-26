"use strict";

//This file is mocking a web API by hitting hard coded data.
var articles = require('./articleData').articles;
var RestConfig = require('../constants/restConfig');
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(article) {
	return article.title.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var ArticleApi = {
	getAllArticles: function() {
		$.ajax({
			url: RestConfig.ARTICLES_FETCH_URL,
			dataType: 'json',
			cache: false,
			success: function(data){
				Dispatcher.dispatch({
						actionType:ActionTypes.ARTICLES_LOADED,
						initialData:{
								articles:data,
								dataFetchState: "ready",
						}
				});
			},
			error:function(xhr,status,err){
				Dispatcher.dispatch({
						actionType:ActionTypes.ARTICLES_LOAD_FAILED,
						initialData:{
								articles:null,
								dataFetchState: "failed",
						}
				});
			}
		});
	},

	getArticleById: function(id) {
		var article = _.find(articles, {id: id});
		return _clone(article);
	},

	indexArticle:function(id){
		var articleIndexingUrl = RestConfig.ARTICLES_INDEX_URL+id;
		$.ajax({
			type: "POST",
			url: articleIndexingUrl,
			dataType: 'json',
			cache: false,
			success: function(data){

			},
			error:function(xhr,status,err){

			}
		});
	},
	
	saveArticle: function(article) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the article to the DB via AJAX call...');
		
		if (article.id) {
			var existingArticleIndex = _.indexOf(articles, _.find(articles, {id: article.id})); 
			articles.splice(existingArticleIndex, 1, article);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new article in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			article.id = _generateId(article);
			articles.push(article);
		}

		return _clone(article);
	},

	deleteArticle: function(id) {
		console.log('Pretend this just deleted the article from the DB via an AJAX call...');
		_.remove(articles, { id: id});
	}
};

module.exports = ArticleApi;