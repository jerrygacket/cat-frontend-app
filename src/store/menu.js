export default {
    state: {
        mainMenu: [
            { title: '<i class="fa fa-home" aria-hidden="true"></i>', url: '/' },
            { title: 'Tests', url: '/tests' },
            { title: 'Results', url: '/results' },
        ]
    },
    mutations: {
        
    },
    actions: {
        
    },
    getters: {
        getMainMenuLinkks(state) {
            return state.mainMenu
        },
    },
}