import Axios from "../interceptors/axios.interceptor";
import { OrderApiResults } from "../models/orders/order-api-results.model";
import OrderDto from "../models/orders/order.model";
import { BehaviorSubject } from "rxjs";

export class OrderService {
  private ordersSubject = new BehaviorSubject<OrderDto[]>([]);
  orders$ = this.ordersSubject.asObservable();

  constructor(public url: string) {
    const orders = this.getOrdersFromLocalStorage();
    if (orders && orders.length > 0) this.onLoad();
  }

  async createOrder(orderDto: OrderDto) {
    const { data } = await Axios.post<OrderApiResults>(this.url, orderDto);

    return data;
  }

  onLoad() {
    console.log("In onload!!!");
    this.getAllOrders()
      .then((data) => {
        this.updateOrders$(data.orders!);
        console.log({ orders: data.orders });
        localStorage.setItem("orders", JSON.stringify(data.orders));
      })
      .catch((error) => console.log(error));
  }

  async editOrder(orderDto: OrderDto) {
    const { data } = await Axios.patch<OrderApiResults>(
      `${this.url}/${orderDto.id}`,
      orderDto
    );
    return data;
  }

  async deleteOrder(id: string) {
    return await Axios.delete<OrderApiResults>(`${this.url}/${id}`);
  }

  async getAllOrders() {
    const { data } = await Axios.get<OrderApiResults>(this.url);
    console.log("In get-all of orders of service,  : ", data);
    return data;
  }

  async getOrderById(id: string) {
    const { data } = await Axios.get<OrderApiResults>(`${this.url}/${id}`);

    return data;
  }

  private getOrdersFromLocalStorage(): OrderDto[] {
    const orders = JSON.parse(localStorage.getItem("orders")!);
    return orders;
  }

  updateOrders$(value: OrderDto[]) {
    this.ordersSubject.next(value);
  }

  getOrders(): OrderDto[] {
    return this.ordersSubject.getValue();
  }
}

const orderUrl = "/orders";

export const orderService = new OrderService(orderUrl);
