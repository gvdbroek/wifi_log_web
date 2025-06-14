<template>
  <Suspense>
    <template #default>
      <div>
        <VueDatePicker v-model="date" @update:model-value="handleDateChange" dark month-picker auto-apply></VueDatePicker><br/>
      </div>
    </template>
  </Suspense>
</template>
<script setup lang="ts">

  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  import {ref} from 'vue';

  const urlParams = new URLSearchParams(window.location.search);
  let yearParam = parseInt(urlParams.get('year'), 10)
  let monthParam = parseInt(urlParams.get('month'), 10)

  const date = ref({
    month: monthParam -1,
    year: yearParam,
  });

  const handleDateChange = (modelData) => {
      date.value = modelData;
      console.log("Updated!")
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("year", date.value.year);
      searchParams.set("month", date.value.month + 1);
      window.location.search = searchParams.toString();
  }

</script>
