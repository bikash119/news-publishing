"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var SearchApi = require('../api/searchApi');
var ActionTypes = require('../constants/actionTypes');


var SearchActions = {
	searchArticles(searchText){
		console.log("Searching for ::"+searchText);
		var searchResult = SearchApi.searchArticles(searchText);

		Dispatcher.dispatch({
			actionType: ActionTypes.SEARCH_ARTICLE,
			SearchResult: searchResult
		});
	},
};

module.exports = SearchActions;