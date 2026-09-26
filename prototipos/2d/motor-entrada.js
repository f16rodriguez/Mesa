import * as L from '/home/user/Mesa/app/src/logic.js';
import {chooseMove} from '/home/user/Mesa/app/src/bot.ts';
import {chainLayout,openEnds,DIM} from '/home/user/Mesa/app/src/scene-layout.ts';
window.MesaMotor={setup:L.setup,applyAction:L.applyAction,viewFor:L.viewFor,validateAction:L.validateAction,chooseMove,chainLayout,openEnds,DIM};
