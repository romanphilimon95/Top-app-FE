import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdvantagePropsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    description: string;
    _id?: string;
}