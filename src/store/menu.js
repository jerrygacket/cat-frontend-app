export default {
    state: {
        mainMenu: [
            { id: 1, code: 'home', title: '<i class="fa fa-home" aria-hidden="true"></i>', url: '/', description: '' },
            { id: 2, code: 'tests', title: 'Тесты', url: '/tests', description: 'Тесты, которые можно выполнить' },
            { id: 3, code: 'results', title: 'Результаты', url: '/results', description: 'Результаты, которые можно посмотреть' },
        ]
    },
    mutations: {
        
    },
    actions: {
        
    },
    getters: {
        getMainMenuLinks(state) {
            return state.mainMenu
        },
        getHomePageLinks(state) {
            return state.mainMenu.filter((x) => x.id !== 1)
        },
    },
}