<script lang="ts" setup>
import { useFetch } from "../../compossables/useFetch";
import { useRouter } from "vue-router";
import ProductsTable from "@/components/products/ProductsTable.vue";
import type ProductDto from "@/models/products/product.model";

const router = useRouter();

const { resource } = useFetch<ProductDto[]>("/products");

const deleteProduct = (id: string) => {
  router.push(`/list-product/delete/${id}`);
};
const detailProduct = (id: string) => {
  router.push(`/list-product/detail/${id}`);
};

const editProduct = (id: string) => {
  router.push(`/list-product/edit/${id}`);
};




</script>

<template>
  <div class="container" v-if="resource">
    <div class="row">
      <div class="col-sm-6 mt-5">
        <products-table
          :products="resource"
          @on-delete-product="deleteProduct"
          @on-detail-product="detailProduct"
          @on-edit-product="editProduct"
        />
      </div>
      <div class="col-sm-6">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>
