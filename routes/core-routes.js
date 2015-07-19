var React = require('react/addons'),
ReactApp = require('../app/components/ReactApp');

module.exports = function(app) {

	app.get('/', function(req, res){
		var reactHtml = React.renderToString(<ReactApp/>);
	    res.render('index.ejs', {reactOutput: reactHtml});
	});
    
    app.get('*', function(req, res) {
        res.json({
            "route": "Sorry this page does not exist!"
        });
    });
    
};