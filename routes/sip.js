var data = require('../users.json');

exports.view = function(req, res) {
	for (i=0; i < data.users.length; i++) {
		console.log(data.users[i]);
		if (data.users[i].isUser == true) {
			console.log(data.users[i]);
			res.render('sip');
			break;
		}
	}
	res.render('sip');
}