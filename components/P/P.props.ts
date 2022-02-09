import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PPropsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'm' | 'l' | 's';
    children: ReactNode;
}