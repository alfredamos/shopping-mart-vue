<script lang="ts" setup>
import ProductForm from "@/forms/products/ProductForm.vue";
import ProductDto from "../../models/products/product.model";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import { productService } from "../../services/product.service";
import CategoryDto from "../../models/categories/category.model";

const router = useRouter();

const route = useRoute();
const id = route.params.id;

const { resource: productApiRes } = useFetch<ProductDto>(`/products/${id}`);

const product = computed(() => {
  return productApiRes?.value;
});

const { resource } = useFetch<CategoryDto[]>("/categories");

const categories = computed(() => {
  return resource?.value;
});

const submitProduct = (productDto: ProductDto) => {
  if (productDto.rating == null) productDto.rating = 0;
  productService
    .editProduct(productDto)
    .then((productApiRes) => {
      console.log("Api-response, resp : ", productApiRes);
      router.push("/list-product");
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push("/list-product");
};
</script>

<template>
  <ProductForm
    v-if="productApiRes"
    :initial-value="product"
    :categories="categories"
    @on-back-to-list="backToList"
    @on-submit-product="submitProduct"
  />
</template>
