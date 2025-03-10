<script setup lang="ts">
    import { computed} from 'vue';
    import { useStore } from "vuex"; 

    const props = defineProps({
        itemID: {
            type: Number,
            required: true,
        }
    });  
    const store = useStore();
    const itemCounter = computed(() => store.state.data[props.itemID]);
    const addOneItem = ()=>{
        store.state.data[props.itemID] ++
    }
    const removeOneItem = ()=>{
        if(store.state.data[props.itemID] > 0){
            store.state.data[props.itemID] --;
        }
    }
</script>

<template>
    <div data-test-id="add-item" class="add-item flex">
        <div class="add-item_button" @click="removeOneItem">-</div>
        <div class="add-item_counter"> {{ itemCounter }}</div>
        <div class="add-item_button"  @click="addOneItem">+</div>
    </div>
</template>

<style scoped>
.add-item_button { 
    color: white;
    font-weight: bold;
    padding: var(--button-padding);
    border-radius: var(--button-border-radius);
    text-align: center;
    background-color: var(--button-background-color);
    width: 35px
}
.add-item_button:hover { 
    background-color: rgb(0, 195, 255);
    color: black;
    cursor: pointer;
}
.add-item_counter {
    text-align: center;
    margin: auto auto;
}

</style>