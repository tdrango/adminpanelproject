<template>
    <div class="d-flex justify-between align-center p-10 border-top">
        <div class="font-s14 d-flex">
            <p class="mr-20">{{ firstCell }}</p>
            <div class="d-flex">
                <div class="mr-10">
                    <i :class="rowIconClasses"/>
                </div>
                <p>{{ secondCell }}</p>
            </div>
        </div>
        <div>
            <i class="fa-solid fa-ellipsis font-s24" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    firstCell:{
        type: String,
        default: ''
    },
    secondCell: {
        type: String,
        default: ''
    },
    usedIn: {
        type: String,
        default: ''
    }
});

const rowIconClasses = computed(() => {
    return props.usedIn === 'websites' ? 'fa-solid fa-server' : 'fa-solid fa-at'
});
</script>