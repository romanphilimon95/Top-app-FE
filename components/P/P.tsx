import { PPropsInterface } from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 'm', children, className, ...props }: PPropsInterface): JSX.Element => {
    return (
    <p 
        className={cn(styles.p, className, {
            [styles.large]: size == "l",
            [styles.medium]: size == "m",
            [styles.small]: size == "s",
        })}
        {...props}
    >
        {children}
    </p>);
};