<script lang="ts" setup>
import OrderDto from "@/models/orders/order.model";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { orderService } from "../../services/order.service";
import { useFetch } from "../../compossables/useFetch";
import OrderForm from "@/forms/orders/OrderForm.vue";
import { Status } from "@/models/enums/status.enum";
import { UserApiResults } from '../../models/users/user-api-results.model';

const router = useRouter();

const order = ref<OrderDto>({
  userId: "", 
  status: Status.Pending,
  
});

const { resource } = useFetch<UserApiResults>("/users");

const users = computed(() => resource?.value?.users!);

const submitOrder = (orderDto: OrderDto) => {
  console.log("New Order, order : ", orderDto);
  orderService
    .createOrder(orderDto)
    .then((orderApiRes) => {
      console.log("Api-response, resp : ", orderApiRes);
      router.push("/orders");
    })
    .catch((error) => console.log(error));
};

const backToList = () => {
  router.push("/orders");
};
</script>

<template>
  <OrderForm
    v-if="resource"
    :initial-value="order"
    :users="users"
    @on-back-to-list="backToList"
    @on-submit-order="submitOrder"
  />
</template>
