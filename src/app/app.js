'use strict';

import Aside from './component/aside.js';
import Main from './component/main.js';

//* --> data <--
import './store/areaData.js';
import './store/mobData.js';

//* --> Global <--
import './methods/mathArr.js';
import './methods/insertStyleRule.js'
import './component/room.js';
import './component/area.js';

//* --> call <--
new Aside();
new Main();