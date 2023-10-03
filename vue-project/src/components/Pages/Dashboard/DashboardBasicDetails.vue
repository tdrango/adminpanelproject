<template>
    <div class="w-100 bg-white p-15 border-radius-15 d-flex justify-between align-center">
        <div class="text-bold"> 
            <h2 class="text-primary">Dashboard</h2>
            <span class="font-s14 text-gray">View the basic statistics and activity</span>
        </div>
        <div class="position-relative">
            <i class="fa-solid fa-circle-plus font-s28 text-lightblue pointer" @click.stop="showAddOptions = !showAddOptions"/>
            <div
                v-if="showAddOptions" 
                class="select-add-menu bg-primary text-white p-20 border-radius-15 position-absolute mt-5">
                <p class="mb-10 pointer" @click="mainStore.$patch({ isAddNewModalOpen: true, modalCurrentlyAdding: 'Website' })">Add new website</p>
                <p class="pointer" @click="mainStore.$patch({ isAddNewModalOpen: true, modalCurrentlyAdding: 'User' })">Add new user</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import useMainStore from '../../../stores/store';
const mainStore = useMainStore();

const showAddOptions = ref(false);

const handleClickOutside = () => {
    showAddOptions.value = false;
}

onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside);
});
</script>