<template>
  <v-container fluid dir="rtl">
    <v-row>
      <v-col cols="12" class="page w-100 d-flex justify-center align-start align-md-center">
        <div class="inner w-75 rounded-xl pa-2">
          <div class="w-100 text-start">
            <p style="color: #bfdc36">بازبینی نهایی</p>
          </div>
          <div
            class="component py-3 mt-3 w-100 d-flex justify-space-between"
            v-for="(input, index) in form"
            :key="index"
          >
            <div class="w-50 d-flex justify-space-between mr-5">
              <span class="key">{{ input.label }}</span>
              <input :disabled="true" type="text" v-model="filledValues[input.name]" />
            </div>
            <div @click="edit(input.index)" class=" d-flex justify-end">
              <v-img class="img pa-3 ml-3" src="@/assets/images/edit.png"></v-img>
            </div>
          </div>
          <div class="mt-3 mb-5">
            <v-btn @click="submitContract" class="btn" block>ثبت نهایی</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import contract from "@/services/contract";

export default {
  data() {
    return {
      form: [
        {
          label: "نام",
          name: "first_name"
        },
        {
          label: "نام خانوادگی",
          name: "last_name"
        },
        {
          label: "کد ملی",
          name: "national_code"
        },
        {
          label: "نوع قرارداد",
          name: "contract_type"
        },
        {
          label: "شماره قرارداد",
          name: "contract_number"
        },
        {
          label: "نوع خودرو",
          name: "car_type"
        },
        {
          label: "وضعیت قرارداد",
          name: "status"
        }
      ],
      filledValues: {
        first_name: "",
        last_name: "",
        national_code: "",
        contract_type: "",
        contract_number: "",
        car_type: "",
        status: "",
        uploaded_images: []
      },
      arrayOfContractImages: []
    };
  },
  mounted() {
    console.log("this.$store.state.uploadedImages", this.$store);
    this.filledValues.uploaded_images = this.$store.state.contractModules.uploadedImages;
  },
  async beforeMount() {
    let contractFilledData = localStorage.getItem("form");
    this.filledValues = {
      ...this.filledValues,
      ...JSON.parse(contractFilledData)
    };
  },
  methods: {
    submitContract() {
      const tempFormData = new FormData();

      for (const field in this.filledValues) {
        if (
          field === "uploaded_images" &&
          this.filledValues.uploaded_images &&
          this.filledValues.uploaded_images.length
        ) {
          for (const item of this.filledValues.uploaded_images) {
            tempFormData.append("uploaded_images", item, item.name);
          }
        } else {
          tempFormData.append(field, this.filledValues[field]);
        }
      }

      contract
        .createContract(tempFormData)
        .then(res => {
          console.log("res", res);
        })
        .catch(err => {
          console.log("caaaa", err);
        });
    },
    edit(input){
      console.log(input);
    }
  }
};
</script>

<style scoped>
.value {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  color: #888888;
}
.key {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #454d5e;
}
.component {
  background: #fcfcfc;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
}
.btn {
  background-color: #bfdc36;
}
.row {
  padding-right: 5px;
  padding-left: 5px;
}

.page {
  height: 95vh;
  background-color: #f5f5f5;
  font-family: "DanaFaNum";
}
.wrap {
  width: 600px;
  font-family: "DanaFaNum";
  background: #ffffff;
  border: 1px solid #d9d9d9;
}
.inner {
  background: #fcfcfc;
  border: 1px solid #d9d9d9;
}
.img {
  width: 15px;
  height: 15px;
}
</style>