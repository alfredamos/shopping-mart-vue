import Axios from "../interceptors/axios.interceptor";
import { ProductApiResults } from "../models/products/product-api-results.model";
import ProductDto from "../models/products/product.model";
import { BehaviorSubject } from "rxjs";

export class ProductService {
  private productsSubject = new BehaviorSubject<ProductDto[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(public url: string) {
    const products = this.getProductsFromLocalStorage();
    if (products && products.length > 0) this.onLoad();
  }

  async createProduct(productDto: ProductDto) {
    const { data } = await Axios.post<ProductApiResults>(this.url, productDto);

    return data;
  }

  onLoad() {
    console.log("In onload!!!");
    this.getAllProducts()
      .then((data) => {
        this.updateProducts$(data.products!);
        console.log({ products: data.products });
        localStorage.setItem("products", JSON.stringify(data.products));
      })
      .catch((error) => console.log(error));
  }

  async editProduct(productDto: ProductDto) {
    const { data } = await Axios.patch<ProductApiResults>(
      `${this.url}/${productDto.id}`,
      productDto
    );
    return data;
  }

  async deleteProduct(id: string) {
    return await Axios.delete<ProductApiResults>(`${this.url}/${id}`);
  }

  async getAllProducts() {
    const { data } = await Axios.get<ProductApiResults>(this.url);
    console.log("In get-all of products of service,  : ", data);
    return data;
  }

  async getProductById(id: string) {
    const { data } = await Axios.get<ProductApiResults>(`${this.url}/${id}`);

    return data;
  }

  private getProductsFromLocalStorage(): ProductDto[] {
    const products = JSON.parse(localStorage.getItem("products")!);
    return products;
  }

  updateProducts$(value: ProductDto[]) {
    this.productsSubject.next(value);
  }

  getProducts(): ProductDto[] {
    return this.productsSubject.getValue();
  }
}

const productUrl = "/products";

export const productService = new ProductService(productUrl);
