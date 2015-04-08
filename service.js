/**
 * Created by leh on 07.04.2015.
 */
/// <reference path="./typings/restify/restify.d.ts" />
var restify = require('restify');
var Player = require('player');
var player = new Player();
var server = restify.createServer({
    name: 'poker-player-ts',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.get('/', function (req, res) { return res.send(200, 'OK'); });
server.post('/', function (req, res) {
    if (req.body.action == 'bet_request') {
        res.send(200, 'OK');
    }
    else if (req.body.action == 'bet_request') {
        res.send(200, player.bet_request(JSON.parse(req.body.game_state)).toString());
    }
    else if (req.body.action == 'showdown') {
        player.showdown(JSON.parse(req.body.game_state));
        res.send(200, 'OK');
    }
    else if (req.body.action == 'version') {
        res.send(200, player.version);
    }
    else {
        res.send(200, 'OK');
    }
});
var port = parseInt(process.env['PORT'] || 1337);
server.listen(port, function () {
    console.log('%s listening at %s', server.name, server.url);
});
//# sourceMappingURL=service.js.map