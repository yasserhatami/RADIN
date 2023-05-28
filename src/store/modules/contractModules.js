const contractModules = {
    namespaced: true,
    state: () => ({ 
      uploadedImages : []
    }),
    mutations: { 
      fillUplode_images(state,images){
        console.log('imageeeeeeeeeeees',images);
        state.uploadedImages = images;
      }
     },
    actions: { 
      fillUplodeImages({commit}, payload) {
            commit('fillUplode_images', payload)
        
     }},
    getters: {
  }
}
  export default contractModules