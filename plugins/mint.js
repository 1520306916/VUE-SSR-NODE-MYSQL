import Vue from "vue"
import '~/node_modules/mint-ui/lib/style.min.css'

import { Header,Button,Swipe,SwipeItem} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);