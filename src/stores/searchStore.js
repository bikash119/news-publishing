'use react';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _searchResultArticles = [];


var SearchStore = assign({},EventEmitter.prototype,{

	addChangeListener(callback){
		this.on(CHANGE_EVENT,callback);
	},

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},

	emitChange(){
		this.emit(CHANGE_EVENT);
	},

	getSearchResults(){
		return _searchResultArticles;
	},

});

Dispatcher.register(function(action){
	switch(action.actionType){
		case ActionTypes.SEARCH_ARTICLES:
			_searchResultArticles = action.initialData.articles;
			SearchStore.emitChange();
			break;
		case ActionTypes.DISPLAY_RESULT:
			_searchResultArticles = action.initialData.articles.body.responses;
			SearchStore.emitChange();
			break;
		case ActionTypes.DISPLAY_NO_DATA:
			_searchResultArticles = action.initialData.articles;
			SearchStore.emitChange();
			break;
		default:
			//no op
	}
});

module.exports = SearchStore;