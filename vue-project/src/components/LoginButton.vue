<template>
  <div>
    <button @click="login">Log in</button>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  console.log('here')
  export default {
    setup() {
      const { loginWithRedirect } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        }
      };
    }
  };
</script>