<template>
  <h1 class="text-xl font-black" v-if="filteredBssids.length > 0">Unknown Networks</h1>
  <SsidListItem v-for="bssid in filteredBssids" :bssid=bssid :tags=tagsCopy ></SsidListItem>
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
