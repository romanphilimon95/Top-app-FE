import { HeaderPropsInterface } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({ ...props }: HeaderPropsInterface): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};