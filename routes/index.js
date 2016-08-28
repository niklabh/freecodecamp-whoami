
/*
 * GET home page.
 */
var parse = require('user-agent-parser');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.whoami = function(req, res){
    var os = parse(req.headers["user-agent"]);
    res.json({
        ipaddress: req.ip,
        language: req.headers["accept-language"].split(";")[0],
        software: os.os.name + " " + os.os.version
    });
};