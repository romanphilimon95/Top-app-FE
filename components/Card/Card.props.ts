import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardPropsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: 'white' | 'blue';
    children: ReactNode;
}