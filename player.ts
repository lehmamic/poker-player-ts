/**
 * Created by leh on 07.04.2015.
 */

import generated = require('generated');

class Player {

    version():string{
        return 'Default TypeScript folding player';
    }

    bet_request(game_state:generated.GameState): number {
        return 0;
    }

    showdown(game_state:generated.GameState):void {

    }
}

export = Player;