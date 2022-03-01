import { createStore } from 'vuex'

export default createStore({
    state: {
        searchValue: "",
        sortedvalue: "",
        perPage: 1,
        users: [],
        totalCountByName: null,
        reposRoutedUser: {}
    },
    mutations: {
        setSearchValue(state, payload) {
            state.searchValue = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
        setCountOfUsers(state, payload) {
            state.totalCountByName = payload
        },
        setPageCount(state, payload) {
            state.perPage = payload
        },
        setSortedvalue(state, payload) {
            state.sortedvalue = payload
        },
        setReposRoutedUser(state, payload) {
            state.reposRoutedUser = payload
        }
    },
    actions: {
        async searchByLogin({ state, commit }, payload) {
            const response = await fetch(`https://api.github.com/search/users?q=${payload}&per_page=50&page=${state.perPage}&sort=${state.sortedvalue}`)
            const data = await response.json()

            commit("setSearchValue", payload) 
            commit("setUsers", data.items)
            commit("setCountOfUsers", data.total_count)
        }
    }
});