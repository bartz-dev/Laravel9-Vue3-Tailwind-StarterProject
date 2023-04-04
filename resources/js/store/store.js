import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
    state() {
        return {
            authenticated: false,
            user: null,
            token: null,
        };
    },
    mutations: {
        appendToUser(state, data) {
            state.user = { ...state.user, info: data };
        },
        setUser(state, user) {
            state.user = user;
            if (user) state.authenticated = true;
        },
        setToken(state, token) {
            state.token = token;
        },
        userLogout(state) {
            state.user = null;
            state.token = null;
            state.authenticated = false;
        },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getToken(state) {
            return state.token;
        },
    },
    plugins: [createPersistedState()],
});
