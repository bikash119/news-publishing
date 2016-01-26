"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ArticleApi = require('../api/articleApi');
var ActionTypes = require('../constants/actionTypes');


var ArticleActions = {
	createArticle(article){
		var newArticle = ArticleApi.saveArticle(article);

		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_ARTICLE,
			Article: newArticle
		});
	},
	updateArticle(article){
		var updatedArticle = ArticleApi.saveArticle(article);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_ARTICLE,
			Article: updatedArticle
		});
	},
	deleteArticle(id){
		ArticleApi.deleteArticle(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_ARTICLE,
			id:id
		});
	},

	indexArticle(id){
		ArticleApi.indexArticle(id);

		Dispatcher.dispatch({
			actionType:ActionTypes.INDEX_ARTICLE,
			id:id
		});
	}
};

module.exports = ArticleActions;