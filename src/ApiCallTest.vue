<template>
    <header class="float-right">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="25" height="25" /> <p class="text-xs">made with vue &lt;3</p>
    </header>
  <main>
    <h1 class="mb-6 text-4xl">Wifi-Log</h1>
    <p class="mb-6">Bleep bloop, welcome to wifi log</p><br/>
    <DatePicker/><br/>
    <Suspense>
      <template #default>
          <div>
            <Report/><br/>
            <SsidList/><br/>
          </div>
    </template>
    <template #fallback>
      <h2>loading report...</h2>
    </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
  import SsidList from './components/SsidList.vue';
  import Report from './components/Report.vue';
  import DatePicker from './components/DatePicker.vue';

  import {ref} from 'vue';
  const count = ref(0);
  function increment(){
    count.value++;
  }
</script>

<!-- <style scoped> -->
<!-- header { -->
<!--   line-height: 1.5; -->
<!-- } -->
<!---->
<!-- .logo { -->
<!--   display: block; -->
<!--   margin: 0 auto 2rem; -->
<!-- } -->
<!---->
<!-- @media (min-width: 1024px) { -->
<!--   header { -->
<!--     display: flex; -->
<!--     place-items: center; -->
<!--     padding-right: calc(var(--section-gap) / 2); -->
<!--   } -->
<!---->
<!--   .logo { -->
<!--     margin: 0 2rem 0 0; -->
<!--   } -->
<!---->
<!--   header .wrapper { -->
<!--     display: flex; -->
<!--     place-items: flex-start; -->
<!--     flex-wrap: wrap; -->
<!--   } -->
<!-- } -->
<!-- </style> -->
