import { TagPropsInterface } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 's', children, color = 'ghost', href, className, ...props }: TagPropsInterface): JSX.Element => {
    return (
    <div 
        className={cn(styles.tag, className, {
            [styles.medium]: size == "m",
            [styles.small]: size == "s",
            [styles.ghost]: color == "ghost",
            [styles.red]: color == "red",
            [styles.grey]: color == "grey",
            [styles.primary]: color == "primary",
            [styles.green]: color == "green",
        })}
        {...props}
    >
        {
            href 
            ? <a href={href}>{children}</a>
            : <>{children}</>
        }
    </div>
    );
};