<template>
    <div class="the-sidebar-container d-flex justify-between flex-column bg-primary text-white p-20">
        <div class="the-sidebar">
            <div class="d-flex justify-between mb-50">
                <p>My Company</p>
                <span class="cursor-pointer">
                    <i class="fa-regular fa-bell" />
                </span>
            </div>
        
            <base-sidebar-button 
                v-for="{ name, iconClasses} in sideBarButtons()"
                :key="name"
                :button-name="name"
                :icon-classes="iconClasses"
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

import BaseSidebarButton from './BaseComponents/BaseSidebarButton.vue';
import AccountInfoButton from './PersonalAccount/AccountInfoButton.vue';
</script>