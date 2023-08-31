<script lang="ts" setup>
import { useFetch } from "../../compossables/useFetch";
import UsersTable from "../../components/UsersTable.vue";
import { useRouter } from "vue-router";
import UserDto from '../../models/auth/user.model';
import { UserApiResults } from '../../models/users/user-api-results.model';
import { computed } from 'vue';

const router = useRouter();

const { resource } = useFetch<UserApiResults>("/users");

const users = computed(() => resource?.value?.users!)

const deleteUser = (id: string) => {
  router.push(`/users/delete/${id}`);
};
const detailUser = (id: string) => {
  router.push(`/users/detail/${id}`);
};

const editUser = (id: string) => {
  router.push(`/users/edit/${id}`);
};
const changeUserRole = (id: string) => {
  router.push(`/users/role-change/${id}`);
};

</script>

<template>
  <div class="container" v-if="resource">
    <div class="row">
      <div class="col-sm-6 mt-5">
        <users-table
          :users="users"          
          @on-delete-user="deleteUser"
          @on-detail-user="detailUser"
          @on-edit-user="editUser"
          @on-role-change-user="changeUserRole"
        />
      </div>
      <div class="col-sm-6">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>
