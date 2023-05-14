<template>
  <v-container fluid dir="rtl">
    <v-row>
      <v-col
        cols="12"
        class="page w-100 d-flex justify-center align-start align-md-center"
      >
        <forminfo v-if="flag" @appendState="changePage($event)" />
        <uploadfile v-if="!flag" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import forminfo from "@/components/appendContract/formInfo.vue";
import uploadfile from "@/components/appendContract/uploadFile.vue";
export default {
  data() {
    return {
      select: "",
      flag: true,
    };
  },
  components: {
    forminfo,
    uploadfile,
  },
  methods: {
    changePage(event) {
      if (event == false) {
        this.flag = false;
      }
    },
  },
};
</script>

<style scoped>
.row {
  padding-right: 5px;
  padding-left: 5px;
  height: 30% !important;
}

.page {
  height: 95vh;
  background-color: #f5f5f5;
  font-family: "DanaFaNum";
}
</style>