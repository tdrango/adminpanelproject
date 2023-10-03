<template>
  <div class="bg-secondary text-primary vh-100">
      <login-button v-if="!isAuthenticated"/>
      <home-screen v-if="isAuthenticated"/>
  </div>
</template>

<script setup>
console.log('here')
import { useAuth0 } from '@auth0/auth0-vue';

import HomeScreen from './components/HomeScreen.vue';
import LoginButton from './components/LoginButton.vue';

const { isAuthenticated } = useAuth0();
</script> 
