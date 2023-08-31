<script lang="ts" setup>
import ProductForm from "@/forms/products/ProductForm.vue";
import ProductDto from "../../models/products/product.model";
import { ref, computed } from "vue";
import { useRouter } from 'vue-router';
import { useFetch } from "../../compossables/useFetch";
import { productService } from '../../services/product.service';
import CategoryDto from '../../models/categories/category.model';

const router = useRouter();

const product = ref<ProductDto>({
name: "",
brand: "",
price: 0,
categoryId: "",
id: "",
quantity: 0
});

//----> Retrieve the categories
const { resource } = useFetch<CategoryDto[]>("/categories");

const categories = computed(() => {
  console.log("categories : ", resource?.value)
  return resource.value;
});

const submitProduct = (productDto: ProductDto) => {
  productService.createProduct(productDto)
    .then(productApiRes => {
      console.log("Api-response, resp : ", productApiRes)
      router.push("/list-product")
    })
    .catch(error => console.log(error))
};

const backToList = () => {
  router.push("/list-product");
};
</script>

<template>
  <ProductForm
    v-if="categories?.length > 0"
    :initial-value="product"
    :categories="categories"
    @on-back-to-list="backToList"
    @on-submit-product="submitProduct"
  />
</template>
