<template>
    <the-sidebar />
    <div class="home-page bg-secondary">
        <component :is="currentPageComponent" />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import useMainStore from '../stores/store';
import TheSidebar from './TheSidebar.vue'

import TheDashboard from '../components/Pages/Dashboard/TheDashboard.vue'
import TheWebsites from '../components/Pages/Websites/TheWebsites.vue'
import TheUsers from '../components/Pages/users/TheUsers.vue'
import TheHelp from '../components/Pages/Help/TheHelp.vue'
import TheToolbox from '../components/Pages/Toolbox/TheToolbox.vue'
import TheSettings from '../components/Pages/Settings/TheSettings.vue'

const mainStore = useMainStore();

const currentPageComponent = computed(() => {
    switch(mainStore.currentPage) {
        case 'Dashboard':
            return TheDashboard;
            
        case 'Websites':
            return TheWebsites;

        case 'Users':
            return TheUsers;

        case 'Toolbox':
            return TheToolbox;

        case 'Settings':
            return TheSettings;
        
        case 'Help':
            return TheHelp;

        default:
            return '';
            
    }
});
</script>

<style scoped>
.home-page {
    width: 80%;
    height: 100%;
    margin-left: auto;
}
</style>