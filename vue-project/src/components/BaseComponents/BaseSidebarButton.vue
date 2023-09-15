<template>
    <div 
        class="d-flex justify-start pointer mb-20"
        @click="handleSidebarButtonClicked"
    >
        <i :class="iconClasses" class="mr-10" />
        <div>
            {{ buttonName }}
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['sidebar-button-clicked'])

defineProps({
    buttonName: {
        type: String,
        required: true
    },
    iconClasses: {
        type: String,
        required: true
    }
})

const handleSidebarButtonClicked = () => {
    emit('sidebar-button-clicked');
};
</script>
