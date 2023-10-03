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
                key="websites"
                title="websites"
                :array-details="websiteDetails"

            />

            <dashboard-website-user 
                key="users"
                title="users"
                :array-details="userDetails"

            />
        </div>

        <add-new-modal v-if="mainStore.isAddNewModalOpen">
            <template #default>
                <div class="text-center m-10 font-s20">
                    {{`Add new ` + mainStore.modalCurrentlyAdding}}
                </div>
                <base-form-group
                    :label-text="`Enter new ` + mainStore.modalCurrentlyAdding"
                    type="text"
                    :form-key="mainStore.modalCurrentlyAdding"
                    @input-change="handleInputValue"
                />
                <base-form-group
                    :label-text="customFormGroupText"
                    type="text"
                    :form-key="mainStore.modalCurrentlyAdding"
                    @input-change="handleInputValue"
                />
            </template>
            <template #footer>
                <div class="border-top-colored-primary">
                    <div class="ml-auto w-50 d-flex mr-20">
                        <base-button 
                            button-text="Confirm" 
                            container-classes="mr-10" 
                            button-classes="bg-success text-white border-radius-5 no-border padding-5 pointer"
                            @click="handleAddNewConfirm"    
                        />
                        <base-button 
                            button-text="Cancel" 
                            button-classes="bg-danger text-white border-radius-5 no-border padding-5 pointer"
                            @click="mainStore.$patch({ isAddNewModalOpen: false });"    
                        />
                    </div>
                </div>
            </template>
        </add-new-modal>

    </div>
</template>

<script setup>
import { 
    dashboardCardsDetails, 
    websiteDetails, 
    userDetails } 
from '../../../helpers/consts.js';

import DashboardBasicDetails from './DashboardBasicDetails.vue';
import DashboardCards from './DashboardCards.vue';
import DashboardGraphs from './DashboardGraphs.vue';
import DashboardWebsiteUser from './DashboardWebsiteUser.vue';
import AddNewModal from '../../AddNewModal.vue';

import useMainStore from '../../../stores/store';
import BaseFormGroup from '../../BaseComponents/BaseFormGroup.vue';
import BaseButton from '../../BaseComponents/BaseButton.vue';
import { computed } from 'vue';

const mainStore = useMainStore();

const handleInputValue = () => {
    console.log('here');
};

const handleAddNewConfirm = () => {
    console.log('here');
}

const customFormGroupText = computed(() => {
        if (mainStore.modalCurrentlyAdding === 'Website') {
            return 'Enter server'
        } 
        return 'Enter username'
});
</script>