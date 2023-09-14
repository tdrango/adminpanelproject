import { defineStore } from 'pinia';
// import actions from './actions';

const useMainStore = defineStore('mainStore', {
  state: () => ({
    appNaviagtionStep: 2,
    currentPage: 'dashboard'
  })
});

export default useMainStore;