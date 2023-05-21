<template>
  <div dir="rtl" class="aa pa-3 h-100">
    <div class="h-100 w-100">
      <v-row class="w-100 ma-0 d-flex justify-space-between align-center">
        <v-col cols="10 pa-0">
          <p class="text-h6 text-lg-h5">یادداشت های امروز</p>
        </v-col>
        <v-col cols="2">
          <v-icon
            @click="add"
            class="bg-red rounded-lg pa-0 ml-2"
            icon="mdi-plus"
          ></v-icon>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-space-between align-center mt-0">
        <v-col class="mt-0 px-2" cols="12">
          <v-text-field
            class="pa-0"
            v-model="addedTask"
            label="یادداشت جدید"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center align-center">
        <div
          v-if="flag"
          class="w-100 px-2 d-flex justify-space-between align-center"
        >
          <label for="vehicle1">{{ task }}</label
          ><br />
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        </div>
      </v-row>
    </div>
  </div>
</template>


<script>
// import toDo from "@/services/toDo";
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const count = ref(1);
    const addedTask = ref("");
    function add() {
      axios
        .post("/login", {
          firstName: "Finn",
          lastName: "Williams",
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      console.log("ssssss", addedTask);
      // toDo
      //   .rigester({
      //     title: addedTask.value,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
    }

    return {
      count,
      addedTask,
      add,
    };
  },

  // beforeMount() {},
};
</script>

<style scoped>
p {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height, or 120% */

  display: flex;
  align-items: center;
  text-align: right;

  color: #272b31;
}
.aa {
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(157, 157, 157, 0.25);
  border-radius: 30px;
  height: 100%;
}
.zz {
  width: 85%;
  background-color: aqua;
}
</style>