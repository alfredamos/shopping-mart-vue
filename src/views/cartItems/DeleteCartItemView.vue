<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import { computed } from "vue";
import CartItemDisplayOne from "../../components/cartItems/cartItemDisplayOne.vue";
import { cartItemService } from "@/services/cartItem.service";
import CartItemDto from "../../models/cartItems/cartItem.model";

const route = useRoute();
const id = route.params.id as string;

const router = useRouter();

const { resource } = useFetch<CartItemDto>(`/cart-items/${id}`);

const cartItem = computed(() => {
  return resource.value;
});

const deleteCartItem = (value: boolean) => {
  if (value) {
    cartItemService
      .deleteCartItem(id)
      .then((cartItemApiRes) => router.push("/cart-items"));
  } else {
    router.push("/cart-items");
  }
};

const backToList = () => {
  router.push("/cart-items");
};
</script>
<template>
  <cartItem-display-one
    v-if="cartItem"
    :cartItem="cartItem"
    @onBackToList="backToList"
    @onDeleteHandler="deleteCartItem"
  />
</template>
