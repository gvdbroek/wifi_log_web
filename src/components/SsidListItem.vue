<template>
  <li v-if="show" class="underline">
    <p>{{props.bssid.ssid}}

    <TagSelector :bssid=bssid :tags=tags></TagSelector></p>
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

  // if(!props.tags.Contains(hideTag)){
  //   show.value = false;
  //
  // }

</script>

