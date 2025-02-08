<template>
    <!-- <button v-for="tag in tags" :key="tag.id" v-if="tags && bssid && !bssid.tags.includes(tag.id)" >{{tag.name}}</button> -->
  <Suspense>

    <template #default>
      <span v-for="tag in tags" :key="tag.id">
        <button
          v-if="!hasTag(bssid, tag)">
          add {{tag.name}}
        </button>
      </span>
    </template>
  </Suspense>
</template>

<script setup lang="ts">

import {ref, defineProps} from 'vue'
const props = defineProps(
  {
    tags: Array,
    bssid: Object
  });
// console.log(props)

  const hasTag = (bssid, tag) =>{
    if (!bssid || !tag){
      return false;
    }
return bssid.tags.includes(tag.id);

  };
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
