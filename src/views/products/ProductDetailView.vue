<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import { computed } from "vue";
import ProductDisplayOne from "../../components/products/productDisplayOne.vue";
import { productService } from "@/services/product.service";
import ProductDto from "../../models/products/product.model";

const route = useRoute();
const id = route.params.id as string;

const router = useRouter();

const { resource } = useFetch<ProductDto>(`/products/${id}`);

const product = computed(() => {
  return resource.value;
});

const deleteProduct = (value: boolean) => {
  if (value) {
    productService
      .deleteProduct(id)
      .then((productApiRes) => router.push("/products"));
  } else {
    router.push("/list-product");
  }
};

const backToList = () => {
  router.push("/list-product");
};
</script>
<template>
  <product-display-one
    v-if="product"
    :product="product"
    @onBackToList="backToList"
    @onDeleteProduct="deleteProduct"
  />
</template>
