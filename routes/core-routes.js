var React = require('react/addons'),
ReactApp = require('../app/components/ReactApp');

module.exports = function(app) {

	app.get('/', function(req, res){
		var reactHtml = React.renderToString(<ReactApp/>);
        var output = reactHtml.trim();
	    res.render('index.ejs', {reactOutput: output});
	});
    app.get('/bubu', function(req,res){
        res.send('bibibu')
    });
};
