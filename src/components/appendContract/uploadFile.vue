<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center h-100" cols="12">
        <div class="wrap flex-column justify-center align-center pb-14 pt-7 px-7 rounded-xl">
          <div
            v-if="uploadedImages.length === 0"
            class="inner w-100 h-100 rounded-xl d-flex justify-center align-center"
          >
            <div class="">
              <div v-bind="getRootProps()">
                <input v-bind="getInputProps()" />
                <div>
                  <v-img
                    :width="100"
                    cover
                    src="@/assets/images/Vector.png"
                  ></v-img>
                  <div class="text-center mt-2">
                    <button @click="open">آپلود مدارک</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="inner w-100 h-100 rounded-xl pa-5" v-else>
            <v-row>
              <v-col
                cols="3"
                v-for="(item, index) in uploadedImages"
                :key="index"
                class="aaa"
              >
                <v-img
                  src="@/assets/images/delete.png"
                  @click.prevent="deleteImage(item)"
                  class="delete"
                ></v-img>
                <v-img
                  class="rounded-lg border img"
                  cover
                  :src="item.preview"
                ></v-img>
              </v-col>
            </v-row>
            <div v-bind="getRootProps()">
              <input v-bind="getInputProps()" />
              <div class="d-flex justify-center align-center ">
                <div
                  class="open text-center mt-5 d-flex justify-center align-center"
                >
                  <button  style="font-size: 20px" @click="open">+</button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3  ">
            <v-btn @click="GoToFinalReviewOfTheContract" class="btn"  block>ثبت</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script >
import { useDropzone } from "vue3-dropzone";
import { reactive } from "vue";

export default {
  name: "UseDropzoneDemo",
  methods:{
    GoToFinalReviewOfTheContract(){
      this.$router.push('/FinalReviewcontract')
    }
  },
  setup() {
    let uploadedImages = reactive([]);

    const saveFiles = (files) => {
      const formData = new FormData(); // pass data as a form
      for (var x = 0; x < files.length; x++) {
        // append files as array to the form, feel free to change the array name
        formData.append("images[]", files[x]);
      }
    };

    function onDrop(acceptFiles, rejectReasons) {
      saveFiles(acceptFiles); // saveFiles as callback
      for (const img of acceptFiles) {
        const tempImage = URL.createObjectURL(img);

        Object.assign(img, {
          preview: tempImage,
        });
        uploadedImages.push(img);
      }
      console.log(acceptFiles);
      console.log(rejectReasons);
    }

    const deleteImage = (file) => {
      const fileIndex = uploadedImages.findIndex((item) => {
        item.name === file.name;
      });

      uploadedImages.splice(fileIndex, 1);
    };

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });
    return {
      deleteImage,
      uploadedImages,
      getRootProps,
      getInputProps,
      ...rest,
    };
  },
};
</script>
<style scoped>
.open {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.img {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  width: 150px;
  height: 150px;
}
.wrap {
  width: 600px;
  height: 500px;
  font-family: "DanaFaNum";
  background: #ffffff;
  border: 1px solid #d9d9d9;
}
.inner {
  background: #fcfcfc;
  border: 1px solid #d9d9d9;
}
.a {
  position: relative;
}
.delete {
  width: 20px;
  height: 20px;
  top: 25px;
  z-index: 10;
  cursor: pointer;
}
.btn{
  background-color: #BFDC36;
}

</style>