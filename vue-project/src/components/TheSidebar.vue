<template>
    <div class="the-sidebar-container d-flex justify-between flex-column bg-primary text-white p-20">
        <div class="the-sidebar">
            <div class="d-flex justify-between mb-50 pointer">
                <p @click="mainStore.$patch({ currentPage: 'Dashboard' })">My Company</p>
                <span class="cursor-pointer">
                    <i class="fa-regular fa-bell" />
                </span>
            </div>
        
            <base-sidebar-button 
                v-for="{ name, iconClasses} in sideBarButtons()"
                :key="name"
                :button-name="name"
                :icon-classes="iconClasses"
                @sidebar-button-clicked="mainStore.$patch({ currentPage: name })"
            />
        </div>

        <account-info-button 
            username="Tomislav"
            plugin-type="Pro"
        />
    </div>
</template>

<script setup>
import { sideBarButtons } from '../helpers/helperFunctions.js';
import useMainStore from '../stores/store';

const mainStore = useMainStore();

import BaseSidebarButton from './BaseComponents/BaseSidebarButton.vue';
import AccountInfoButton from './PersonalAccount/AccountInfoButton.vue';
</script>