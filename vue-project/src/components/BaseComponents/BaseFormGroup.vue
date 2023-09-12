<template>
    <div 
        class="w-50 mx-auto text-left mt-15 mb-20"
        :class="{ 'has-error': hasError}"
    >
        <label for=formKey class="w-100">{{ labelText }}</label>
        <input 
            type=groupType 
            name=formKey 
            id=formKey 
            class="w-100 p-5 mt-5"
            @input="updateInputValue"
        >
        <span
            v-if="hasError"
            class="text-danger"
        >
            {{ errorMsg }}
        </span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

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

// const updateInputValue = (event) => {
//     emit('update-input-value', {
//         value: event.target.value,
//         id: props.formKey
//     })
// };
</script>