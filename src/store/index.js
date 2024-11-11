import { createStore } from 'vuex'

import menu from './menu'
import auth from './auth'

export const store = createStore({
    modules: {
        menu,
        auth
    }
})