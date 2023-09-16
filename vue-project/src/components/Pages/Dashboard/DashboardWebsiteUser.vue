<template>
    <div class="bg-white border-radius-15">
        <div class="d-flex justify-between p-20">
            <div class="d-flex">
                <i :class="iconClasses" class="mr-10 font-s18"/>
                <p class="text-bold">{{ capitalizeFirstLetter(title) }}</p>
            </div>
            <div class="font-s14 text-gray pointer">
                See all {{ title }}
            </div>
        </div>

        <dashboard-website-user-row 
            v-for="{ firstCell, secondCell } in arrayDetails"
            :key="firstCell"
            :usedIn="title"
            :first-cell="firstCell"
            :second-cell="secondCell"
        />
    </div>
</template> 

<script setup>
import { computed } from 'vue';
import { capitalizeFirstLetter } from '../../../helpers/helperFunctions';

import DashboardWebsiteUserRow from './DashboardWebsiteUserRow.vue';

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    arrayDetails: {
        type: Array,
        default: () => []
    }
});

const iconClasses = computed(() => {
    return props.title === 'websites' ? 'fa-solid fa-globe' : 'fa-solid fa-users'
});

console.log(props.arrayDetails);
</script>