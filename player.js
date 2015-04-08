/**
 * Created by leh on 07.04.2015.
 */
var Player = (function () {
    function Player() {
    }
    Player.prototype.version = function () {
        return 'Default TypeScript folding player';
    };
    Player.prototype.bet_request = function (game_state) {
        return 0;
    };
    Player.prototype.showdown = function (game_state) {
    };
    return Player;
})();
module.exports = Player;
//# sourceMappingURL=player.js.map