var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	searchUsers: function(user){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_USERS,
			user:user
		});
	},

	receiveUserResults: function(user){
		console.log(user);
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_USER_RESULTS,
			user:user
		});
	}
}

module.exports = AppActions;