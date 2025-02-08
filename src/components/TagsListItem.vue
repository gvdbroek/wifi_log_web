<script setup lang="ts">
import {ref} from 'vue'
const props = defineProps(['tagdata'])
console.log(props.tagdata.name);

</script>
<template>
  <li>
    <p>{{props.tagdata.name}}</p>
    <p>{{props.tagdata.id}}</p>
  </li>
</template>
