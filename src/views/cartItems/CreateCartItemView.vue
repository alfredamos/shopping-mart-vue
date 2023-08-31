<script lang="ts" setup>
import CartItemDto from "@/models/cartItems/cartItem.model";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { cartItemService } from "../../services/cartItem.service";
import { useFetch } from "../../compossables/useFetch";
import ProductDto from "../../models/products/product.model";
import CartItemForm from "@/forms/cartItems/CartItemForm.vue";

const router = useRouter();

const cartItem = ref<CartItemDto>({
  productId: "",
  price: 0,
  quantity: 0,
});

const { resource } = useFetch<ProductDto[]>("/products");

const products = computed(() => resource?.value);

const submitCartItem = (cartItemDto: CartItemDto) => {
  console.log("New CartItem, cartItem : ", cartItemDto);
  cartItemService
    .createCartItem(cartItemDto)
    .then((cartItemApiRes) => {
      console.log("Api-response, resp : ", cartItemApiRes);
      router.push("/cart-items");
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push("/cart-items");
};
</script>

<template>
  <CartItemForm
    v-if="resource?.length > 0"
    :initial-value="cartItem"
    :products="products"
    @on-back-to-list="backToList"
    @on-submit-cartItem="submitCartItem"
  />
</template>
