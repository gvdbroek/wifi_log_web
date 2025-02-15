<template>
  <Suspense>
    <template #default>
      <div>
        <div class=flex>
        <Card title="Werkdagen" :value="numWorkdaysInMonth"></Card>
        <Card title="Thuis" :value="numWorkdaysSpentAtHome"></Card>
        <Card title="Kantoor" :value="numWorkdaysSpentInOffice"></Card>
        <Card title="Nog Thuis" :value="(numWorkdaysInMonth / 2) - numWorkdaysSpentAtHome "></Card>
        </div>
      </div>
    </template>
  </Suspense>

</template>

<script setup lang="ts">
  const urlParams = new URLSearchParams(window.location.search);
  let yearParam = parseInt(urlParams.get('year'), 10)
  let monthParam = parseInt(urlParams.get('month'), 10)
  if(isNaN(yearParam)) yearParam=2025;
  if(isNaN(monthParam)) monthParam=1;

  console.log(yearParam)
  console.log(monthParam)

  import {ref,toRaw} from 'vue';
  import {apiService} from '@/services/apiService';
  import Card from './Card.vue';

  const reportData = ref(null);
  const tags = ref(null);

  reportData.value = await apiService.fetchReport(yearParam,monthParam)
  tags.value = await apiService.getTags()

  let tagDict = {}
  tags.value.forEach(tag => {
    tagDict[tag.id] = tag.name
  });

  const data = ref([]);
  data.value = reportData.value
  const homeTag = "Home"
  const workTag = "Work"

  let numWorkdaysInMonth = ref(0);
  let numWorkdaysSpentInOffice = ref(0);
  let numWorkdaysSpentAtHome = ref(0);

  reportData.value.forEach(dayInfo => {
    const date = new Date(dayInfo.date);
    if (date.getDay() == 0 || date.getDay() == 6){
      return
    }
    numWorkdaysInMonth.value += 1;
    if(dayInfo.tag === homeTag){
      numWorkdaysSpentAtHome.value += 1;

    } 
    if(dayInfo.tag === workTag){
      numWorkdaysSpentInOffice.value += 1;
    }
  });
  

  console.log(numWorkdaysInMonth.value)


</script>
