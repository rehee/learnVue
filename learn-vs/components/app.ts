import Vue = require('vue');
import * as vts from 'vue-typescript-component'

@vts.component()
export default class App extends Vue {
    clickCount: number = 0;
    chickCount() {
        this.clickCount++;
    }
}