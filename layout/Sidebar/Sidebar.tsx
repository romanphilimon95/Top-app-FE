import { SidebarPropsInterface } from './Sidebar.props';
import { Menu } from '../Menu/Menu';
import styles from './Layout.module.css';
import cn from 'classnames';

export const Sidebar = ({ ...props }: SidebarPropsInterface): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};