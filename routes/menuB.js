var data = require('../public/data.json');

exports.view = function(req, res){
	res.render('menuB' , data);
};