<template>
  <div dir="rtl" class="w-100 h-100 d-flex justify-center align-center">
    <v-sheet class="px-8 pt-8 sheet w-100" rounded>
      <v-text-field
        v-model="state.userName"
        placeholder="نام کاربری(انگلیسی)"
        class="text-field mb-2"
        variant="solo"
        @blur="v$.userName.$touch"
      >
      </v-text-field>

      <p class="text-red mb-2" v-if="v$.userName.$error">
        پر بودن این فیلد الزامیست.
      </p>

      <v-text-field
        @blur="v$.password.$touch"
        placeholder="رمز عبور"
        class="mb-0 pb-0 text-field"
        v-model="state.password"
        variant="solo"
      >
      </v-text-field>
      <p class="text-red mb-2" v-if="v$.password.$error">
        پر بودن این فیلد الزامیست.
      </p>

      <v-btn @click="login()"  block variant="elevated" class="btn mt-5"> ورود </v-btn>
      <p class="text-red mb-2 mt-2" v-if="correct">
        اول فیلدهای بالا را پر کنید.
      </p>

      <div class="d-flex justify-center align-center mt-7 mb-5">
        <v-img class="img" :src="require('@/assets/images/image1.png')"></v-img>
      </div>
    </v-sheet>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive,ref } from "vue";
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    
    const state = reactive({
      userName: "",
      password: "",
    });
    let correct = ref(false)

    const rules = {
      userName: { required, minLength },
      password: { required, minLength },
    };
    function login(){
      if(state.userName === '' || state.password == ''){
        correct.value = true
        setTimeout(()=>{
          correct.value = false
        },5000)
      }else{
        router.push("/Dashboard");
      }
    }

    const v$ = useVuelidate(rules, state);

    return { v$, state ,login,correct };
  },
};
</script>
<style scoped>
.img {
  width: 174px;
  height: 39px;
}

.btn {
  height: 70px !important;
  color: #ffffff;
  background: linear-gradient(93.79deg, #ff614c 2.81%, #ff4b33 97.42%);
  box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "DanaFaNum";
  font-weight: 500;
  font-size: 20px;
}
.sheet {
  background: rgba(10, 10, 10, 0.5);
  border: 1px solid #485162;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  border-radius: 25px;
  max-width: 500px;
}
.text-field {
  font-family: "DanaFaNum" !important;
  height: 56px !important;
}
@font-face {
  font-family: "DanaFaNum";
  src: local("dana Regular"), local("dana-Regular"),
    url("@/assets/fonts/dana/dana-fanum\ regular.woff2") format("woff2"),
    url("@/assets/fonts/dana/dana-fanum\ regular.woff") format("woff"),
    url("@/assets/fonts/dana/dana-fanum\ regular.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
</style>