import { createStore } from 'vuex'

import menu from './menu'

export const store = createStore({
    modules: {
        menu
    }
})