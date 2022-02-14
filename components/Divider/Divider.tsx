import { DividerPropsInterface } from "./Divider.props";
import styles from './Divider.module.css';
import classNames from "classnames";

export const Divider = ({ className, ...props }: DividerPropsInterface): JSX.Element => {
    return (
        <hr className={classNames(className, styles.hr)} {...props} />
    );
}; 