<template>
    <div class="w-50 mx-auto p-20">
        <div class="text-center mb-20">
            Welcome to your admin panel! 
        </div>

        <base-form-group 
            label-text="Email"
            type="email"
            form-key="inputEmail"
        />
        
        <base-form-group 
            label-text="Password"
            type="password"
            form-key="inputPassword"
        />

        <base-button 
            button-text="Login"
            @button-clicked="loginButtonClicked"
        />
    <div>

    </div>
    </div>
</template>

<script setup>
import useMainStore from '../stores/store';

import BaseFormGroup from './BaseComponents/BaseFormGroup.vue';
import BaseButton from './BaseComponents/BaseButton.vue';

const mainStore = useMainStore();

const loginButtonClicked = () => {
    mainStore.$patch({ appNaviagtionStep: 2 })
};
</script>