<script setup lang="ts">
  import Button from "./../widgets/Button.vue";
  import AddItem from "./../widgets/AddItem.vue";
  import { useStore } from "vuex";
  import { computed} from 'vue';

  const props = defineProps({
    cardTitle: {
      type: String,
      required: false,
    },
    cardImagePath: {
      type: String,
      required: false
    },
    cardPrice:{
      type: String,
      required: false
    },
    cardItemCounter: {
      type: String,
      required: false
    },
    cardID: {
      type: Number,
      required: false
    },
  });

  const store = useStore();
  const itemInCard = computed (()=> store.state.data[props.cardID] > 0 ? true : false);

  const addItem = () => {
    store.state.data[props.cardID]++;
  }

</script>

<template>
  <div data-test-id="card" class="card-item">
    <h2 class="card-item_title"> {{ cardTitle }} </h2>
    <img :src=cardImagePath :alt=cardTitle class="card-item_image">
    <div>
      <div class="card-item_price"> {{ props.cardPrice }}  €</div>
      <Button v-if="!itemInCard" button-type="S" button-title="Buy" :item-ID=cardID   @button-action="addItem" />
      <AddItem v-if="itemInCard" :item-ID=cardID />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-item {
  border: 1px solid grey;
  border-radius: 6px;
  width: 120px;
  padding: 8px;
  @media screen and (min-width: 600px ) {
    width: 180px;
  }
  @media screen and (min-width: 1200px ) {
    width: 200px;
  }
}
</style>
