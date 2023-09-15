<template>
    <div class="w-75 mx-auto pt-50"> 
        <dashboard-basic-details />
        <div class="dashboard-cards-grid-container mt-15">
            <dashboard-cards
                v-for="card in dashboardCardsDetails()"
                :key="card.id"
                :primary-text="card.primaryText"
                :primary-span="card.primarySpan"
                :icon-classes="card.iconClasses"
                :secondary-span="card.secondarySpan"
            />
        </div>
        <div class="dashboard-graphs-grid-container mt-15">
            <dashboard-graphs 
                v-for="i in 2"
                :key="i"
            />
            
            <dashboard-website-user 
                v-for="i in 2"
                :key="i"
            />
        </div>
    </div>
</template>

<script setup>
import { dashboardCardsDetails } from '../../../helpers/helperFunctions';

import DashboardBasicDetails from './DashboardBasicDetails.vue';
import DashboardCards from './DashboardCards.vue';
import DashboardGraphs from './DashboardGraphs.vue';
import DashboardWebsiteUser from './DashboardWebsiteUser.vue';
</script>