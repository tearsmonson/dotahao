var AppActions = require('../actions/AppActions');

module.exports = {
	searchUsers: function(user){
		$.ajax({
			url:'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?key=4672BE79C67A5367C0FB090B4B36FFF9&match_id='+user.name,
			dataType:'json',
			cache:false,
			success: function(){
				var data1 =  JSON.parse(data),
				AppActions.receiveUserResults(data1);
			}.bind(this),
			
			error:function(xhr, status, err){
				alert(err);
			}.bind(this)
		});
	}
}