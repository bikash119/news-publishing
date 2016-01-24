"use strict";

var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;

var Redirect = Router.Redirect;

var Route = Router.Route;

var routes = (
		<Route name="app" path="/" handler={require('./components/app')}>
			<DefaultRoute handler={require('./components/homePage')} />
			<Route name="about" handler={require('./components/about/aboutPage')} />
			<Route name="articles" handler={require('./components/articles/articlesPage')} />
			<Route name="addArticle" path="article" handler={require('./components/articles/manageArticlePage')} />
			<Route name="manageArticle" path="article/:articleId" handler={require('./components/articles/manageArticlePage')} />
			<Route name="search" handler={require('./components/search/articleSearchPage')} />
			<Route name="detailArticle" handler={require('./components/search/detailArticlePage')}/>
		</Route>
	);

module.exports=routes;