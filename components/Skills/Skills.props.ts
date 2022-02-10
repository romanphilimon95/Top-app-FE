import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SkillsPropsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tags: string[];
}