<script lang="ts" setup>
import CategoryForm from "@/forms/categories/CategoryForm.vue";
import { ref, computed } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { useFetch } from "../../compossables/useFetch";
import { categoryService } from '../../services/category.service';
import type CategoryDto from '../../models/categories/category.model';

const router = useRouter();
const route = useRoute()
const id = route.params.id;

//----> Retrieve the categories
const { resource } = useFetch<CategoryDto>(`/categories/${id}`);

const category = computed(() => resource?.value!)

const submitCategory = (categoryDto: CategoryDto) => {
  console.log("Edited Category, category : ", categoryDto)
  categoryService.editCategory(categoryDto)
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
