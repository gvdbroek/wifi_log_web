<template>
  <Suspense>
    <template #default>
      <div>
        <p>
          <span>Werkdagen in maand:</span> <span>{{ numWorkdaysInMonth }}</span>
        </p>
        <p>
          <span>Dagen thuis:</span> <span>{{ numWorkdaysSpentAtHome }}</span>
        </p>
        <p>
          <span>Dagen kantoor:</span> <span>{{ numWorkdaysSpentInOffice }}</span>
        </p>
        <p>
          <span>Dagen nog thuis te werken:</span> <span>{{ (numWorkdaysInMonth / 2) - numWorkdaysSpentAtHome  }}</span>
        </p>
      </div>
      <!-- <ul> -->
      <!--   <li v-for="day in data"> -->
      <!--     {{day}} -->
      <!--   </li> -->
      <!-- </ul> -->
    </template>
  </Suspense>

</template>

<script setup lang="ts">

  import {ref,toRaw} from 'vue';
  import {apiService} from '@/services/apiService';

  const reportData = ref(null);
  const tags = ref(null);

  reportData.value = await apiService.fetchReport(2025,2)
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
