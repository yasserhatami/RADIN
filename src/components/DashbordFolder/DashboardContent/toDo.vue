<template>
  <div dir="rtl" class="wrapper pa-3 h-100">
    {{ taskArray }} jjjj
    <!-- <div class="h-100 w-100">
      <v-row class="w-100 ma-0 d-flex justify-space-between align-center">
        <v-col cols="10 pa-0">
          <p class="text-h6 text-lg-h5">یادداشت های امروز</p>
        </v-col>
        <v-col cols="2">
          <v-icon @click="add" class="bg-red rounded-lg pa-0 ml-2" icon="mdi-plus"></v-icon>
        </v-col>
      </v-row>

      <v-row class=" d-flex justify-center align-center">
        <div  class="w-100 px-2 d-flex justify-space-between align-center">
          <span>jhhgfgg</span>

          <label class="labelcontainer">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </v-row>

      <v-row class="d-flex justify-space-between align-center mt-0">
        <v-col class="mt-0 px-2 d-flex justify-space-between align-center mt-3" cols="12">
          <input class="pa-0 entertask" v-model="addedTask" />

          <label class="labelcontainer">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </v-col>
      </v-row>
    </div> -->
  </div>
</template>


<script>
import toDo from "@/services/toDo";
import { ref, onBeforeMount, reactive } from "vue";
export default {
  setup() {
    const addedTask = ref("");
    let taskArray = reactive();
    function add() {
      let title = JSON.stringify({
        addedTask
      });

      toDo
        .createTask({
          title
        })
        .then(res => {
          console.log(res);
        });
    }

    onBeforeMount(() => {
      toDo.getAllTasks().then(res => {
        taskArray = res.data,
        console.log(taskArray);
      });
    });

    return {
      addedTask,
      taskArray,
      add
    };
  }

  // beforeMount() {},
};
</script>

<style scoped>
.labelcontainer {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.labelcontainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(204, 203, 203, 0.25);
  border-radius: 4px;
  border: 1px solid #d9d9d9;
}
.labelcontainer:hover input ~ .checkmark {
  background-color: #faf8f7;
}
.labelcontainer input:checked ~ .checkmark {
  background-color: #ffffff;
  border: #bfdc36 1px solid;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.labelcontainer input:checked ~ .checkmark:after {
  display: block;
}
.labelcontainer .checkmark:after {
  left: 6px;
  top: 2px;
  width: 6px;
  height: 11px;
  border: solid #bfdc36;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.entertask {
  border-bottom: 1px dashed #d9d9d9;
  width: 80%;
  outline: none;
}
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
.wrapper {
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(157, 157, 157, 0.25);
  border-radius: 30px;
  height: 100%;
}
*{
  font-family: "DanaFaNum";
}

</style>