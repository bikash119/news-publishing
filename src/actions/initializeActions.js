"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var ArticleApi = require('../api/articleApi');

var InitializeActions = {
	initApp(){
		Dispatcher.dispatch({
			actionType:ActionTypes.INITIALIZE,
			initialData:{
				articles:ArticleApi.getAllArticles(),
				dataFetchState: "loading",
			}
		});
	}
};

module.exports = InitializeActions;