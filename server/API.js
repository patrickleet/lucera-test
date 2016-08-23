// API
// ===

module.exports.api = function(server, fs) {

	// Sample Rest Call

	server.get('/api/getData', function(req, res) {

		fs.readFile(__dirname + '/data.json', function(err, data) {
			if (err) throw err;

      var data = JSON.parse(data);

      data.map((item) => {
        item.id = `${item.LiquidityProvider}_${item.Client}`;
      });

			res.send(200, data);
		});
	});

};
