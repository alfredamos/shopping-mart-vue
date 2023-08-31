<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import { computed } from "vue";
import CategoryDisplayOne from "../../components/categories/categoryDisplayOne.vue";
import { categoryService } from "@/services/category.service";
import CategoryDto from "../../models/categories/category.model";

const route = useRoute();
const id = route.params.id as string;

const router = useRouter();

const { resource } = useFetch<CategoryDto>(`/categories/${id}`);

const category = computed(() => {
  return resource.value;
});

const deleteCategory = (value: boolean) => {
  if (value) {
    categoryService
      .deleteCategory(id)
      .then((categoryApiRes) => router.push("/categorys"));
  } else {
    router.push("/categories");
  }
};

const backToList = () => {
  router.push("/categories");
};
</script>
<template>
  <category-display-one
    v-if="category"
    :category="category"
    @onBackToList="backToList"
    @onDeleteHandler="deleteCategory"
  />
</template>
