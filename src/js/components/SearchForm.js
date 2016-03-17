var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
	render: function(){
		return(
			<div className="search-form">
				<h1 className="text-center">Search For User Names!</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" ref="title" placeholder="Enter DOTA2 User Names..." />
					</div>
					<button className="btn btn-primary btn-block">Search Users</button>
				</form>
			</div>
		)
	},

	onSubmit: function(e){
		e.preventDefault();
		console.log(this.refs.title.value.trim());
		var user = {
			name: this.refs.title.value.trim()
		}

		AppActions.searchUsers(user);
	}
});

module.exports = SearchForm;