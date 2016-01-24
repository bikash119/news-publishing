"use strict";

//This file is mocking a web API by hitting hard coded data.
var searchResults = require('./searchData').searchResults;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(result) {
	return result.title.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var SearchApi = {
	searchArticles: function(text) {
		return _clone(searchResults); 
	},

};

module.exports = SearchApi;