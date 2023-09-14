<template>
    <the-sidebar />
    <div class="home-page">
        <Dashboard v-if="mainStore.currentPage === 'dashboard'"/>
    </div>
</template>

<script setup>
import useMainStore from '../stores/store';
import TheSidebar from './theSidebar.vue'
import Dashboard from '../components/Pages/dashboard.vue'

const mainStore = useMainStore();
</script>

<style scoped>
.home-page {
    width: 80%;
    height: 100%;
    margin-left: auto;
}
</style>