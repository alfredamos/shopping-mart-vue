<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { useAuthUser } from "../compossables/useAuthUser";
import { computed } from "vue";
import { Role } from "@/models/auth/user-type.model";
import { useObservable } from "../compossables/useObservable";
import { authService, userSubInitial } from "../services/auth.service";

const { authUser } = useAuthUser();
//const authUser = useObservable(authService.authUser$, userSubInitial);
const isAdmin = computed(() => authUser.value?.role === Role.Admin);
const isLoggedIn = computed(() => authUser.value?.isLoggedIn);
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink type="button" class="navbar-brand mx-xxl-5" to="/products"
        >Home</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item" v-if="isAdmin">
            <RouterLink type="button" class="nav-link mx-xxl-5" to="/users"
              >Users</RouterLink
            >
          </li> -->
        </ul>
        <ul class="d-flex navbar-nav">
          <li v-if="isLoggedIn" class="nav-item dropdown mx-5">
            <RouterLink
              type="button"
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Settings
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <RouterLink
                  type="button"
                  class="dropdown-item"
                  to="/change-password"
                  >Change Password</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  type="button"
                  class="dropdown-item"
                  to="/edit-profile"
                  >Edit Profile</RouterLink
                >
              </li>
            </ul>
          </li>
          <li v-if="!isLoggedIn" class="nav-item mx-5">
            <RouterLink type="button" class="nav-link" to="/login"
              >login</RouterLink
            >
          </li>
          <li class="nav-item mx-5" v-if="isAdmin">
            <RouterLink type="button" class="nav-link" to="/admin-panel"
              >Admin</RouterLink
            >
          </li>
          <li v-if="isLoggedIn" class="nav-item mx-5">
            <RouterLink
              type="button"
              class="nav-link align-self-auto"
              to="/logout"
              >logout</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
