import { DetailedHTMLProps, HTMLAttributes } from "react";
import { AdvantagePropsInterface } from "../Advantage/Advantage.props";

export interface AllAdvantagesPropsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    advantages: AdvantagePropsInterface[];
}