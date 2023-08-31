import CategoryDto from "../categories/category.model";

export default class ProductDto { 
  id: string = "";
  name: string = "";
  price: number = 0;
  rating?: number = 0;
  brand: string = ""; 
  quantity: number = 0; 
  description?: string; 
  productImage?: string = ""; 
  categoryId?: string = ""; 
  category?: CategoryDto = new CategoryDto();
}
