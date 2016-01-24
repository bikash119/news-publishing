"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var SearchApi = require('../api/searchApi');
var ActionTypes = require('../constants/actionTypes');


var SearchActions = {
	searchArticle(searchText){
		var newArticle = SearchApi.searchArticle(article);

		Dispatcher.dispatch({
			actionType: ActionTypes.SEARCH_ARTICLE,
			Article: newArticle
		});
	},
};

module.exports = SearchActions;