import { createStore } from 'vuex';
// import VuexPersistence from 'vuex-persist';
import contractModules from "./modules/contractModules"

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

const store = createStore({
    modules: {
        contractModules: contractModules
    },
    // plugins:[vuexLocal.plugin]
  })
  export default store;