<template>
  <div>
    <h2>User Profile</h2>
    <button @click="login" v-if="!isAuthenticated">Log in</button>
    <div v-if="isAuthenticated">
        <p>{{ user }}</p>
      </div>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';
  console.log('here')
  export default {
    setup() {
      const { loginWithRedirect, user, isAuthenticated } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        user,
        isAuthenticated
      };
    }
  };
</script>