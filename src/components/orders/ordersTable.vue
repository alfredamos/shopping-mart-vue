<script lang="ts" setup>
import OrderDto from "../../models/orders/order.model";

interface Props {
  orders: OrderDto[];
}

const props = defineProps<Props>();

const emit = defineEmits(["onEditOrder", "onDeleteOrder", "onDetailOrder"]);

const deleteOrder = (id: string) => {
  emit("onDeleteOrder", id);
};
const detailOrder = (id: string) => {
  emit("onDetailOrder", id);
};

const editOrder = (id: string) => {
  emit("onEditOrder", id);
};
</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-white p-3">
      <h4 class="text-center">Order List</h4>
    </div>
    <div class="card-body">
      <table class="table table-responsive table-striped table-bordered">
        <thead class="bg-primary">
          <tr>
            <th class="fw-bold">Order No.</th>
            <th class="fw-bold">Buyer</th>
            <th class="fw-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in props.orders">
            <td>{{ order?.id }}</td>
            <td>{{ order?.user?.name }}</td>
            <td>
              <button
                type="button"
                @click="detailOrder(order.id!)"
                class="btn btn-outline-primary m-1 btn-sm fw-bold"
              >
                View
              </button>
              <button
                type="button"
                @click="deleteOrder(order.id!)"
                class="btn btn-outline-danger m-1 btn-sm fw-bold"
              >
                Delete
              </button>
              <button
                type="button"
                @click="editOrder(order.id!)"
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
        to="/orders/create"
        class="btn btn-outline-secondary btn-lg form-control fw-bold"
      >
        Create Order
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
