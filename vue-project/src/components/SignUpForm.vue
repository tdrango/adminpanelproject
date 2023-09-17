<template>
    <div class="w-50 mx-auto p-20">
      <base-form-group 
          v-for="(details, index) in formGroupDetails"
          :key="index"
          :label-text="details.labelText"
          :type="details.type"
          :form-key="details.formKey"
          :has-error="details.hasError"
          :error-msg="details.errorMsg"
          @input-change="handleInputValue(details.formKey, $event)"
      />
  
      <base-button 
          button-text="Sign Up"
          @button-clicked="signUpButtonClicked"
      />
  
      <p class="text-center">Already have an account? Click <span class="pointer link" @click.once="mainStore.$patch({ appNavigtionStep: 'login' })">here</span> to log in!</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useMainStore from '../stores/store';
  
  import BaseFormGroup from './BaseComponents/BaseFormGroup.vue';
  import BaseButton from './BaseComponents/BaseButton.vue';
  
  import { formGroupDetails as formGroupDetailsConst } from '../helpers/consts';
  import { successToast, dangerToast } from '../composables/toastMessageComposable';
  
  const mainStore = useMainStore();
  
  const formGroupDetails = ref([...formGroupDetailsConst]);
  
  const signUpButtonClicked = () => {
    let allFieldsFilled = true;
  
    formGroupDetails.value.forEach(details => {
        // console.log(details.value);
      if (!details.value) {
        details.hasError = true;
        allFieldsFilled = false;
      }
    });
  
    if (!allFieldsFilled) {
        dangerToast('Error signing up!');
    } else {
        successToast('Successfully signed up!');
    }
  };
  
  const handleInputValue = (formKey, payload) => {
    const detailItem = formGroupDetails.value.find(detail => detail.formKey === formKey);
    if (detailItem) {
      detailItem.value = payload.value;
      detailItem.hasError = !payload.value;
    }
  };
  
  </script>
  