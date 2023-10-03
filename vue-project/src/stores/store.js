import { defineStore } from 'pinia';
// import actions from './actions';

const useMainStore = defineStore('mainStore', {
  state: () => ({
    pluginType: 'Free',
    currentUsername: '',
    appNavigationStep: 'login',
    currentPage: 'Dashboard',
    currentUsers: [],
    isAddNewModalOpen: false,
    modalCurrentlyAdding: ''
  })
});

export default useMainStore;