// import Vuex from "vuex";

// export default Vuex.createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

import { createStore } from 'vuex'
export default createStore({
  state () {
    return {
      count: 1
    }
  }
})
