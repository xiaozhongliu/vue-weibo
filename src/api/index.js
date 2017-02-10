import Vue from 'vue'

export const getPeople = () => {
  return Vue.http.get('/')
}
