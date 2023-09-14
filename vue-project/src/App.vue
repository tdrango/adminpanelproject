<template>
  <div class="bg-secondary text-primary vh-100">
    <login-form v-if="mainStore.appNaviagtionStep === 1" />
    <home v-if="mainStore.appNaviagtionStep === 2"/>
  </div>
</template>

<script setup>
import useMainStore from './stores/store';

import loginForm from './components/loginForm.vue';
import home from './components/home.vue';

const mainStore = useMainStore();

console.log(mainStore.appNaviagtionStep);
</script>