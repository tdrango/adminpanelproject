<template>
    <form 
        class="w-50 mx-auto text-left mt-15 mb-20"
        :class="{ 'has-error': hasError}"
    >
        <label :for=formKey class="w-100">{{ labelText }}</label>
        <input 
            :type=type 
            :name=formKey 
            :id=formKey 
            class="w-100 p-5 mt-5"
            :minlength="inputMinLength"
        >
        <span
            v-if="hasError"
            class="text-danger"
        >
            {{ errorMsg }}
        </span>
    </form>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    labelText: {
        type: String,
        default: 'Label Text'
    },
    formKey: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'text'
    },
    hasError: {
        type: Boolean,
        default: false
    },
    errorMsg: {
        type: String,
        default: "There is an error in the input above."
    }

});

const inputMinLength = computed(() => {
    props.type === 'password' ? 8 : null;
});
</script>