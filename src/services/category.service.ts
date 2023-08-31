import Axios from "../interceptors/axios.interceptor";
import { CategoryApiResults } from "../models/categories/category-api-results.model";
import CategoryDto from "../models/categories/category.model";
import { BehaviorSubject } from "rxjs";

export class CategoryService {
  private categoriesSubject = new BehaviorSubject<CategoryDto[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  constructor(public url: string) {
    const categories = this.getCategoriesFromLocalStorage();
    if (categories && categories.length > 0) this.onLoad();
  }

  async createCategory(categoryDto: CategoryDto) {
    const { data } = await Axios.post<CategoryApiResults>(this.url, categoryDto);

    return data;
  }

  onLoad() {
    console.log("In onload!!!");
    this.getAllCategories()
      .then((data) => {
        this.updateCategories$(data.categories!);
        console.log({ categories: data.categories });
        localStorage.setItem("categories", JSON.stringify(data.categories));
      })
      .catch((error) => console.log(error));
  }

  async editCategory(categoryDto: CategoryDto) {
    const { data } = await Axios.patch<CategoryApiResults>(
      `${this.url}/${categoryDto.id}`,
      categoryDto
    );
    return data;
  }

  async deleteCategory(id: string) {
    return await Axios.delete<CategoryApiResults>(`${this.url}/${id}`);
  }
  
  async getAllCategories() {
    const { data } = await Axios.get<CategoryApiResults>(this.url);
    console.log("In get-all of categories of service,  : ", data);
    return data;
  }

  async getCategoryById(id: string) {
    const { data } = await Axios.get<CategoryApiResults>(`${this.url}/${id}`);

    return data;
  }

  private getCategoriesFromLocalStorage(): CategoryDto[] {
    const categories = JSON.parse(localStorage.getItem("categories")!);
    return categories;
  }

  updateCategories$(value: CategoryDto[]) {
    this.categoriesSubject.next(value);
  }

  getCategories(): CategoryDto[] {
    return this.categoriesSubject.getValue();
  }
}

const categoryUrl = "/categories";

export const categoryService = new CategoryService(categoryUrl);
