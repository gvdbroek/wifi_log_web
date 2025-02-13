<template>
  <Suspense>
    <template #default>
      <span v-for="tag in tags" :key="tag.id" >
        <button class="rounded-md bg-slate-800 py-1 px-2 border-transparent text-center text-sm shadow-md hover:shadow-lg hover:bg-slate-700"
          @click="applyTag(bssid, tag)"
          v-if="!hasTag(tag) && !isTagged()">
          add {{tag.name}}
        </button>
      </span>
    </template>
  </Suspense>
</template>

<script setup lang="ts">

  import {ref, defineProps, reactive} from 'vue'
  import {apiService} from '@/services/apiService';

  const props = defineProps(
    {
      tags: Array,
      bssid: Object
    });

  const reactivebssid = reactive(props.bssid);

  function isTagged(){
    return false 
    // console.log(`Has ${props.bssid.tags.length} tags`)
    const ht = (props.bssid.tags.length != 0)
    // console.log(ht);
    return ht;
    // return props.bssid.tags.includes(hideTag);
  }

  function hasTag(tag) {
    if (!reactivebssid || !tag){
      return false;
    }
    return reactivebssid.tags.includes(tag.id);
  }

  function applyTag(bssid, tag) {
    reactivebssid.tags.push(tag.id)
    apiService.setBssidTag(bssid.bssid, tag.id)

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
