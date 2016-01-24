'use strict';

var React = require('react');
var Router = require('react-router');
var SearchTextInput = require('./searchTextInput');

var SearchForm = React.createClass({

	propType:{
		search: React.PropTypes.object.isRequired,
		onSearch: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	render(){
		return(
				<form>
					<h1> Search Article </h1>
					<SearchTextInput
						name="searchInput"
						value={this.props.search.searchInput}
						onChange={this.props.onChange}
						error={this.props.errors.searchText}/>
					<br />
					<input type="submit" value="Search" className="btn btn-default" onClick={this.props.onSearch}/>
				</form>
			);
	}
});

module.exports = SearchForm;