<template>
    <div className="max-w-sm w-50 mx-auto border-slate-600 bg-dark shadow-lg rounded-2xl overflow-hidden border border-gray-900">
    <div className="p-4">
      <p className="text-gray-400 mt-2">{{ title }}</p>
      <h2 className="text-xl font-semibold text-gray-200">{{  value  }}</h2>
      <!-- <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"> -->
      <!--   Click Me -->
      <!-- </button> -->
    </div>
    </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
// console.log(this.$route.query.test) // outputs 'yay'
  const props = defineProps(['title', 'value'])

</script>
