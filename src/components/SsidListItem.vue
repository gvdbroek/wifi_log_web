<template>
  <li v-if="show" class="ps-5 text-xl sm:pb-4 ml-10">
    <div class="columns-2">
    <p>&gt; {{props.bssid.ssid}}</p>
    <p class="ps-4 text-sm">{{props.bssid.bssid}}</p>
      <TagSelector :bssid=bssid :tags=tags></TagSelector>
    </div>
  </li>
</template>


<script setup lang="ts">
  import TagSelector from './TagSelector.vue'
  import {ref} from 'vue'
  const props = defineProps(['bssid', 'tags'])
  const hideTag = 3;
  const show =ref(true);

  let hasHideTag = props.bssid.tags.includes(hideTag)

  if(hasHideTag){
    console.log(`${props.bssid.ssid} has ignore tag`)
    show.value= false;
  }

</script>

