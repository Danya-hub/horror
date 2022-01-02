'use strict';

//? --> rule <--
import './rule/mode.js';

//? --> store <--
import './store/index.js'

//? --> global <--
import './methods.js';
import './template.js';

//? --> component <--
import './component/area.js';
import './component/UI/room.js';

import Aside from './component/aside.js';
import Main from './component/main.js';

//* --> call <--
new Aside();
new Main();