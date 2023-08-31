<script lang="ts" setup>
import CategoryForm from "@/forms/categories/CategoryForm.vue";
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useFetch } from "../../compossables/useFetch";
import { categoryService } from '../../services/category.service';
import type CategoryDto from '../../models/categories/category.model';

const router = useRouter();

const category = ref<CategoryDto>({
name: "",
});

//----> Retrieve the categories
const { resource } = useFetch<CategoryDto[]>("/categories");

const submitCategory = (categoryDto: CategoryDto) => {
  console.log("New Category, category : ", categoryDto)
  categoryService.createCategory(categoryDto)
    .then(categoryApiRes => {
      console.log("Api-response, resp : ", categoryApiRes)
      router.push("/categories")
    })
    .catch(error => console.log(error))
};

const backToList = () => {
  router.push("/categories");
};
</script>

<template>
  <CategoryForm
    v-if="resource"
    :initial-value="category"    
    @on-back-to-list="backToList"
    @on-submit-category="submitCategory"
  />
</template>
