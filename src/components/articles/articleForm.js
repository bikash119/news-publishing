"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var ArticleForm = React.createClass({
	propType:{
		article: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	
	render(){
		return(
				<form>
					<h1> Manage Article </h1>
					<TextInput
						name="title"
						label="Title"
						value={this.props.article.title}
						onChange={this.props.onChange}
						error={this.props.errors.title}/>
					<br />
					<TextInput
						name="content"
						label="Content"
						value={this.props.article.content}
						onChange={this.props.onChange}
						error={this.props.errors.content}/>
					<br />

					<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
				</form>
			);
	}
});

module.exports = ArticleForm;