<template>
    <div class="w-50 mx-auto">
        <div class="text-center mb-20">
            Welcome to the admin panel of {{ companyName}}! 
        </div>
        <base-form-group 
            label-text="Email"
            type="email"
            form-key="inputEmail"
            :value="value"
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
import { defineProps } from 'vue';

import BaseFormGroup from './BaseComponents/BaseFormGroup.vue';
import BaseButton from './BaseComponents/BaseButton.vue';

defineProps({
    companyName: {
        type: String,
        required: true
    }
});

const loginButtonClicked = () => {
    
};
</script>