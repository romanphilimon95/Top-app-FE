import { ReactNode } from "react";

export interface HTagPropsInterface {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}