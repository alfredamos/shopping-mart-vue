<script lang="ts" setup>
import CategoryDto from '../../models/categories/category.model';


interface Props {
  categories: CategoryDto[];
}

const props = defineProps<Props>();

const emit = defineEmits(["onEditCategory", "onDeleteCategory", "onDetailCategory", "onMakeAdminCategory"]);

const deleteCategory = (id: string) => {
  emit("onDeleteCategory", id);
};
const detailCategory = (id: string) => {
  emit("onDetailCategory", id);
};

const editCategory = (id: string) => {
  emit("onEditCategory", id);
};

</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-white p-3">
      <h4 class="text-center">Category List</h4>
    </div>
    <div class="card-body">
      <table class="table table-responsive table-striped table-bordered">
        <thead class="bg-primary">
          <tr>
            <th class="fw-bold">Name</th>
            <th class="fw-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in props.categories">
            <td>{{ category.name }}</td>
            <td>
              <button
              type="button"
                @click="detailCategory(category.id!)"
                class="btn btn-outline-primary m-1 btn-sm fw-bold"
              >
                View
              </button>
              <button
              type="button"
                @click="deleteCategory(category.id!)"
                class="btn btn-outline-danger m-1 btn-sm fw-bold"
              >
                Delete
              </button>
              <button
              type="button"
                @click="editCategory(category.id!)"
                class="btn btn-outline-secondary m-1 btn-sm fw-bold"
              >
                Edit
              </button>             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="card-footer d-flex flex-column align-items-center justify-content-center p-3"
    >
      <RouterLink
        to="/categories/create"
        class="btn btn-outline-secondary btn-lg form-control fw-bold"
      >
        Create Category
      </RouterLink>
      <RouterLink
        to="/admin-panel"
        class="btn btn-outline-primary btn-lg form-control fw-bold"
      >
        Back To Admin Panel
      </RouterLink>
    </div>
  </div>
</template>
