<template>
  <Suspense>
    <template #default>
      <ul>
        <li v-for="day in data">
          {{day}}
        </li>
      </ul>
    </template>
  </Suspense>

</template>

<script setup lang="ts">

  import {ref,toRaw} from 'vue';
  import {apiService} from '@/services/apiService';

  const reportData = ref(null);
  const tags = ref(null);

  reportData.value = await apiService.fetchReport(2025,1)
  tags.value = await apiService.getTags()

  let tagDict = {}
  tags.value.forEach(tag => {
    tagDict[tag.id] = tag.name

  });

  const data = ref([]);

  let entries = Object.entries(toRaw(reportData).value)
  console.log(Object.entries(entries))
  for (let i = 1; i < entries.length +  1; i++) {

    const dayTag = tagDict[reportData.value[i]];
    const dayNumber = i;

    const day = {day:dayNumber, tag:dayTag}
    data.value.push(day);
  }
  console.log(data);

</script>
