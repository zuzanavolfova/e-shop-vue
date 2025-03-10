<script setup lang="ts">
    import {ref, defineEmits} from 'vue';

    const props = defineProps({
        buttonType: {
            type: String,
            required: false,
            default: "M",
            validator: (v: string) => v === 'S' || v === 'M' || v === 'L',
        },
        buttonTitle: {
            type: String,
            required: true,
        },
        itemID: {
            type: Number,
            required: true,
        },
        buttonAction: {
        type: String,
        required: true,
        }
    });  
    const emit = defineEmits(["button-action"]);
    const buttonWidth = ref('var(--button-width-' + props.buttonType + ')')

</script>

<template>
    <div data-test-id="button" class="button" @click="emit('button-action', props.itemID)">{{ buttonTitle }}</div>
</template>

<style scoped>
    .button {
        color: white;
        font-weight: bold;
        padding: var(--button-padding);
        border-radius: var(--button-border-radius);
        text-align: center;
        background-color: var(--button-background-color);
        width: v-bind(buttonWidth);
    }
    .button:hover {
        background-color: rgb(0, 195, 255);
        color: black;
        cursor: pointer;
    }
</style>