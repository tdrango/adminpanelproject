<template>
    <div class="d-flex justify-between align-center w-95 mx-auto bg-tertiary p-10 border-radius-10">
        <div class="image-avatar pointer">
            <img 
                src="../../assets//images/avatar2.png" 
                alt="Avatar Image"
                class="image-fluid"
            >
        </div>
        <div class="pointer">
            <p class="text-bold">{{ username }}</p>
            <span>{{ pluginType }} account</span>
        </div>
        <div
            class="pointer"
            @click="mainStore.$patch({ appNaviagtionStep: 1 })"
        >
            <i class="fa-solid fa-power-off" />
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

import useMainStore from '../../stores/store';

const mainStore = useMainStore();

defineProps({
    username: {
        type: String,
        default: 'Username'
    },
    pluginType: {
        type: String,
        default: 'Free'
    }
})
</script>

<style scoped>
.image-avatar {
    height: 50px;
    width: 50px;
    line-height: 50px;
}

.image-fluid {
    height: auto;
    width: 100%;
    border-radius: 50%;
}
</style>