import Vue from 'vue'
import * as types from '../mutation-types'
import * as apis from '../../api'

const state = {
  people: []
}

const mutations = {
  [types.GET_PEOPLE] (state, { people }) {
    state.people = state.people.concat(people)
  }
}

const actions = {
  getPeople({commit}, params) {
    apis.getPeople(params)
      .then(res => {
        commit(types.GET_PEOPLE, {
          people: [{id: 1, name: 'Lee'}]
        })
      })
  }
}

const getters = {
  people: state => state.people,
}

export default {
  state,
  mutations,
  getters,
  actions
}
