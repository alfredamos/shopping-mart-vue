<script lang="ts" setup>
import { useFetch } from "../../compossables/useFetch";
import CategoriesTable from "../../components/categories/CategoriesTable.vue";
import { useRouter } from "vue-router";
import CategoryDto from '../../models/categories/category.model';

const router = useRouter();

const { resource } = useFetch<CategoryDto[]>("/categories");

const deleteCategory = (id: string) => {
  router.push(`/categories/delete/${id}`);
};
const detailCategory = (id: string) => {
  router.push(`/categories/detail/${id}`);
};

const editCategory = (id: string) => {
  router.push(`/categories/edit/${id}`);
};


</script>

<template>
  <div class="container" v-if="resource">
    <div class="row">
      <div class="col-sm-6 mt-5">
        <categories-table
          :categories="resource"          
          @on-delete-category="deleteCategory"
          @on-detail-category="detailCategory"
          @on-edit-category="editCategory"          
        />
      </div>
      <div class="col-sm-6">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>
