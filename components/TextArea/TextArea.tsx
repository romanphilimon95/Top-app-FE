import { TextAreaPropsInterface } from "./TextArea.props";
import styles from './TextArea.module.css';
import cn from 'classnames';

export const TextArea = ({ className, ...props }: TextAreaPropsInterface): JSX.Element => {
    return (
        <textarea className={cn(className, styles.textarea)} {...props} />
    );
};