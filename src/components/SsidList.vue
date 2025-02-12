<template>
  <SsidListItem v-for="bssid in bssidsCopy" :bssid=bssid :tags=tagsCopy></SsidListItem>
</template>

<script setup lang="ts">
  import {ref,toRaw} from 'vue';
  import {apiService} from '@/services/apiService';
  import SsidListItem from '@/components/SsidListItem.vue'

  const tags = ref(null);
  tags.value = await apiService.getTags();

  const bssids = ref(null);
  await apiService.fetchBssids(bssids);

  const tagsCopy = toRaw(tags);
  const bssidsCopy = toRaw(bssids);


</script>
