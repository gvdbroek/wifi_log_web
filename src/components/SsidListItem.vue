<script setup lang="ts">
  import TagSelector from './TagSelector.vue'
  import {ref} from 'vue'
  const props = defineProps(['bssid', 'tags'])
</script>
<template>
  <li>
    <p>{{props.bssid.ssid}}

    <TagSelector :bssid=bssid :tags=tags></TagSelector></p>
  </li>
</template>

