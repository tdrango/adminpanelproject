<template>
    <div class="w-50 mx-auto my-15">
        <button 
        @click="handleButtonClick"
        class="w-100 p-5" 
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
    }
});

const handleButtonClick = () => {
    emit('button-clicked');
};
</script>