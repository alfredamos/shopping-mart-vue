<script lang="ts" setup>
import CartItemDto from "../../models/cartItems/cartItem.model";
import AlertModal from "../../util/AlertModal.vue"

interface Props{
  cartItem: CartItemDto;
}
const props = defineProps<Props>()

const emit = defineEmits(['onBackToList', 'onDeleteHandler'])

const backToList = () => {
  
  emit('onBackToList')
}

const onCloseOrOPenModal = (value: boolean) => {
  console.log("Right or wrong : ", value)
  emit('onDeleteHandler', value)
}

</script>
<template>
  <div class="col col-sm-8 col-8 offset-2 mt-5" v-if="props.cartItem">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h4 class="text-center">CartItem Detail</h4>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">Cart No.. : {{props.cartItem?.order?.id}}</li>            
            <li class="list-group-item">Product : {{props.cartItem?.product?.name}}</li>
            <li class="list-group-item">Price  : {{props.cartItem?.price}}</li>
            <li class="list-group-item">Quantity : {{props.cartItem?.quantity}}</li>
            
          </ul>
        </div>
        <div class="card-footer">
          <button
          type="button"
            @click="backToList"
            class="btn btn-outline-secondary form-control text-center m-1 fw-bold"
          >
            Back
          </button>
          <button
            type="button"
            class="btn btn-outline-danger form-control fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Delete
          </button>
        </div>
      </div>
      <AlertModal
  :modal-message="'Do you really want to delete cartItem?'"
  :modal-title="'Delete CartItem Confirmation!'"
  :modal-button-close="'Cancel'"
  :modal-button-save="'Delete'"
  @on-open-or-close-modal="onCloseOrOPenModal"
  />
    </div>

</template>