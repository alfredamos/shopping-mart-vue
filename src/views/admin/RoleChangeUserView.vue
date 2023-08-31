<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import { UserApiResults } from "../../models/users/user-api-results.model";
import { computed } from "vue";
import { authService } from "../../services/auth.service";
import type { ChangeUserRoleDto } from "@/models/auth/change-user-role.model";
import ChangeUserRoleForm from "@/forms/auth/ChangeUserRoleForm.vue";

const route = useRoute();
const id = route.params.id;
const router = useRouter();

const { resource } = useFetch<UserApiResults>(`/users/${id}`);

const user = computed(() => {
  return {
    name: resource.value?.user?.name!,
    email: resource.value?.user?.email!,
    phone: resource.value?.user?.phone!,
    gender: resource.value?.user?.gender!,
    role: resource.value?.user?.role!,
  };
});

const userEditSubmit = (changeUserDto: ChangeUserRoleDto) => {
  console.log("in make-admin, user : ", changeUserDto);
  authService
    .changeUserRole(changeUserDto)
    .then((userApiRes) => {
      router.push("/users");
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push("/users");
};
</script>

<template>
  <ChangeUserRoleForm
    v-if="resource?.user"
    :initial-value="user!"
    @on-back-to-list="backToList"
    @on-submit-user="userEditSubmit"
    
  />
</template>
