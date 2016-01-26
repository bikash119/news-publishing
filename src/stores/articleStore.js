'use react';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _articles = [];


var ArticleStore = assign({},EventEmitter.prototype,{

	addChangeListener(callback){
		this.on(CHANGE_EVENT,callback);
	},

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},

	emitChange(){
		this.emit(CHANGE_EVENT);
	},

	getAllArticles(){
		return _articles;
	},

	getArticleById(id){
		return _.find(_articles,{id:parseInt(id)});
	}

});

Dispatcher.register(function(action){
	switch(action.actionType){
		case ActionTypes.CREATE_ARTICLE:
			_articles.push(action.Article);
			ArticleStore.emitChange();
			break;
		case ActionTypes.UPDATE_ARTICLE:
			var existingArticle = _.find(_articles,{id:action.Article.id});
			var existingArticleIndex = _.indexOf(_articles,existingArticle);
			_articles.splice(existingArticleIndex,1,action.Article);
			ArticleStore.emitChange();
			break;
		case ActionTypes.DELETE_ARTICLE:
			_.remove(_articles,function(article){
				return action.id === article.id;
			});
			ArticleStore.emitChange();
			break;
		case ActionTypes.INITIALIZE:
			_articles = action.initialData.articles;
			ArticleStore.emitChange();
			break;
		case ActionTypes.ARTICLES_LOADED:
			_articles = action.initialData.articles;
			ArticleStore.emitChange();
			break;
		case ActionTypes.ARTICLES_LOAD_FAILED:
			break;
		case ActionTypes.INDEX_ARTICLE:
			console.log( "Indexing article request");
			break;
		default:
			//no op
	}
});

module.exports = ArticleStore;