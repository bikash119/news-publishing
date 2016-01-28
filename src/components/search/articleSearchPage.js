'use strict';

var React= require('react');
var Router = require('react-router');
var SearchForm = require('./searchForm');
var SearchResult = require('./searchResult');
var SearchStore = require('../../stores/searchStore');
var SearchActions = require('../../actions/searchActions');


var SearchPage = React.createClass({

	getInitialState(){
		return{
			search:{
				searchInput:'',
				searchResult:SearchStore.getSearchResults()
			},
			errors:{}
		};
	},

	_onChange() {
		this.state.search['searchResult'] = SearchStore.getSearchResults();
		this.setState({search: this.state.search});
	},

	componentWillMount(){
		SearchStore.addChangeListener(this._onChange);
	},

	componentWillUnMount(){
		SearchStore.removeChangeListener(this._onChange);
	},

	articleSearchIsValid(){
		var formIsValid = true;
		this.state.errors = {}; //Clear any previous errors
		if(this.state.search.searchInput.length <3){
			formIsValid = false;
			this.state.errors.searchText="Please enter any text more that 3 characters";
		}

		this.setState({errors:this.state.errors});
		return formIsValid;
	},

	setArticleSearchState(){
		var field = event.target.name;
		var value = event.target.value;
		this.state.search[field] = value;
		return this.setState({search:this.state.search});
	},

	searchArticle(event){
		event.preventDefault();
		if(!this.articleSearchIsValid()){
			return;
		}
		SearchActions.searchArticles(this.state.search.searchInput);
		this.state.search['searchResult']=SearchStore.getSearchResults();
		return this.setState({search:this.state.search});

	},
	render(){
		return(
				<div>
					<SearchForm search={this.state.search}
					onSearch={this.searchArticle}
					onChange={this.setArticleSearchState}
					errors={this.state.errors}/>
					<SearchResult resultArticles={this.state.search.searchResult}/>
				</div>
			);
	}
});

module.exports = SearchPage;