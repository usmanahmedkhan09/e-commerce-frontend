<template>
    <div class="input__wrapper">
        <!-- <label :for="name">{{ label }}</label> -->
        <input :type="type"
               :id="name"
               :name="name"
               :value="inputValue"
               :placeholder="placeholder"
               @input="handleChange"
               @blur="handleBlur"
               class="input">

        {{ inputValue }}
        <span v-show="errorMessage || meta.valid">{{ errorMessage }}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { useField } from 'vee-validate';
export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
    setup(props)
    {
        const name = toRef(props, 'name');

        const {
            value: inputValue,
            errorMessage,
            handleBlur,
            handleChange,
            meta,
        } = useField(name, undefined, {
            initialValue: props.value,
        });

        return {
            inputValue,
            meta,
            errorMessage,
            handleChange,
            handleBlur
        }
    },
})
</script>
