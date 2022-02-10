import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductModelInterface } from "../../interfaces/product.interface";

export interface ProductPropsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModelInterface;
}