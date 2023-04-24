<template>
    <v-container fluid class="pt-0 px-0">
    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0 ">
        <v-card  class="card-image h-screen w-100 border-none" >
          <v-img class="" cover :src="require('@/assets/loginbg.png')" >
            <v-row  class=" h-100 pa-0 ma-0">
              <v-col cols="12" md="6" class="h-100 pa-0 ma-0">
                <div class="w-100 h-100 d-flex justify-center align-center ">
                  <div class="formraper">
                    <formcomponent></formcomponent>
                  </div>
                </div>
              </v-col>
              <v-col cols="6" class="blur h-100  pa-0 ma-0">
                <div class="w-100  d-flex justify-center align-center logocontainer">
                  <div class="logoraper">
                    <logo class=" w-100 h-100"/>
                  </div>  
                </div>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>
<script>
import logo from "@/components/LogoComponent.vue";
import formcomponent from "@/components/FormComponent.vue"
export default {
  name: "LogIn",
  components: {
    formcomponent,
    logo,
    
  }
};
</script>
<style>
.logoraper{
  width: 75%;
  height: 25%;
}
.blur {
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(5px);
}
.logocontainer{
  height: 98%;
}
.formraper{
  width: 80%;
}
</style>