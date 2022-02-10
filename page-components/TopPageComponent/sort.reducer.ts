import { SortEnum } from "../../components/Sort/Sort.props";
import { ProductModelInterface } from "../../interfaces/product.interface";

export type SortAction = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface SortReducerStateInterface {
    sort: SortEnum;
    products: ProductModelInterface[];
}

export const sortReducer = (
    state: SortReducerStateInterface, 
    action: SortAction
): SortReducerStateInterface => {
    switch(action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => 
                    a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => 
                    a.price > b.price ? -1 : 1)
            };
        default:
            throw new Error('Неверный тип сортировки');
    }
}