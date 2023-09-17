<template>
  <div class="bg-secondary text-primary vh-100">
    <login-form v-if="mainStore.appNavigationStep === 'login'" />
    <sign-up-form v-if="mainStore.appNavigationStep === 'signUp'" />
    <home-screen v-if="mainStore.appNavigationStep === 'home'"/>
  </div>
</template>

<script setup>
import useMainStore from './stores/store';

import LoginForm from './components/LoginForm.vue';
import HomeScreen from './components/HomeScreen.vue';
import SignUpForm from './components/SignUpForm.vue';

const mainStore = useMainStore();
</script>