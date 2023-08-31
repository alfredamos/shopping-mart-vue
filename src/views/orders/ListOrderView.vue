<script lang="ts" setup>
import { useFetch } from "../../compossables/useFetch";
import { useRouter } from "vue-router";
import OrderDto from "../../models/orders/order.model";
import OrdersTable from "@/components/orders/ordersTable.vue";

const router = useRouter();

const { resource } = useFetch<OrderDto[]>("/orders");

const deleteOrder = (id: string) => {
  router.push(`/orders/delete/${id}`);
};
const detailOrder = (id: string) => {
  router.push(`/orders/detail/${id}`);
};

const editOrder = (id: string) => {
  router.push(`/orders/edit/${id}`);
};
const changeOrderRole = (id: string) => {
  router.push(`/orders/role-change/${id}`);
};
</script>

<template>
  <div class="container" v-if="resource">
    <div class="row">
      <div class="col-sm-6 mt-5">
        <orders-table
          :orders="resource"
          @on-delete-order="deleteOrder"
          @on-detail-order="detailOrder"
          @on-edit-order="editOrder"
        />
      </div>
      <div class="col-sm-6">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>
