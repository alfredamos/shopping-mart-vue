import Axios from "../interceptors/axios.interceptor";
import { CartItemApiResults } from "../models/cartItems/cartItem-api-results.model";
import CartItemDto from "../models/cartItems/cartItem.model";
import { BehaviorSubject } from "rxjs";

export class CartItemService {
  private cartItemsSubject = new BehaviorSubject<CartItemDto[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(public url: string) {
    const cartItems = this.getCartItemsFromLocalStorage();
    if (cartItems && cartItems.length > 0) this.onLoad();
  }

  async createCartItem(cartItemDto: CartItemDto) {
    const { data } = await Axios.post<CartItemApiResults>(this.url, cartItemDto);

    return data;
  }

  onLoad() {
    console.log("In onload!!!");
    this.getAllCartItems()
      .then((data) => {
        this.updateCartItems$(data.cartItems!);
        console.log({ cartItems: data.cartItems });
        localStorage.setItem("cartItems", JSON.stringify(data.cartItems));
      })
      .catch((error) => console.log(error));
  }

  async editCartItem(cartItemDto: CartItemDto) {
    const { data } = await Axios.patch<CartItemApiResults>(
      `${this.url}/${cartItemDto.id}`,
      cartItemDto
    );
    return data;
  }

  async deleteCartItem(id: string) {
    return await Axios.delete<CartItemApiResults>(`${this.url}/${id}`);
  }

  async getAllCartItems() {
    const { data } = await Axios.get<CartItemApiResults>(this.url);
    console.log("In get-all of cartItems of service,  : ", data);
    return data;
  }

  async getCartItemById(id: string) {
    const { data } = await Axios.get<CartItemApiResults>(`${this.url}/${id}`);

    return data;
  }

  private getCartItemsFromLocalStorage(): CartItemDto[] {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")!);
    return cartItems;
  }

  updateCartItems$(value: CartItemDto[]) {
    this.cartItemsSubject.next(value);
  }

  getCartItems(): CartItemDto[] {
    return this.cartItemsSubject.getValue();
  }
}

const cartItemUrl = "/cart-items";

export const cartItemService = new CartItemService(cartItemUrl);
