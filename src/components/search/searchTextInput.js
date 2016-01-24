"use strict";

var React = require('react');

var SearchTextInput = React.createClass({

	propTypes:{
		name: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.string.isRequired,
		placeHolder: React.PropTypes.string,
		value: React.PropTypes.string,
		error: React.PropTypes.string
	},

	render(){
		var wrapperClass = 'form-group';
		if(this.props.error && this.props.error.length > 0){
			wrapperClass += " "+'has-error';
		}
		return(
				<div className={wrapperClass}>
					<div className="field">
						<input type="text"
							name={this.props.name}
							className="form-control"
							placeHolder={this.props.placeHolder}
							ref={this.props.name}
							value={this.props.value}
							onChange={this.props.onChange}/>
						<div className="input">{this.props.error}</div>
					</div>
				</div>
			);
	}
});

module.exports = SearchTextInput;