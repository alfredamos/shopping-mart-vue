<script lang="ts" setup>
import CartItemDto from '../../models/cartItems/cartItem.model';


interface Props {
  cartItems: CartItemDto[];
}

const props = defineProps<Props>();

const emit = defineEmits(["onEditCartItem", "onDeleteCartItem", "onDetailCartItem", "onMakeAdminCartItem"]);

const deleteCartItem = (id: string) => {
  emit("onDeleteCartItem", id);
};
const detailCartItem = (id: string) => {
  emit("onDetailCartItem", id);
};

const editCartItem = (id: string) => {
  emit("onEditCartItem", id);
};

const makeAdminCartItem = (id: string) => {
  emit("onMakeAdminCartItem", id);
};
</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-white p-3">
      <h4 class="text-center">CartItem List</h4>
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
          <tr v-for="cartItem in props.cartItems">            
            <td>{{ cartItem?.product?.name }}</td>
            <td>
              <button
              type="button"
                @click="detailCartItem(cartItem.id!)"
                class="btn btn-outline-primary m-1 btn-sm fw-bold"
              >
                View
              </button>
              <button
              type="button"
                @click="deleteCartItem(cartItem.id!)"
                class="btn btn-outline-danger m-1 btn-sm fw-bold"
              >
                Delete
              </button>
              <button
              type="button"
                @click="editCartItem(cartItem.id!)"
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
        to="/cart-items/create"
        class="btn btn-outline-secondary btn-lg form-control fw-bold"
      >
        Create CartItem
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
