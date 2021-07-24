import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: null
    },
    getters: {
        idToken: state => state.idToken
    },
    mutations: {
        updateIdToken (state, idToken) {
            state.idToken = idToken
        }
    },
    actions: {
        login({commit}, authData) {
            axios.post(
                '/accounts:signInWithPassword?key=AIzaSyC9xpsrA7B92sXf0ovzU7gSfk52YMIuL9U',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }
            ).then(response => {
                commit('updateIdToken', response.data.idToken)
                console.log(response)
            }).catch(error => {
                console.log(error.response.data.error)
            })
        },
        register({commit}, authData) {
            axios.post(
                '/accounts:signUp?key=AIzaSyC9xpsrA7B92sXf0ovzU7gSfk52YMIuL9U',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }
            ).then(response => {
                commit('updateIdToken', response.data.idToken)
                console.log(response)
            }).catch(error => {
                console.log(error.response.data.error)
            })
        }
    }
});