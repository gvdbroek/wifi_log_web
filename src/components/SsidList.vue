<template>
      <h2 class="mb-6 text-2xl">Unknown Networks</h2><br/>
      <ul class="divide-y divide-gray-600">
      <SsidListItem v-for="bssid in filteredBssids" :bssid=bssid :tags=tagsCopy ></SsidListItem>
  </ul>
</template>

<script setup lang="ts">
  import {ref,toRaw, computed} from 'vue';
  import {apiService} from '@/services/apiService';
  import SsidListItem from '@/components/SsidListItem.vue'

  const tags = ref(null);
  tags.value = await apiService.getTags();

  const bssids = ref([]);
  await apiService.fetchBssids(bssids);

  const tagsCopy = toRaw(tags);

  const filteredBssids = computed(() => {
    return bssids.value.filter(passesFilter);
  });


  function passesFilter(bssid){
    if(bssid.tags.length > 0){
      return false;
    }
    return true;

  }


</script>
