import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/auth/LoginView.vue";
import LogoutView from "../views/auth/LogoutView.vue";
import ListProductView from "../views/products/ListProductView.vue";
import ListUserView from "../views/users/ListUserView.vue";
import ChangePasswordView from "../views/auth/ChangePasswordView.vue";
import EditProfileView from "../views/auth/EditProfileView.vue";
import SignupView from "../views/auth/SignupView.vue";
import NotAllowedView from "../views/auth/NotAllowedView.vue";
import MustLoginView from "../views/auth/MustLoginView.vue";
import CreateUserView from "../views/users/CreateUserView.vue";
import DeleteUserView from "../views/users/DeleteUserView.vue";
import DetailUserView from "../views/users/DetailUserView.vue";
import EditUserView from "../views/users/EditUserView.vue";
import HomeView from "../views/auth/HomeView.vue";
import CreateProductView from "@/views/products/CreateProductView.vue";
import DeleteProductView from "@/views/products/DeleteProductView.vue";
import DetailProductView from "@/views/products/DetailProductView.vue";
import EditProductView from "@/views/products/EditProductView.vue";

import { adminRoute } from "@/models/util/admin-route";
import { protectedRoute } from "@/models/util/protected-route";

import SomethingWrongView from "@/views/auth/SomethingWrongView.vue";
import AdminPanelView from "@/views/admin/AdminPanelView.vue";

import ProductListView from "@/views/products/ProductListView.vue";
import ProductDetailView from "@/views/products/ProductDetailView.vue";
import RoleChangeUserView from "@/views/admin/RoleChangeUserView.vue";

import CreateCategoryView from "@/views/categories/CreateCategoryView.vue";
import DeleteCategoryView from "@/views/categories/DeleteCategoryView.vue";
import DetailCategoryView from "@/views/categories/DetailCategoryView.vue";
import EditCategoryView from "@/views/categories/EditCategoryView.vue";
import ListCategoryView from "@/views/categories/ListCategoryView.vue";

import CreateCartItemView from "@/views/cartItems/CreateCartItemView.vue";
import DeleteCartItemView from "@/views/cartItems/DeleteCartItemView.vue";
import DetailCartItemView from "@/views/cartItems/DetailCartItemView.vue";
import EditCartItemView from "@/views/cartItems/EditCartItemView.vue";
import ListCartItemView from "@/views/cartItems/ListCartItemView.vue";

import CreateOrderView from "@/views/orders/CreateOrderView.vue";
import DeleteOrderView from "@/views/orders/DeleteOrderView.vue";
import DetailOrderView from "@/views/orders/DetailOrderView.vue";
import EditOrderView from "@/views/orders/EditOrderView.vue";
import ListOrderView from "@/views/orders/ListOrderView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/change-password",
      name: "change-password",
      beforeEnter: protectedRoute,
      component: ChangePasswordView,
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      beforeEnter: protectedRoute,
      component: EditProfileView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
    },
    {
      path: "/must-login",
      name: "must-login",
      component: MustLoginView,
    },
    {
      path: "/not-allowed",
      name: "not-allowed",
      component: NotAllowedView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/something-wrong",
      name: "something-wrong",
      component: SomethingWrongView,
    },

    {
      path: "/admin-panel",
      name: "admin-panel",
      beforeEnter: adminRoute,
      component: AdminPanelView,
    },

    {
      path: "/categories",
      name: "list-category",
      beforeEnter: adminRoute,
      component: ListCategoryView,
      children: [
        {
          path: "create",
          name: "create-category",
          beforeEnter: adminRoute,
          component: CreateCategoryView,
        },
        {
          path: "delete/:id",
          name: "delete-category",
          beforeEnter: adminRoute,
          component: DeleteCategoryView,
        },
        {
          path: "detail/:id",
          name: "detail-category",
          beforeEnter: adminRoute,
          component: DetailCategoryView,
        },
        {
          path: "edit/:id",
          name: "edit-category",
          beforeEnter: adminRoute,
          component: EditCategoryView,
        },
      ],
    },

    {
      path: "/cart-items",
      name: "list-cart-item",
      beforeEnter: adminRoute,
      component: ListCartItemView,
      children: [
        {
          path: "create",
          name: "create-cart-item",
          beforeEnter: adminRoute,
          component: CreateCartItemView,
        },
        {
          path: "delete/:id",
          name: "delete-cart-item",
          beforeEnter: adminRoute,
          component: DeleteCartItemView,
        },
        {
          path: "detail/:id",
          name: "detail-cart-item",
          beforeEnter: adminRoute,
          component: DetailCartItemView,
        },
        {
          path: "edit/:id",
          name: "edit-cart-item",
          beforeEnter: adminRoute,
          component: EditCartItemView,
        },
      ],
    },

    {
      path: "/orders",
      name: "list-order",
      beforeEnter: adminRoute,
      component: ListOrderView,
      children: [
        {
          path: "create",
          name: "create-order",
          beforeEnter: adminRoute,
          component: CreateOrderView,
        },
        {
          path: "delete/:id",
          name: "delete-order",
          beforeEnter: adminRoute,
          component: DeleteOrderView,
        },
        {
          path: "detail/:id",
          name: "detail-order",
          beforeEnter: adminRoute,
          component: DetailOrderView,
        },
        {
          path: "edit/:id",
          name: "edit-order",
          beforeEnter: adminRoute,
          component: EditOrderView,
        },
      ],
    },

    {
      path: "/products",
      name: "products",
      beforeEnter: protectedRoute,
      component: ListProductView,
    },
    {
      path: "/products/detail/:id",
      name: "detail-product",
      beforeEnter: protectedRoute,
      component: DetailProductView,
    },

    {
      path: "/users",
      name: "users",
      beforeEnter: adminRoute,
      component: ListUserView,
      children: [
        {
          path: "create",
          name: "create-user",
          beforeEnter: adminRoute,
          component: CreateUserView,
        },
        {
          path: "role-change/:id",
          name: "role-change-user",
          beforeEnter: adminRoute,
          component: RoleChangeUserView,
        },
        {
          path: "delete/:id",
          name: "delete-user",
          beforeEnter: adminRoute,
          component: DeleteUserView,
        },
        {
          path: "detail/:id",
          name: "detail-user",
          beforeEnter: protectedRoute,
          component: DetailUserView,
        },
        {
          path: "edit/:id",
          name: "edit-user",
          beforeEnter: adminRoute,
          component: EditUserView,
        },
      ],
    },

    {
      path: "/list-product",
      name: "list-product",
      beforeEnter: adminRoute,
      component: ProductListView,
      children: [
        {
          path: "create",
          name: "product-create",
          beforeEnter: adminRoute,
          component: CreateProductView,
        },
        {
          path: "delete/:id",
          name: "product-delete",
          beforeEnter: adminRoute,
          component: DeleteProductView,
        },
        {
          path: "detail/:id",
          name: "product-detail",
          beforeEnter: protectedRoute,
          component: ProductDetailView,
        },
        {
          path: "edit/:id",
          name: "product-edit",
          beforeEnter: adminRoute,
          component: EditProductView,
        },
      ],
    },
  ],
});

export default router;
