<template>
    <div class="w-50 mx-auto p-20">
        <div class="text-center mb-20">
            Welcome to your admin panel! 
        </div>

        <base-form-group 
            label-text="Username"
            type="username"
            form-key="inputUsername"
            @input-change="handleInputValue"
        />
        
        <base-form-group 
            label-text="Password"
            type="password"
            form-key="inputPassword"
            @input-change="handleInputValue"
        />

        <base-button 
            button-text="Login"
            @button-clicked="loginButtonClicked"
        />

        <div class="text-center">You don't have an account? Sign up
            <span @click="handleRedirectToSignUp" class="pointer link"> here!</span>
        </div>
    <div>

    </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import useMainStore from '../stores/store';

import BaseFormGroup from './BaseComponents/BaseFormGroup.vue';
import BaseButton from './BaseComponents/BaseButton.vue';

const mainStore = useMainStore();

onMounted(() => {
    mainStore.$patch({ 
        currentUsername: '',
        pluginType: ''
    })
});

const loginButtonClicked = () => {
    if (mainStore.currentUsername === '') {
        return;
    } 
    if (mainStore.currentUsername === 'Tomislav') {
        mainStore.$patch({ pluginType: 'Pro' });
    } else {
        mainStore.$patch({ pluginType: 'Free' });

    }
    mainStore.$patch({ appNavigtionStep: 'home' })
};

const handleInputValue = (payload) => {
    if (payload.id === 'inputUsername') {
        mainStore.$patch({ currentUsername: payload.value})
    };
};

const handleRedirectToSignUp = () => {
    mainStore.$patch({ appNavigationStep: 'signUp' });
};

</script>