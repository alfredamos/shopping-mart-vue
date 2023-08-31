<script lang="ts" setup>
import UserDisplayOne from "@/components/UserDisplayOne.vue";
import { useFetch } from "@/compossables/useFetch";
import { useRoute, useRouter } from "vue-router";
import { userService } from "@/services/user.service";
import type UserDto from "@/models/auth/user.model";
import { UserApiResults } from '../../models/users/user-api-results.model';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();
const id = route.params.id as string;
const { resource } = useFetch<UserApiResults>(`/users/${id}`);

const user = computed(() => resource?.value?.user!)

const deleteUser = (value: boolean) => {
  if (value) {
    console.log("Right place : ", value);
    userService
      .deleteUser(id)
      .then((userApiRes) => router.push("/users"))
      .catch((error) => console.log(error));
  } else {
    console.log("wrong place : ", value);
    router.push("/users");
  }
};

const backToList = () => {
  router.push("/users");
};
</script>

<template>
  <user-display-one
    v-if="resource"
    :user="user"
    @onBackToList="backToList"
    @onDeleteHandler="deleteUser"
  />
</template>
