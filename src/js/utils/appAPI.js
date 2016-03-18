var AppActions = require('../actions/AppActions');
//for node.js server
//var server = require('../../server.js');

//var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
  //      'v2/?key=4672BE79C67A5367C0FB090B4B36FFF9&&match_id=1367469919';
/*module.exports = {
	searchUsers: function(user){
		var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
        'v2/?key=4672BE79C67A5367C0FB090B4B36FFF9&appid=8930';

		$.ajax({
			url:'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?key=4672BE79C67A5367C0FB090B4B36FFF9&match_id='+user.name,
			dataType:'json',
			cache:false,
			success: function(){
				AppActions.receiveUserResults(data);
			}.bind(this),
			
			error:function(xhr, status, err){
				alert(err);
			}.bind(this)
		});
	}
}*/
var appAPI = {
	url:'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?key=4672BE79C67A5367C0FB090B4B36FFF9&&match_id=1367469919'
}
module.exports = appAPI;

