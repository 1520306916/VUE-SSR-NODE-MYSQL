import Vue from "vue"
import '~/node_modules/mint-ui/lib/style.min.css'

import { Header,Button,Swipe,SwipeItem,Search,Loadmore } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Search.name, Search);
Vue.component(Loadmore.name, Loadmore);