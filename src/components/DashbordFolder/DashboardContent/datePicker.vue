<template>
  <date-picker
    class="main-datepicker w-100 h-100"
    v-model="date"
    :inline="true"
  />
</template>

<script>
import VuePersianDatetimePicker from "vue3-persian-datetime-picker";
export default {
  components: {
    datePicker: VuePersianDatetimePicker,
  },
};
</script>

<style lang="scss">
.main-datepicker {
  font-family: "DanaFaNum";
}
.vpd-content {
  width: 100%;
}
.vpd-day {
  background-color: white;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-bottom: 0.5rem;
}
.vpd-day-effect {
  top: 0 !important;
  left: 0 !important;
}
.direction-prev {
  width: 100% !important;
}
.vpd-clearfix {
  display: flex;
  justify-content: center;
  align-content: center;
}
.vpd-days {
  display: flex;
  justify-content: center;
  padding: 0 !important;
  height: 100% !important;
}
.vpd-day-text {
  color: #485162;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.vpd-day-effect {
  height: 50px;
  width: 50px;
}
.vpd-day-text span {
  /* padding: 20px; */
}
.vpd-day-effect {
  background-color: #bfdc36 !important;
  width: 100%;
  height: 100%;
}
.main-datepicker .vpd-input-group,
.vpd-header,
.vpd-week {
  display: none;
}
.vpd-actions {
  display: none;
}
.vpd-month-label {
  color: black;
  font-size: 30px;
  height: 36px !important;
}
.vpd-month-label {
  width: 200px;
  height: 150px;
}
@media only screen and (min-width: 1400px) {
  .vpd-day {
    width: 4rem;
    height: 4rem;
    margin-left: 0.5rem;
  }
}
</style>