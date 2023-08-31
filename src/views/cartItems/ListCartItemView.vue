<script lang="ts" setup>
import { useFetch } from "../../compossables/useFetch";
import CartItemsTable from "../../components/cartItems/CartItemsTable.vue";
import { useRouter } from "vue-router";
import CartItemDto from '../../models/cartItems/cartItem.model';

const router = useRouter();

const { resource } = useFetch<CartItemDto[]>("/cart-items");

const deleteCartItem = (id: string) => {
  router.push(`/cart-items/delete/${id}`);
};
const detailCartItem = (id: string) => {
  router.push(`/cart-items/detail/${id}`);
};

const editCartItem = (id: string) => {
  router.push(`/cart-items/edit/${id}`);
};


</script>

<template>
  <div class="container" v-if="resource">
    <div class="row">
      <div class="col-sm-6 mt-5">
        <cartItems-table
          :cartItems="resource"          
          @on-delete-cartItem="deleteCartItem"
          @on-detail-cartItem="detailCartItem"
          @on-edit-cartItem="editCartItem"          
        />
      </div>
      <div class="col-sm-6">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>
