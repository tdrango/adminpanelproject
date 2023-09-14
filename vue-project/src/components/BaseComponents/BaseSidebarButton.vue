<template>
    <div class="d-flex justify-start pointer mb-20">
        <i :class="iconClasses" class="mr-10" />
        <div>
            {{ buttonName }}
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

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
</script>
