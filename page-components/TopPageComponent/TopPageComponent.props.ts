import { TopLevelCategory, TopPageModelInterface } from "../../interfaces/page.interface";
import { ProductModelInterface } from "../../interfaces/product.interface";

export interface TopPageComponentPropsInterface extends Record<string, unknown> {
	products: ProductModelInterface[];
    page: TopPageModelInterface;
    firstCategory: TopLevelCategory;
}