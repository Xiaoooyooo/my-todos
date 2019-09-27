import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskLists: [{
      id: 1,
      message: "First",
      done: false
    }, {
      id: 2,
      message: "Second",
      done: true
    }, {
      id: 3,
      message: "Third",
      done: false
    }, {
      id: 4,
      message: "Fourth",
      done: false
    }, {
      id: 5,
      message: "Fifth",
      done: false
    },{
      id: 6,
      message: "Sixth",
      done: false
    }]
  },
  mutations: {
    updateData(state, payload) {
      state.taskLists.splice(payload.index, 1)
    },
    changeTaskState(state,payload){
      state.taskLists[payload.index].done = !state.taskLists[payload.index].done
    },
    addNewTask(state,payload){
      var t = new Date
      state.taskLists.push({
        id: t.getTime(),
        message: payload.task,
        done: false
      })
    }
  },
  actions: {

  },
  getters: {
    tasks(state) {
      return state.taskLists
    },
    length(state) {
      let length = 0
      state.taskLists.forEach(el => {
        length = el.done ? length : length + 1
      })
      return length
    }
  }
})