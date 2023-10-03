<template>
    <form 
        class="w-50 mx-auto text-left mt-15 mb-20"
        :class="{ 'has-error': hasError}"
    >
        <label :for=formKey class="w-100 font-s16">{{ labelText }}</label>
        <input 
            :type=type 
            :name=formKey 
            :id=formKey 
            class="w-100 p-5 mt-5"
            @input="handleEmitPayload"
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
const emit = defineEmits(['input-change']);

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

const handleEmitPayload = (event) => {
    emit('input-change', {
        value: event.target.value,
        id: props.formKey
    })
};
</script>