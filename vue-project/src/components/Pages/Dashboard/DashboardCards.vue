<template>
    <div class="bg-white border-radius-15 p-15 d-flex justify-between align-center">
        <h3>
            <i 
                :class="iconClasses"
                class="font-s28"    
            />
        </h3>
        <div>
            <span 
                v-if="secondarySpan !== ''"
                class="font-s12 text-gray"
            >
                {{ secondarySpan }}
            </span>
            <p class="text-center text-bold font-s18 my-5">{{ primaryText }}</p>
            <span class="font-s14 text-gray">{{ primarySpan }}</span>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    primaryText: {
        type: String,   
        required: true
    },
    iconClasses: {
        type: String,
        required: true
    },
    primarySpan: {
        type: String,
        default: ''
    },
    secondarySpan: {
        type: String,
        default: ''
    }
})
</script>