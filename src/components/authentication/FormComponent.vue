<template>
  <div dir="rtl" class="w-100 h-100 d-flex justify-center align-center">
    <v-sheet class="px-8 pt-8 sheet w-100" rounded>
      <div class="text-center mb-4">
        <p class="text-red text-h5" v-if="notMatchWarn">
          نام کاربری یا رمز عبور اشتباه است،لطفا دوباره تلاش کنید
        </p>
      </div>
      <v-text-field
        autocomplete="true"
        v-model="state.userName"
        placeholder="نام کاربری(انگلیسی)"
        class="text-field mb-2"
        variant="solo"
        @blur="v$.userName.$touch"
      ></v-text-field>

      <div
        class="text-red mb-2 text-subtitle-1"
        v-for="error of v$.userName.$errors"
        :key="error.$id"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>

      <v-text-field
        autocomplete="true"
        @blur="v$.password.$touch"
        placeholder="رمز عبور"
        class="mb-0 pb-0 text-field"
        v-model="state.password"
        variant="solo"
      ></v-text-field>
      <div
        class="text-red mb-2 text-subtitle-1"
        v-for="error of v$.password.$errors"
        :key="error.$id"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>

      <div>
        <v-btn @click="login()" block variant="elevated" class="btn mt-5">
          <span v-if="activeLoading">ورود</span>
          <v-progress-circular v-else indeterminate></v-progress-circular>
        </v-btn>
      </div>

      <p class="text-red mb-2 mt-2 text-subtitle-2" v-if="correct">
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
import { required, minLength, alpha, helpers } from "@vuelidate/validators";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import auth from "@/services/auth.js";
export default {
  data() {
    return {};
  },
  setup() {
    let notMatchWarn = ref(false);
    let activeLoading = ref(true);
    const router = useRouter();

    const state = reactive({
      userName: "",
      password: "",
    });
    let correct = ref(false);

    const rules = {
      userName: {
        required: helpers.withMessage("پر بودن این فیلد الزامیست.", required),
        minLength,
        alpha: helpers.withMessage(
          "لطفا فقط از حروف انگلیسی استفاده کنید.",
          alpha
        ),
      },

      password: {
        required: helpers.withMessage("پر بودن این فیلد الزامیست.", required),
        minLength,
      },
    };
    function login() {
      activeLoading.value = false;
      if (state.userName === "" || state.password === "") {
        correct.value = true;
        setTimeout(() => {
          correct.value = false;
        }, 5000);
      } else {
        const payload = {
          username: state.userName,
          password: state.password,
        };

        auth
          .login(payload)

          .then((response) => {
            if (response.status === 200) {
              console.log();

              if (response.statusText === "OK") {
                localStorage.setItem(
                  "token",
                  `Bearer ${response.data.access_token}`
                );
                router.push("/Dashboard");
              } else {
                alert(activeLoading.value);
              }
            }
          })
          .catch(() => {
            activeLoading.value = true;
            notMatchWarn.value = true;
            setTimeout(() => {
              notMatchWarn.value = false;
            }, 5000);
          });
      }
    }

    const v$ = useVuelidate(rules, state);

    return { v$, state, login, correct, auth, activeLoading, notMatchWarn };
  },
};
</script>
<style scoped>
.img {
  width: 174px;
  height: 39px;
}
* {
  font-family: "DanaFaNum";
}
.btn {
  height: 56px !important;
  color: #ffffff;
  /* background: linear-gradient(93.79deg, #ff614c 2.81%, #ff4b33 97.42%); */
  background-color: rgb(235, 33, 33);
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
</style>