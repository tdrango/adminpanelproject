<template>
    <div
        :class="containerClasses" 
        class="w-50 mx-auto my-15"
    >
        <button 
            class="w-100 p-5" 
            :class="buttonClasses"
            @click="handleButtonClick"
        >
            {{ buttonText }}
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['button-clicked']);

defineProps({
    buttonText: {
        type: String,
        default: 'Button Text'  
    },
    buttonClasses: {
        type: String,
        default: ''
    },
    containerClasses: {
        type: String,
        default: ''
    }
});

const handleButtonClick = (payload) => {
    emit('button-clicked', payload);
};
</script>