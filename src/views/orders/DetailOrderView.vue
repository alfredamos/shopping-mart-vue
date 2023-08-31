<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "../../compossables/useFetch";
import { computed } from "vue";
import OrderDisplayOne from "../../components/orders/orderDisplayOne.vue";
import { orderService } from "@/services/order.service";
import OrderDto from "../../models/orders/order.model";

const route = useRoute();
const id = route.params.id as string;

const router = useRouter();

const { resource } = useFetch<OrderDto>(`/orders/${id}`);
const order = computed(() => {
  return resource.value;
});

const deleteOrder = (value: boolean) => {
  if (value) {
    orderService
      .deleteOrder(id)
      .then((orderApiRes) => router.push("/orders"));
  } else {
    router.push("/orders");
  }
};

const backToList = () => {
  router.push("/orders");
};
</script>
<template>
  <order-display-one
    v-if="resource"
    :order="order"
    @onBackToList="backToList"
    @onDeleteHandler="deleteOrder"
  />
</template>
